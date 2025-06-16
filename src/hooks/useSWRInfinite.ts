import useSWRInfinite from "swr/infinite";

const fetchBlocks = async (url: string) => {
  const res = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) throw new Error("Erro ao buscar blocos");

  return res.json();
};

const useInfiniteBlocks = (pageId: string | null) => {
  // Esta função getKey devolve a URL completa que será passada para fetchBlocks
  const getKey = (pageIndex: number, previousPageData: any) => {
    // Se não há pageId, não buscar nada
    if (!pageId) return null;

    // Se chegamos ao fim da paginação
    if (previousPageData && !previousPageData.next_cursor === null) return null;

    // Primeira página, sem cursor
    if (pageIndex === 0) return `/api/posts/${pageId}`;

    // Próximas páginas, com cursor do resultado anterior
    return `/api/posts/${pageId}?start_cursor=${previousPageData.next_cursor}`;
  };

  const { data, error, setSize, isLoading, isValidating } = useSWRInfinite(
    getKey,
    fetchBlocks, // Usando fetchBlocks diretamente
    { revalidateOnFocus: false }
  );

  const blocks = data ? data.flatMap((page) => page.results) : [];
  // Isso significa que o next_cursor na última página é null
  const isReachingEnd = data ? data[data.length - 1]?.next_cursor === null : false;

  return { blocks, isLoading, error, isReachingEnd, isValidating, loadMore: () => setSize((size) => size + 1) };
};

export default useInfiniteBlocks;
