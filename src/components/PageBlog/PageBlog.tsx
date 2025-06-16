"use client";

import { useEffect, useState } from "react";
import useSWR from "swr";

import { DatabaseResponseType } from "@/types/notion-database.type";

import Image from "next/image";
import Link from "next/link";

import MotionDesign from "../ui/motion-design";

// SWIPER
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Scrollbar, Pagination as SwiperPagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// PAGINATION
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Input } from "@heroui/input";
import { Pagination } from "@heroui/pagination";
import { SparklesText } from "../ui/sparkles-text";

const PAGE_SIZE = 9;

// FETCHER
const fetcher = async ([url, cursor, search]: [string, string | null, string]) => {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      page_size: PAGE_SIZE,
      start_cursor: cursor,
      searchQuery: search,
      sorts: [{ property: "Criado em", direction: "descending" }],
    }),
  });
  return response.json();
};

async function fetchTotalItems(searchQuery: string) {
  const response = await fetch("/api/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      page_size: 100,
      searchQuery,
      filter: {
        and: [
          { property: "Status", status: { equals: "Publicado" } },
          searchQuery ? {
            or: [
              { property: "Titulo", title: { contains: searchQuery } },
              { property: "Summary", rich_text: { contains: searchQuery } },
            ],
          } : null,
        ].filter(Boolean),
      },
    }),
  });

  const data = await response.json();
  return data;
}

