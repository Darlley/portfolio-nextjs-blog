"use client";

import { Check } from "lucide-react";
import Link from "next/link";

import { PageAboutProps } from "./PageAbout.types";
import { stats, timelineItems } from "@/constants/about";
import { Image } from "@heroui/image";
export default function PageAbout(props: PageAboutProps) {
  return (
    <main className="py-24 bg-white dark:bg-gray-950 sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid items-start max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="relative px-6 pt-64 overflow-hidden shadow-2xl rounded-3xl bg-secundary-900 pb-9 sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <div className="absolute object-cover size-full -inset-0 z-0">
                <Image
                  src="/profile.jpg"
                  alt="Minha foto"
                  className="brightness-50"
                />
              </div>
              <div className="absolute inset-0 bg-secundary-900 mix-blend-multiply" />
              <div
                className="absolute -ml-16 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 transform-gpu blur-3xl"
                aria-hidden="true"
              />
              <figure className="relative isolate">
                <svg
                  viewBox="0 0 162 128"
                  fill="none"
                  aria-hidden="true"
                  className="absolute h-20 -left-2 -top-4 -z-10 stroke-white/50"
                >
                  <path
                    id="0ef284b8-28c2-426e-9442-8655d393522e"
                    d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                  />
                  <use href="#0ef284b8-28c2-426e-9442-8655d393522e" x={86} />
                </svg>
                <figcaption className="mt-6 text-xl leading-6 text-gray-300">
                  <strong className="font-semibold text-white">
                    Darlley Brito,
                  </strong>{" "}
                  Junior Full-Stack Web Developer
                </figcaption>
              </figure>
            </div>
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 dark:text-gray-300 lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-primary">
                "A estrada até aqui"
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Breve resumo
              </h1>
              <div className="max-w-xl mt-6">
                <p>
                  Em 2013 andava de skate e queria trabalhar com isso, fiquei
                  interessado em ter uma loja virtual e isto acabou me
                  influenciando a me interessar por tecnologia, queria fazer uma
                  faculdade de design gráfico ou web design.
                </p>
                <br />
                <br />
                <p>
                  Durante meu Serviço Militar Obrigatório (2017) meu interesse
                  por tecnologia voltou e ao conseguir uma bolsa no Prouni pelo
                  Enem optei pelo curso Tecnologia em Análise e Desenvolvimento
                  de Sistemas na Universidade Católica Dom Bosco (UCDB), iniciei
                  o curso em março de 2018.
                </p>
                <br />
                <br />
                <p>
                  Interessado em Back-end, Front-end, UI Design e Inteligência
                  Artificial Generativa. Tenho mais de 3 anos de experiência em
                  Desenvolvimento Web atuando em duas empresas no ramo de
                  Marketing Digital.
                </p>
                <br />
                <br />
                <p>
                  Além do computador, alguns dos meus hobbies incluem: skate,
                  musculação, estética automotiva, filosofia e cerveja
                  artesanal.
                </p>
              </div>
            </div>
            <dl className="grid grid-cols-2 gap-8 pt-6 mt-6 border-t border-gray-900/10 dark:border-gray-100/10 sm:grid-cols-4">
              {stats?.map((stat, statIdx) => (
                <div key={statIdx}>
                  <dt className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900 dark:text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="flex mt-10">
              <ul role="list" className="py-6 space-y-6">
                {timelineItems.map((item, key) => (
                  <li className="relative flex gap-x-4" key={key}>
                    {item.type === "start" && (
                      <>
                        <div className="absolute top-0 left-0 flex justify-center w-6 -bottom-6">
                          <div className="w-px bg-gray-200 dark:bg-gray-700"></div>
                        </div>
                        <div className="relative flex items-center justify-center flex-none w-6 h-6 bg-white dark:bg-gray-950">
                          <div className="size-6 bg-primary/20 flex items-center justify-center border border-primary rounded-full">
                            <Check className="size-4 stroke-primary" />
                          </div>
                        </div>
                        <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500 dark:text-gray-400">
                          <span className="font-medium text-gray-900 dark:text-white">
                            {item?.title}
                          </span>{" "}
                          {item?.description}
                        </p>
                        <time
                          dateTime="2023-01-24T09:20"
                          className="flex-none py-0.5 text-xs leading-5 text-gray-500 dark:text-gray-400"
                        >
                          {item?.date}
                        </time>
                      </>
                    )}

                    {item.type === "highlight" && (
                      <>
                        <div className="absolute top-0 left-0 flex justify-center w-6 -bottom-6">
                          <div className="w-px bg-gray-200 dark:bg-gray-700"></div>
                        </div>
                        <div className="relative flex-none w-6 h-6 mt-3 rounded-full bg-white">
                          <Image
                            src={item?.image}
                            alt="Minha foto"
                            className="rounded-full bg-white"
                          />
                        </div>
                        <div className="flex-auto p-3 rounded-md border border-gray-200 dark:border-transparent dark:bg-gray-900">
                          <div className="flex justify-between gap-x-4">
                            <div className="py-0.5 leading-5">
                              <span className="font-medium text-gray-900 dark:text-white text-sm">
                                {item?.title}
                              </span>
                            </div>
                            <time
                              dateTime="2023-01-23T15:56"
                              className="flex-none py-0.5 text-xs leading-5 text-gray-500 dark:text-gray-400"
                            >
                              {item?.date}
                            </time>
                          </div>
                          <p className="text-sm leading-6 text-gray-500 dark:text-white">
                            {item?.description}
                          </p>
                        </div>
                      </>
                    )}

                    {item.type === "default" && (
                      <>
                        <div className="absolute top-0 left-0 flex justify-center w-6 -bottom-6">
                          <div className="w-px bg-gray-200 dark:bg-gray-700"></div>
                        </div>
                        <div className="relative flex items-center justify-center flex-none w-6 h-6 bg-white dark:bg-gray-950">
                          <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                        </div>
                        <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500 dark:text-gray-400">
                          <span className="font-medium text-gray-900 dark:text-white">
                            {item?.link ? (
                              <Link
                                href={item?.link}
                                target="_blank"
                                className="hover:text-primary hover:bg-primary/10 transition-colors"
                              >
                                {item?.title}
                              </Link>
                            ) : (
                              item?.title
                            )}
                          </span>{" "}
                          {item?.description}
                        </p>
                        <time
                          dateTime="2023-01-24T09:12"
                          className="flex-none py-0.5 text-xs leading-5 text-gray-500 dark:text-gray-400"
                        >
                          {item?.date}
                        </time>
                      </>
                    )}
                  </li>
                ))}

                <li className="relative flex gap-x-4">
                  <div className="absolute top-0 left-0 flex justify-center w-6 bottom-0">
                    <div className="w-px bg-gray-200 dark:bg-gray-700"></div>
                  </div>
                  <div className="relative flex items-center justify-center flex-none size-6 bg-white dark:bg-gray-950">
                    <div className="size-3 bg-primary/20 flex items-center justify-center border border-primary rounded-full animate-pulse" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
