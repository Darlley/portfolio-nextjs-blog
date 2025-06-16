import { cn } from '@/lib/utils';
import { BlockColor, RichTextType } from '@/types/notion-blocks.type';
import Image from 'next/image';
import { RenderBlockProps } from './RenderBlock.types';
import Link from 'next/link';

const blockColorToTailwind: Record<BlockColor, string> = {
  blue: "text-primary",
  blue_background: "bg-primary",
  brown: "text-amber-700",
  brown_background: "bg-amber-700",
  default: "text-white",
  gray: "text-gray-500",
  gray_background: "bg-gray-500",
  green: "text-green-500",
  green_background: "bg-green-500",
  orange: "text-orange-500",
  orange_background: "bg-orange-500",
  yellow: "text-yellow-500",
  yellow_background: "bg-yellow-500",
  pink: "text-pink-500",
  pink_background: "bg-pink-500",
  purple: "text-purple-500",
  purple_background: "bg-purple-500",
  red: "text-red-500",
  red_background: "bg-red-500",
};

export default function RenderBlock({ block }: RenderBlockProps) {
  const blockId = block.id;

  switch (block.type) {
    case "paragraph":
      if (!block.paragraph || !block.paragraph.rich_text) {
        return <p className="text-red-500">Parágrafo vazio ou mal formado.</p>;
      }

      const color = block.paragraph.color;

      return (
        <div className="space-y-2">
          {block.paragraph.rich_text.map(({ text, annotations }: RichTextType, i: number) => (
            text?.link ? (
              <a
                key={`${blockId}-link-${i}`}
                href={text.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {text.content}
              </a>
            ) : (
              <p
                key={`${blockId}-${i}`}
                className={cn(
                  blockColorToTailwind[color],
                  annotations.bold && "font-bold",
                  annotations.italic && "italic",
                  annotations.underline && "underline",
                  annotations.strikethrough && "line-through",
                  annotations.code && "font-mono bg-gray-800 px-1 rounded"
                )}
              >
                {text.content}
              </p>
            )
          ))}
        </div>
      );

    case "heading_1":
      return (
        <h1 className="text-3xl font-bold text-white mt-8 mb-4">
          {block.heading_1?.rich_text
            .map((text: any) => text.text.content)
            .join("")}
        </h1>
      );

    case "heading_2":
      return (
        <h2 className="text-2xl font-bold text-white mt-6 mb-3">
          {block.heading_2?.rich_text
            .map((text: any) => text.text.content)
            .join("")}
        </h2>
      );

    case "heading_3":
      return (
        <h3 className="text-xl font-bold text-white mt-5 mb-2">
          {block?.heading_3?.rich_text
            .map((text: any) => text.text.content)
            .join("")}
        </h3>
      );

    case "bulleted_list_item":
      return (
        <ul className="list-disc pl-6 text-gray-200">
          <li>
            {block?.bulleted_list_item?.rich_text
              .map((text: any) => text.text.content)
              .join("")}
          </li>
        </ul>
      );

    case "numbered_list_item":
      return (
        <ol className="list-decimal pl-6 text-gray-200">
          <li>
            {block?.numbered_list_item?.rich_text
              .map((text: any) => text.text.content)
              .join("")}
          </li>
        </ol>
      );

    case "image":
      const imageUrl = block?.image?.file?.url

      return (
        <div className="my-6">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt="Imagem do artigo" // Alt do texto padrão
              width={800}
              height={500}
              className="rounded-lg w-full object-cover border border-gray-900"
            />
          ) : (
            <p className="text-red-500">Imagem não encontrada.</p>
          )}
        </div>
      );

    case "code":
      return (
        <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto my-4">
          <code className="text-sm text-gray-200 font-mono">
            {block?.code?.rich_text
              .map((text: any) => text.text.content)
              .join("")}
          </code>
        </pre>
      );

    case "quote":
      return (
        <blockquote className="border-l-4 border-primary pl-4 py-1 my-4 text-gray-300 italic">
          {block?.quote?.rich_text
            .map(({ text, annotations }: RichTextType, i: number) => (
              text?.link ? (
                <a
                  key={`${blockId}-link-${i}`}
                  href={text.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {text.content}
                </a>
              ) : (
                <p
                  key={`${blockId}-${i}`}
                  className={cn(
                    annotations.bold && "font-bold",
                    annotations.italic && "italic",
                    annotations.underline && "underline",
                    annotations.strikethrough && "line-through",
                    annotations.code && "font-mono bg-gray-800 px-1 rounded"
                  )}
                >
                  {text.content}
                </p>
              )
            ))}
        </blockquote>
      );

    case "divider":
      return <hr className="my-6 border-gray-700" />;

    case "video":
      const video = block?.video

      if (!video) {
        return <p className="text-red-500">Vídeo não encontrado.</p>
      }

      if (video.type === "file") {
        return (
          <div className="pb-6 flex items-center justify-center">
            <iframe
              src={video.file?.url.replace("watch?v=", "embed/")}
              title="Embedded Video"
              frameBorder="0"
              allowFullScreen
              className="w-full aspect-video rounded-xl border border-gray-900"
            ></iframe>
          </div>
        )
      }

      if (video.type === "external") {
        const externalUrl = video.external?.url

        if (!externalUrl) {
          return <p className="text-red-500">Vídeo externo não encontrado.</p>
        }

        const isYoutubeLink = externalUrl.includes("youtu.be") || externalUrl.includes("youtube")

        if (isYoutubeLink) {
          const videoIdMatch = externalUrl.match(
            /(?:youtu\.be\/|youtube\.com\/(?:.*v=|embed\/|v\/|.*[?&]v=))([^"&?/ ]{11})/
          )

          const videoId = videoIdMatch ? videoIdMatch[1] : null

          if (videoId) {
            return (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=0&controls=0&quality=hd1080`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                sandbox="allow-same-origin allow-scripts allow-popups"
                className="w-full aspect-video rounded-xl border border-gray-900"
              />
            )
          }
        }

        return (
          <p className="text-red-500">
            Vídeo externo:{" "}
            <Link href={externalUrl} target="_blank">
              {externalUrl}
            </Link>
          </p>
        )
      }

      return <p className="text-red-500">Vídeo não encontrado.</p>

    case "callout":
      const calloutIcon = block?.callout?.icon?.emoji
      const calloutColor = block?.callout?.color

      return (
        <div className="flex items-center p-3 sm:p-4 bg-primary/20 text-primary border border-primary rounded-lg">
          <div className='mr-2'>
            <span className="text-xl sm:text-2xl">{calloutIcon ?? "📌"}</span>
          </div>
          <div>
            {block?.callout?.rich_text
              .map(({ text, annotations }: RichTextType, i: number) => (
                text?.link ? (
                  <a
                    key={`${blockId}-link-${i}`}
                    href={text.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {text.content}
                  </a>
                ) : (
                  <p
                    key={`${blockId}-${i}`}
                    className={cn(
                      annotations.bold && "font-bold",
                      annotations.italic && "italic",
                      annotations.underline && "underline",
                      annotations.strikethrough && "line-through",
                      annotations.code && "font-mono bg-gray-800 px-1 rounded"
                    )}
                  >
                    {text.content}
                  </p>
                )
              ))}
          </div>
        </div>
      )

    default:
      return <p className="text-gray-400">Bloco não suportado: {block.type}</p>;
  }
}

