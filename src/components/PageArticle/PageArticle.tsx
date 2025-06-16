"use client";

import MotionDesign from "@/components/ui/motion-design";
import {
  DatabaseResponseType,
  DatabaseResultsType,
} from "@/types/notion-database.type";
import Image from "next/image";
import { useEffect, useState } from "react";
import useSWR from "swr";

import RenderBlock from "@/components/RenderBlock/RenderBlock";
import classNames from "classnames";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useInfiniteBlocks from "@/hooks/useSWRInfinite";
import { Button } from "@heroui/button";

const fetchArticleBySlug = async (url: string, slug: string) =>
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
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
  }).then((res) => res.json());


export default function PageArticle({
  slug
}: {
  slug: string
}) {
  const isSlugValid = typeof slug === "string";

  const [pageId, setPageId] = useState<string | null>(null);

  const {
    data: articleData,
    error: articleError,
    isLoading: articleLoading,
  } = useSWR<DatabaseResponseType>(
    isSlugValid ? ["/api/posts", slug] : null,
    ([url, slug]: [string, string]) => fetchArticleBySlug(url, slug), // Explicitly define the types
    {
      refreshInterval: 0,
      revalidateOnFocus: true,
    }
  );

  const { blocks, isLoading, error, isReachingEnd, loadMore, isValidating } = useInfiniteBlocks(pageId);

  useEffect(() => {
    if (articleData && articleData?.results?.length > 0) {
      setPageId(articleData?.results[0].id);
    }
  }, [articleData]);

  if (articleLoading)
    return (
      <div className="flex-grow flex justify-center items-center">
        <div className="h-96">
          <MotionDesign />
        </div>
      </div>
    );
  if (articleError)
    return (
      <div className="flex h-full flex-grow items-center justify-center flex-col gap-6">
        <h1 className="text-center font-boldtext-4xl md:text-7xl">
          Erro ao carregar o artigo
        </h1>
        <Button as={Link} href="/" color="primary">
          Sair
        </Button>
      </div>
    );

  if (!articleData?.results || articleData.results.length === 0) {
    return (
      <div className="flex h-full flex-grow items-center justify-center flex-col gap-6">
        <h1 className="text-center font-boldtext-4xl md:text-7xl">
          Artigo não encontrado
        </h1>
        <Button as={Link} href="/" color="primary">
          Sair
        </Button>
      </div>
    );
  }

  const article = articleData.results[0] as unknown as DatabaseResultsType;
  const { properties } = article;

  return (
    <div className="flex-grow overflow-hidden">
      <header className="px-6 lg:px-8 py-10 lg:py-20">
        <div className="flex flex-col items-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-center text-3xl md:text-6xl font-bold">
            {properties.Titulo.title[0]?.plain_text}
          </h1>
          <p className="text-gray-400 max-w-2xl text-center">
            {properties.Summary.rich_text[0]?.text.content || ""}
          </p>
          <p className="text-sm text-gray-500">
            Publicado em{" "}
            {new Date(
              properties["Criado em"].created_time
            ).toLocaleDateString()}
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-4xl">
        <div
          className={classNames(
            "flex justify-center overflow-hidden md:rounded-xl border border-gray-800",
            properties?.Featured?.files?.length > 0 && "w-full"
          )}
        >
          {properties?.Featured?.files?.length > 0 && (
            <Swiper
              spaceBetween={50}
              watchSlidesProgress
              modules={[Pagination, Scrollbar, Autoplay]}
              slidesPerView={1}
              // onSlideChange={() => console.log("slide change")}
              // onSwiper={(swiper) => console.log(swiper)}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
            >
              {properties?.Featured?.files.map((image, key) => (
                <SwiperSlide key={key}>
                  <Image
                    alt={image?.name || "Imagem do artigo"}
                    src={image?.file.url || "/thumbnail.png"}
                    width={1200}
                    height={600}
                    className="object-cover object-top md:rounded-xl w-full h-[300px] lg:h-[400px] overflow-hidden"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

        {/* Article Content */}
        <div className="p-6 lg:px-8 space-y-4">
          {isLoading && pageId ? (
            <div className="flex-grow flex justify-center items-center">
              <div className="h-96">
                <MotionDesign />
              </div>
            </div>
          ) : (
            <div className="space-y-6 article-content">
              {blocks.map((block, index) => (
                <RenderBlock key={index} block={block} />
              ))}
            </div>
          )}


          <div className="flex flex-col justify-center w-full">
            {!isReachingEnd && (
              <Button
                onPress={loadMore}
                color="primary"
                disabled={isValidating}
                className="max-w-sm mx-auto cursor-pointer"
                isLoading={isValidating}
              >
                {isValidating ? "Carregando..." : "Carregar mais"}
              </Button>
            )}
            <Button as={Link} href="/" className="max-w-sm mx-auto mt-6" color="primary" variant="light">
              Voltar ao blog
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
