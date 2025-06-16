import { NextRequest, NextResponse } from "next/server";

const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;
const NOTION_API_KEY = process.env.NOTION_API_KEY;
const ALLOWED_ORIGIN = process.env.BASE_FETCH_URL;

type RequestBody = {
  filter?: any; // Aqui você pode tipar melhor se souber o formato exato
  sorts?: any[];
  start_cursor?: string;
  page_size?: number;
  searchQuery?: string;
};


export async function POST(req: NextRequest) {
  try {
    if (!NOTION_DATABASE_ID || !NOTION_API_KEY) {
      throw new Error("API Keys não estão definidas");
    }

    const { filter, sorts, start_cursor, page_size, searchQuery }: RequestBody = await req.json();

    let body: any = {
      page_size: page_size || 100,
      filter: {
        and: [
          {
            property: "Status",
            status: {
              equals: "Publicado",
            },
          }
        ]
      }
    };

    if (searchQuery) {
      body.filter.and.push({
        or: [
          {
            property: "Titulo",
            title: { contains: searchQuery },
          },
          {
            property: "Summary",
            rich_text: { contains: searchQuery },
          },
        ],
      });
    } else if (filter) {
      body.filter = filter;
    }
    

    // Adiciona ordenação se existir
    if (sorts) {
      body.sorts = sorts;
    }

    // Adiciona cursor se existir
    if (start_cursor) {
      body.start_cursor = start_cursor;
    }

    const response = await fetch(
      `https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`,
      {
        method: "POST",
        headers: {
          "Notion-Version": "2022-06-28",
          "Content-Type": "application/json",
          Authorization: `Bearer ${NOTION_API_KEY}`,
        },
        body: JSON.stringify(body),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Notion API Error:', errorData);
      throw new Error(`Erro na API do Notion: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();

    // Garante que a resposta sempre tenha a estrutura correta
    const formattedResponse = {
      object: data.object || 'list',
      results: data.results || [],
      next_cursor: data.next_cursor,
      has_more: data.has_more || false,
    };

    return new Response(JSON.stringify(formattedResponse), { 
      status: 200, 
      headers: {
        "Access-Control-Allow-Origin": ALLOWED_ORIGIN || '*',
        "Content-Type": "application/json",
      }, 
    });

  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json({ 
      error: error.message,
      results: [],
      has_more: false,
      next_cursor: null
    }, { status: 500 });
  }
}