// COMPONENTE
export default function PageBlog() {
  const [currentCursor, setCurrentCursor] = useState<string | null>(null);
  const [cursors, setCursors] = useState<(string | null)[]>([null]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [inputValue, setInputValue] = useState("");

  // Função para lidar com a busca quando pressiona Enter ou clica no botão
  const handleSearch = () => {
    setSearchQuery(inputValue);
    setCurrentPage(1);
    setCurrentCursor(null);
    setCursors([null]);
  };

  // Função para limpar a busca
  const clearSearch = () => {
    setInputValue("");
    setSearchQuery("");
    setCurrentPage(1);
    setCurrentCursor(null);
    setCursors([null]);
  };

  const { data, error, isLoading } = useSWR<DatabaseResponseType>(
    ["/api/posts", currentCursor, searchQuery] as const,
    fetcher,
    {
      refreshInterval: 0,
      revalidateOnFocus: false,
      keepPreviousData: false,
    }
  );

  useEffect(() => {
    const loadItems = async () => {
      try {
        const countData = await fetchTotalItems(searchQuery);

        const initialCount = countData.results.length;

        if (countData.has_more) {
          setTotalItems(initialCount + 10);
          setTotalPages(Math.ceil((initialCount + 10) / PAGE_SIZE));
        } else {
          setTotalItems(initialCount);
          setTotalPages(Math.ceil(initialCount / PAGE_SIZE));
        }

        const newCursors = [null];
        if (countData.has_more) {
          newCursors.push(countData.next_cursor);
        }

        setCursors(newCursors);
      } catch (error) {
        console.error("Erro ao contar itens:", error);
      }
    };

    loadItems();
  }, [searchQuery]);


  useEffect(() => {
    if (data && data.has_more && currentPage === cursors.length) {
      setCursors(prev => {
        // Evitamos duplicação de cursores
        if (!prev.includes(data.next_cursor)) {
          return [...prev, data.next_cursor];
        }
        return prev;
      });
    }
  }, [data, currentPage, cursors]);

  const handlePageChange = (page: number) => {
    if (page === currentPage) return;

    if (page <= cursors.length) {
      setCurrentPage(page);
      setCurrentCursor(cursors[page - 1]);
      return;
    }

    const loadNextPages = async () => {
      let lastCursor = cursors[cursors.length - 1];
      let currentPg = cursors.length;

      while (currentPg < page) {
        const result = await fetcher(["/api/posts", lastCursor, searchQuery] as const);
        if (!result.has_more) break;

        lastCursor = result.next_cursor;
        setCursors(prev => [...prev, lastCursor]);
        currentPg++;
      }

      setCurrentPage(page);
      setCurrentCursor(lastCursor);
    };

    loadNextPages();
  };

  if (error) return <p>Erro ao carregar os dados</p>;

  return (
    <div className="flex-grow py-10">
      {/* Header com título do blog */}
      <header className="flex flex-col md:flex-row items-start md:items-center justify-between w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10 gap-10">
        <div className="flex w-full justify-between items-center">
          <h1>
            <SparklesText text="Blog" />
          </h1>

          <div className="md:sr-only">
            <Link
              href="https://darlley.dev"
              className=" flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-primary bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-primary hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-2 py-1 overflow-hidden border-2 rounded-full group"
            >
              <span>darlley.dev</span>
              <svg
                className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  className="fill-gray-800 group-hover:fill-gray-800"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
        
        <div className="flex w-full md:w-min items-center gap-4">
          <Input
            type="search"
            placeholder="Pesquisar artigos..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }}
            classNames={{
              base: "md:max-w-md w-full md:w-max",
              input: "outline-none border-none focus:outline-none focus:border-none focus:ring-0",
              inputWrapper: "outline-none border-none focus:outline-none focus:border-none focus:ring-0",
            }}

            size="lg"
            radius="lg"
            onClear={clearSearch}
          />

          <div className="sr-only md:not-sr-only hidden md:block absolute md:relative">
            <Link
              href="https://darlley.dev"
              className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-primary bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-primary hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-2 py-1 overflow-hidden border-2 rounded-full group"
            >
              <span>darlley.dev</span>
              <svg
                className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  className="fill-gray-800 group-hover:fill-gray-800"
                ></path>
              </svg>
            </Link>
          </div>
        </div>

      </header>

      {/* Container principal com grid responsivo */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {isLoading ? (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="h-64 overflow-hidden">
              <MotionDesign />
            </div>

            {[...Array((PAGE_SIZE ?? 1) - 1)].map((_, index) => (
              <div key={index} className="h-64 bg-gray-800 animate-pulse rounded-xl" />
            ))}
          </div>
        ) : (
          <div className="space-y-8">
            {/* Conteúdo principal */}
            {data?.results?.length === 0 ? (
              <div className="text-center py-6">
                <p className="text-gray-500">Nenhum artigo foi encontrado.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data?.results?.map((post) => {
                  const { properties } = post;
                  return (
                    <Link
                      key={post.id}
                      href={`/${properties.URL.formula.string}`}
                      className="hover:opacity-95 transition-opacity"
                      passHref
                    >
                      <Card className="w-full h-full flex flex-col justify-between bg-gray-950 border border-gray-900 px-0 py-4">
                        <CardHeader className="overflow-visible h-48">
                          {properties?.Featured?.files.length > 0 ? (
                            <Swiper
                              className="rounded-xl overflow-hidden"
                              spaceBetween={50}
                              watchSlidesProgress
                              modules={[SwiperPagination, Scrollbar, Autoplay]}
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
                                    alt={image?.name}
                                    src={image?.file.url}
                                    width={600}
                                    height={400}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover object-top rounded-xl w-full h-48"
                                  />
                                </SwiperSlide>
                              ))}
                            </Swiper>
                          ) : (
                            <Image
                              alt="Capa do artigo"
                              src="/thumbnail.png"
                              width={600}
                              height={400}
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-cover object-top rounded-xl w-full h-48"
                            />
                          )}
                        </CardHeader>
                        <CardBody>
                          <h2 className="font-bold text-large text-primary">
                            {properties.Titulo.title[0]?.plain_text || "Sem título"}
                          </h2>
                          <span className="text-sm text-gray-500">
                            {properties.Summary.rich_text[0]?.text.content ||
                              "Sem descrição"}
                          </span>
                        </CardBody>
                        <CardFooter>
                          <p className="text-xs text-gray-500">
                            Publicado{" "}
                            {new Date(
                              properties["Criado em"].created_time
                            ).toLocaleDateString()}
                          </p>
                        </CardFooter>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            )}

            {/* Paginação */}
            {(totalPages > 1 && !isLoading) && (
              <div className="flex justify-center pt-8">
                <Pagination
                  classNames={{
                    base: "mb-6"
                  }}
                  total={totalPages}
                  page={currentPage}
                  onChange={handlePageChange}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}