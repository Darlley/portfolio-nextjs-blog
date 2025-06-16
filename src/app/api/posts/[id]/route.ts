import { NextRequest, NextResponse } from 'next/server';

const NOTION_API_KEY = process.env.NOTION_API_KEY;

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const searchParams = req.nextUrl.searchParams;
  const start_cursor = searchParams.get('start_cursor');

  try {
    if (!id) {
      return NextResponse.json(
        { error: "Block ID is required" },
        { status: 400 }
      );
    }

    const response = await fetch(
      `https://api.notion.com/v1/blocks/${id}/children?page_size=100${start_cursor ? `&start_cursor=${start_cursor}` : ''}`,
      {
        method: "GET",
        headers: {
          "Notion-Version": "2022-06-28",
          Authorization: `Bearer ${NOTION_API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Erro: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
