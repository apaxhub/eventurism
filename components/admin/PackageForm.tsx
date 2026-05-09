'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/FormFields'
import { Button } from '@/components/ui/Button'
import { RichTextEditor } from './RichTextEditor'
import { ImageUploader } from './ImageUploader'
import { Plus, X, GripVertical } from 'lucide-react'

interface ItineraryDay { day: number; title: string; description: string }

interface PackageFormProps {
  initialData?: {
    id?: string
    title?: string
    destination?: string
    duration?: string
    groupSize?: string
    priceFrom?: number
    category?: string
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

const CATEGORIES = ['Hill Station', 'Beach', 'Nature', 'Heritage', 'Adventure', 'Religious', 'Wildlife', 'General']

function StringListInput({ label, items, onChange, placeholder }: {
  label: string; items: string[]; onChange: (v: string[]) => void; placeholder?: string
}) {
  const [input, setInput] = useState('')
  const add = () => {
    const v = input.trim()
    if (v && !items.includes(v)) { onChange([...items, v]); setInput('') }
  }
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-secondary">{label}</label>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), add())}
          placeholder={placeholder || `Add ${label.toLowerCase()}...`}
          className="flex-1 px-4 py-2.5 rounded-xl border border-border bg-white text-secondary placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
        />
        <button type="button" onClick={add} className="px-3 py-2.5 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors">
          <Plus className="w-4 h-4" />
        </button>
      </div>
      {items.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-1.5 bg-ivory border border-border rounded-lg px-2.5 py-1.5 text-xs text-secondary">
              <GripVertical className="w-3 h-3 text-gray-300" />
              <span>{item}</span>
              <button type="button" onClick={() => onChange(items.filter((_, j) => j !== i))} className="text-gray-400 hover:text-red-500 transition-colors">
                <X className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export function PackageForm({ initialData = {}, mode }: PackageFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [title, setTitle] = useState(initialData.title || '')
  const [destination, setDestination] = useState(initialData.destination || '')
  const [duration, setDuration] = useState(initialData.duration || '')
  const [groupSize, setGroupSize] = useState(initialData.groupSize || '')
  const [priceFrom, setPriceFrom] = useState(String(initialData.priceFrom || ''))
  const [category, setCategory] = useState(initialData.category || 'General')
  const [tag, setTag] = useState(initialData.tag || '')
  const [description, setDescription] = useState(initialData.description || '')
  const [highlights, setHighlights] = useState<string[]>(initialData.highlights || [])
  const [inclusions, setInclusions] = useState<string[]>(initialData.inclusions || [])
  const [exclusions, setExclusions] = useState<string[]>(initialData.exclusions || [])
  const [itinerary, setItinerary] = useState<ItineraryDay[]>(initialData.itinerary || [])
  const [thumbnail, setThumbnail] = useState(initialData.thumbnail || '')
  const [images, setImages] = useState<string[]>(initialData.images || [])
  const [featured, setFeatured] = useState(initialData.featured ?? false)
  const [published, setPublished] = useState(initialData.published ?? true)

  const addItineraryDay = () => {
    setItinerary(prev => [...prev, { day: prev.length + 1, title: '', description: '' }])
  }

  const updateItinerary = (i: number, field: keyof ItineraryDay, value: string | number) => {
    setItinerary(prev => prev.map((d, idx) => idx === i ? { ...d, [field]: value } : d))
  }

  const removeItineraryDay = (i: number) => {
    setItinerary(prev => prev.filter((_, idx) => idx !== i).map((d, idx) => ({ ...d, day: idx + 1 })))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!title || !destination || !priceFrom || !thumbnail) {
      setError('Title, destination, price, and cover image are required.')
      return
    }
    setLoading(true)
    try {
      const payload = { title, destination, duration, groupSize, priceFrom: Number(priceFrom), category, tag, description, highlights, inclusions, exclusions, itinerary, thumbnail, images, featured, published }
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

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      {error && <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3">{error}</div>}

      {/* Basic Info */}
      <div className="bg-white rounded-2xl border border-border/50 p-6 flex flex-col gap-5">
        <h2 className="font-display font-semibold text-lg text-secondary">Basic Information</h2>
        <Input id="title" label="Package Title *" value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g. Ooty Nilgiri Hills Escape" required />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Input id="destination" label="Destination *" value={destination} onChange={e => setDestination(e.target.value)} placeholder="e.g. Ooty, Tamil Nadu" required />
          <Select id="category" label="Category" value={category} onChange={e => setCategory(e.target.value)}>
            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </Select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <Input id="duration" label="Duration" value={duration} onChange={e => setDuration(e.target.value)} placeholder="e.g. 3N / 4D" />
          <Input id="groupSize" label="Group Size" value={groupSize} onChange={e => setGroupSize(e.target.value)} placeholder="e.g. 2–20 pax" />
          <Input id="priceFrom" label="Starting Price (₹) *" type="number" value={priceFrom} onChange={e => setPriceFrom(e.target.value)} placeholder="e.g. 8999" min={1} required />
        </div>
        <Input id="tag" label="Badge Tag" value={tag} onChange={e => setTag(e.target.value)} placeholder="e.g. TRENDING, FAMILY FAVOURITE" />
      </div>

      {/* Description */}
      <div className="bg-white rounded-2xl border border-border/50 p-6">
        <h2 className="font-display font-semibold text-lg text-secondary mb-4">Description</h2>
        <RichTextEditor value={description} onChange={setDescription} label="Package Description" placeholder="Describe this package..." />
      </div>

      {/* Images */}
      <div className="bg-white rounded-2xl border border-border/50 p-6">
        <h2 className="font-display font-semibold text-lg text-secondary mb-4">Images</h2>
        <ImageUploader thumbnail={thumbnail} images={images} onThumbnailChange={setThumbnail} onImagesChange={setImages} />
      </div>

      {/* Lists */}
      <div className="bg-white rounded-2xl border border-border/50 p-6 flex flex-col gap-6">
        <h2 className="font-display font-semibold text-lg text-secondary">Package Details</h2>
        <StringListInput label="Highlights" items={highlights} onChange={setHighlights} placeholder="e.g. Nilgiri Mountain Railway ride" />
        <StringListInput label="Inclusions" items={inclusions} onChange={setInclusions} placeholder="e.g. 3 nights accommodation" />
        <StringListInput label="Exclusions" items={exclusions} onChange={setExclusions} placeholder="e.g. Flights to destination" />
      </div>

      {/* Itinerary */}
      <div className="bg-white rounded-2xl border border-border/50 p-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-display font-semibold text-lg text-secondary">Itinerary</h2>
          <button type="button" onClick={addItineraryDay} className="inline-flex items-center gap-1.5 text-sm text-primary border border-primary px-3 py-1.5 rounded-xl hover:bg-primary hover:text-white transition-colors">
            <Plus className="w-3.5 h-3.5" /> Add Day
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {itinerary.map((day, i) => (
            <div key={i} className="relative border border-border rounded-xl p-4 bg-ivory/30">
              <button type="button" onClick={() => removeItineraryDay(i)} className="absolute top-3 right-3 w-6 h-6 rounded-full bg-red-50 text-red-400 flex items-center justify-center hover:bg-red-100 transition-colors">
                <X className="w-3 h-3" />
              </button>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-white text-xs font-bold font-mono">{day.day}</div>
                <input value={day.title} onChange={e => updateItinerary(i, 'title', e.target.value)} placeholder="Day title e.g. Chennai → Ooty Arrival" className="flex-1 px-3 py-1.5 rounded-lg border border-border bg-white text-sm text-secondary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
              </div>
              <textarea value={day.description} onChange={e => updateItinerary(i, 'description', e.target.value)} placeholder="Day description..." rows={2} className="w-full px-3 py-2 rounded-lg border border-border bg-white text-sm text-secondary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none" />
            </div>
          ))}
          {itinerary.length === 0 && <p className="text-sm text-gray-400 font-mono text-center py-4">No itinerary days added yet</p>}
        </div>
      </div>

      {/* Settings */}
      <div className="bg-white rounded-2xl border border-border/50 p-6">
        <h2 className="font-display font-semibold text-lg text-secondary mb-4">Settings</h2>
        <div className="flex flex-col sm:flex-row gap-6">
          <label className="flex items-center gap-3 cursor-pointer">
            <div className="relative">
              <input type="checkbox" checked={published} onChange={e => setPublished(e.target.checked)} className="sr-only" />
              <div className={`w-11 h-6 rounded-full transition-colors ${published ? 'bg-primary' : 'bg-gray-200'}`} />
              <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${published ? 'translate-x-5' : 'translate-x-0'}`} />
            </div>
            <div>
              <div className="text-sm font-medium text-secondary">Published</div>
              <div className="text-xs text-gray-400 font-mono">Visible on website</div>
            </div>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <div className="relative">
              <input type="checkbox" checked={featured} onChange={e => setFeatured(e.target.checked)} className="sr-only" />
              <div className={`w-11 h-6 rounded-full transition-colors ${featured ? 'bg-primary' : 'bg-gray-200'}`} />
              <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${featured ? 'translate-x-5' : 'translate-x-0'}`} />
            </div>
            <div>
              <div className="text-sm font-medium text-secondary">Featured</div>
              <div className="text-xs text-gray-400 font-mono">Show on homepage</div>
            </div>
          </label>
        </div>
      </div>

      {/* Submit */}
      <div className="flex items-center gap-4">
        <Button type="submit" size="lg" loading={loading}>
          {mode === 'create' ? 'Create Package' : 'Save Changes'}
        </Button>
        <Button type="button" variant="ghost" onClick={() => router.back()}>Cancel</Button>
      </div>
    </form>
  )
}
