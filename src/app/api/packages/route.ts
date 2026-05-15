import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { slugify } from '@/lib/utils'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const typeId = searchParams.get('typeId')
    const categoryId = searchParams.get('categoryId')
    const featured = searchParams.get('featured')
    const published = searchParams.get('published')

    const where: Record<string, unknown> = {}
    if (typeId) where.typeId = typeId
    if (categoryId) where.categoryId = categoryId
    if (featured === 'true') where.featured = true
    if (published !== 'false') where.published = true

    const packages = await prisma.package.findMany({
      where,
      include: {
        type: true,
        category: true,
      },
      orderBy: [{ featured: 'desc' }, { createdAt: 'desc' }],
    })

    return NextResponse.json({ packages })
  } catch (error) {
    console.error('GET /api/packages error:', error)
    return NextResponse.json({ error: 'Failed to fetch packages' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const body = await req.json()
    const {
      title, destination, duration, groupSize, priceFrom,
      typeId, categoryId, tag, description, highlights, inclusions,
      exclusions, itinerary, thumbnail, images, featured, published,
    } = body

    if (!title || !destination || !priceFrom || !thumbnail || !typeId || !categoryId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Validate image count
    const allImages = [thumbnail, ...(images || [])]
    if (allImages.length > 5) {
      return NextResponse.json({ error: 'Maximum 5 images allowed' }, { status: 400 })
    }

    const slug = slugify(title)

    // Check slug uniqueness
    const existing = await prisma.package.findUnique({ where: { slug } })
    const finalSlug = existing ? `${slug}-${Date.now()}` : slug

    const pkg = await prisma.package.create({
      data: {
        title,
        slug: finalSlug,
        destination,
        duration: duration || '',
        groupSize: groupSize || '',
        priceFrom: Number(priceFrom),
        typeId,
        categoryId,
        tag: tag || null,
        description: description || '',
        highlights: highlights || [],
        inclusions: inclusions || [],
        exclusions: exclusions || [],
        itinerary: itinerary || [],
        thumbnail,
        images: images || [],
        featured: featured ?? false,
        published: published ?? true,
      },
    })

    return NextResponse.json({ package: pkg }, { status: 201 })
  } catch (error) {
    console.error('POST /api/packages error:', error)
    return NextResponse.json({ error: 'Failed to create package' }, { status: 500 })
  }
}
