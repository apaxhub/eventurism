import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { slugify } from '@/lib/utils'

export async function GET() {
  try {
    const types = await prisma.type.findMany({
      include: {
        categories: true,
      },
      orderBy: { name: 'asc' },
    })

    return NextResponse.json({ types })
  } catch (error) {
    console.error('GET /api/taxonomy error:', error)
    return NextResponse.json({ error: 'Failed to fetch taxonomy' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { kind, name, typeId } = await req.json()

    if (!kind || !name) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const slug = slugify(name)

    if (kind === 'type') {
      const type = await prisma.type.create({
        data: { name, slug },
        include: { categories: true }
      })
      return NextResponse.json({ type }, { status: 201 })
    }

    if (kind === 'category') {
      if (!typeId) {
        return NextResponse.json({ error: 'Type ID is required for a category' }, { status: 400 })
      }
      const category = await prisma.category.create({
        data: { name, slug, typeId },
      })
      return NextResponse.json({ category }, { status: 201 })
    }

    return NextResponse.json({ error: 'Invalid kind' }, { status: 400 })
  } catch (error) {
    console.error('POST /api/taxonomy error:', error)
    return NextResponse.json({ error: 'Failed to create taxonomy item' }, { status: 500 })
  }
}
