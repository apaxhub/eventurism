'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/FormFields'
import { Button } from '@/components/ui/Button'
import { RichTextEditor } from './RichTextEditor'
import { ImageUploader } from './ImageUploader'
import { Plus, X } from 'lucide-react'

interface ItineraryDay { day: number; title: string; description: string }

interface PackageFormProps {
  initialData?: {
    id?: string
    title?: string
    destination?: string
    duration?: string
    groupSize?: string
    priceFrom?: number
    typeId?: string
    categoryId?: string
    tag?: string
    description?: string
    highlights?: string[]
    inclusions?: string[]
    exclusions?: string[]
    itinerary?: ItineraryDay[]
    thumbnail?: string
    images?: string[]
    featured?: boolean
    published?: boolean
  }
  mode: 'create' | 'edit'
}

type TaxonomyType = { id: string; name: string; categories: { id: string; name: string }[] }

export function PackageForm({ initialData = {}, mode }: PackageFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [types, setTypes] = useState<TaxonomyType[]>([])
  
  const [showModal, setShowModal] = useState(false)
  const [modalKind, setModalKind] = useState<'type' | 'category'>('category')
  const [modalName, setModalName] = useState('')
  const [modalTypeId, setModalTypeId] = useState('')

  const [title, setTitle] = useState(initialData.title || '')
  const [destination, setDestination] = useState(initialData.destination || '')
  const [duration, setDuration] = useState(initialData.duration || '')
  const [groupSize, setGroupSize] = useState(initialData.groupSize || '')
  const [priceFrom, setPriceFrom] = useState(String(initialData.priceFrom || ''))
  const [typeId, setTypeId] = useState(initialData.typeId || '')
  const [categoryId, setCategoryId] = useState(initialData.categoryId || '')
  const [tag, setTag] = useState(initialData.tag || '')
  const [description, setDescription] = useState(initialData.description || '')
  const [highlights, setHighlights] = useState(initialData.highlights?.join(', ') || '')
  const [inclusions, setInclusions] = useState(initialData.inclusions?.join(', ') || '')
  const [exclusions, setExclusions] = useState(initialData.exclusions?.join(', ') || '')
  const [itinerary, setItinerary] = useState<ItineraryDay[]>(initialData.itinerary || [])
  const [thumbnail, setThumbnail] = useState(initialData.thumbnail || '')
  const [images, setImages] = useState<string[]>(initialData.images || [])
  const [featured, setFeatured] = useState(initialData.featured ?? false)
  const [published, setPublished] = useState(initialData.published ?? true)

  useEffect(() => {
    fetch('/api/taxonomy')
      .then(r => r.json())
      .then(d => setTypes(d.types || []))
      .catch(console.error)
  }, [])

  const handleCreateTaxonomy = async () => {
    if (!modalName.trim()) return
    try {
      const res = await fetch('/api/taxonomy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ kind: modalKind, name: modalName.trim(), typeId: modalTypeId })
      })
      if (!res.ok) throw new Error()
      const data = await res.json()
      
      const newTypesRes = await fetch('/api/taxonomy')
      const newTypesData = await newTypesRes.json()
      setTypes(newTypesData.types || [])
      
      if (modalKind === 'type') setTypeId(data.type.id)
      else setCategoryId(data.category.id)

      setShowModal(false)
      setModalName('')
    } catch (err) {
      alert('Error creating item')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!title || !destination || !priceFrom || !thumbnail || !typeId || !categoryId) {
      setError('Title, destination, price, type, category, and cover image are required.')
      return
    }
    setLoading(true)
    try {
      const payload = {
        title, destination, duration, groupSize, priceFrom: Number(priceFrom),
        typeId, categoryId, tag, description, thumbnail, images, featured, published,
        highlights: highlights.split(',').map(s => s.trim()).filter(Boolean),
        inclusions: inclusions.split(',').map(s => s.trim()).filter(Boolean),
        exclusions: exclusions.split(',').map(s => s.trim()).filter(Boolean),
        itinerary
      }
      
      const url = mode === 'create' ? '/api/packages' : `/api/packages/${initialData.id}`
      const method = mode === 'create' ? 'POST' : 'PATCH'
      const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      if (!res.ok) throw new Error((await res.json()).error || 'Failed')
      router.push('/admin/packages')
      router.refresh()
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  const selectedType = types.find(t => t.id === typeId)

  return (
    <div className="w-full max-w-3xl mx-auto p-4 sm:p-6 bg-white shadow-sm sm:rounded-lg">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
        {error && <div className="text-red-500 font-medium">{error}</div>}

        <Input id="title" label="Package Title *" value={title} onChange={e => setTitle(e.target.value)} required />
        <Input id="destination" label="Destination *" value={destination} onChange={e => setDestination(e.target.value)} required />
        <Input id="tag" label="Badge Tag" value={tag} onChange={e => setTag(e.target.value)} />
        
        <div className="flex flex-col gap-4 border p-4 rounded-md bg-gray-50/50">
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium">Type & Category Settings</label>
            <Button type="button" onClick={() => setShowModal(true)} variant="outline" size="sm">
              <Plus className="w-4 h-4 mr-1" /> Add New Type/Category
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Select id="type" label="Type *" value={typeId} onChange={e => { setTypeId(e.target.value); setCategoryId('') }} required>
                <option value="">Select Type</option>
                {types.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
              </Select>
            </div>
            <div className="flex-1">
              <Select id="category" label="Category *" value={categoryId} onChange={e => setCategoryId(e.target.value)} required disabled={!typeId}>
                <option value="">Select Category</option>
                {selectedType?.categories?.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </Select>
            </div>
          </div>
        </div>

        <Input id="duration" label="Duration" value={duration} onChange={e => setDuration(e.target.value)} />
        <Input id="groupSize" label="Group Size" value={groupSize} onChange={e => setGroupSize(e.target.value)} />
        <Input id="priceFrom" label="Starting Price (₹) *" type="number" value={priceFrom} onChange={e => setPriceFrom(e.target.value)} required />
        
        <RichTextEditor value={description} onChange={setDescription} label="Description" />
        <ImageUploader thumbnail={thumbnail} images={images} onThumbnailChange={setThumbnail} onImagesChange={setImages} />
        
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Highlights (comma separated)</label>
          <textarea value={highlights} onChange={e => setHighlights(e.target.value)} className="w-full border p-2 rounded-md" rows={3} />
        </div>
        
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Inclusions (comma separated)</label>
          <textarea value={inclusions} onChange={e => setInclusions(e.target.value)} className="w-full border p-2 rounded-md" rows={3} />
        </div>
        
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Exclusions (comma separated)</label>
          <textarea value={exclusions} onChange={e => setExclusions(e.target.value)} className="w-full border p-2 rounded-md" rows={3} />
        </div>
        
        <div className="flex flex-col gap-4 border p-4 rounded-md">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium">Itinerary</label>
            <Button type="button" size="sm" onClick={() => setItinerary(prev => [...prev, { day: prev.length + 1, title: '', description: '' }])}>+ Add Day</Button>
          </div>
          {itinerary.map((day, i) => (
            <div key={i} className="flex gap-2">
              <span className="font-bold pt-2">D{i+1}</span>
              <div className="flex-1 flex flex-col gap-2">
                <input className="border p-2 rounded" placeholder="Title" value={day.title} onChange={e => setItinerary(prev => prev.map((d, idx) => idx === i ? { ...d, title: e.target.value } : d))} />
                <textarea className="border p-2 rounded" placeholder="Description" rows={2} value={day.description} onChange={e => setItinerary(prev => prev.map((d, idx) => idx === i ? { ...d, description: e.target.value } : d))} />
              </div>
              <Button type="button" variant="ghost" onClick={() => setItinerary(prev => prev.filter((_, idx) => idx !== i).map((d, idx) => ({ ...d, day: idx + 1 })))}>X</Button>
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          <label className="flex items-center gap-2"><input type="checkbox" checked={published} onChange={e => setPublished(e.target.checked)} /> Published</label>
          <label className="flex items-center gap-2"><input type="checkbox" checked={featured} onChange={e => setFeatured(e.target.checked)} /> Featured</label>
        </div>

        <div className="flex gap-4 mt-4">
          <Button type="submit" loading={loading}>{mode === 'create' ? 'Create' : 'Save'}</Button>
          <Button type="button" variant="outline" onClick={() => router.back()}>Cancel</Button>
        </div>
      </form>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-lg">Add Taxonomy</h3>
              <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-black">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex gap-4 border-b pb-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" checked={modalKind === 'category'} onChange={() => setModalKind('category')} /> Category
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" checked={modalKind === 'type'} onChange={() => setModalKind('type')} /> Type
              </label>
            </div>

            {modalKind === 'category' && (
              <Select id="modalType" label="Parent Type" value={modalTypeId} onChange={e => setModalTypeId(e.target.value)}>
                <option value="">Select Parent Type</option>
                {types.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
              </Select>
            )}

            <Input id="taxonomyName" label={`${modalKind === 'type' ? 'Type' : 'Category'} Name`} value={modalName} onChange={e => setModalName(e.target.value)} placeholder={`Enter ${modalKind} name`} />

            <div className="flex gap-2 justify-end mt-4">
              <Button variant="outline" onClick={() => setShowModal(false)}>Cancel</Button>
              <Button onClick={handleCreateTaxonomy} disabled={!modalName || (modalKind === 'category' && !modalTypeId)}>Add {modalKind}</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
