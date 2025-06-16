import PageArticle from "@/components/PageArticle";
import { DatabaseResponseType } from "@/types/notion-database.type";
import { Metadata, ResolvingMetadata } from "next";


const NOTION_API_KEY = process.env.NOTION_API_KEY;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params

  const getStaticPropsArticlesResults = await fetch(`https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`,
    {
      method: "POST",
      headers: {
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
        Authorization: `Bearer ${NOTION_API_KEY}`,
      },
      body: JSON.stringify({
        filter: {
          and: [
            {
              property: "Status",
              status: {
                equals: "Publicado",
              },
            },
            {
              property: "URL",
              formula: {
                string: {
                  equals: slug,
                },
              },
            },
          ],
        },
      }),
    }
  );
  const articles = await getStaticPropsArticlesResults.json() as DatabaseResponseType;
  const previousImages = (await parent).openGraph?.images || []

  const metadata = {
    title: articles?.results[0]?.properties.Titulo.title[0]?.plain_text,
    description: articles?.results[0]?.properties?.Summary?.rich_text[0]?.plain_text ?? `Lei o artigo ${articles?.results[0]?.properties.Titulo.title[0]?.plain_text} escrito por Darlley.`,
    openGraph: {
      images: [
        articles?.results[0]?.properties?.Featured?.files[0]?.file?.url,
        '/thumbnail.png',
        ...previousImages
      ],
    },
  }

  return metadata
}


export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  return (
    <PageArticle slug={slug} />
  );
}