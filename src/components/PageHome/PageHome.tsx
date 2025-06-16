"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Link from "next/link";

export type TypeContent =
  | "me"
  | "Design"
  | "CSS"
  | "AWS"
  | "Low-Code/No-Code"
  | "AI"
  | "Nestjs"
  | "Frontend"
  | "Laravel"
  | "Database"
  | "WordPress";

import { planetSkills } from "@/constants/home";
import { Badge } from "@heroui/badge";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Tooltip } from "@heroui/tooltip";
import CustomModal from "../CustomModal";
import Navbar from "../Navbar";
import ShinyText from "../ShinyText";
import { PageHomeProps } from "./PageHome.types";
import { Tab, Tabs } from "@heroui/tabs";
import { DatabaseZap, Figma, MonitorSmartphone } from "lucide-react";

export default function PageHome(props: PageHomeProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [content, setContent] = useState<TypeContent>("me");

  function onOpenModal(type: TypeContent) {
    setIsOpen(true);
    setContent(type);
  }

  return (
    <div className="h-svh w-full overflow-y-auto snap-y snap-mandatory bg-gray-950">
      <Navbar />

      <main className="relative w-full h-full">
        <section className="relative flex z-20 flex-col items-center justify-center px-4 md:px-0 h-svh w-full snap-center snap-always pt-16">
          <div className="relative p-4 sm:p-8">
            <div className="relative w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] flex items-center justify-center">
              <Tooltip content="Sobre mim" color="primary">
                <button
                  className="absolute size-[140px] sm:size-[200px] p-1 border-4 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-10"
                  onClick={() => onOpenModal("me")}
                >
                  <div className="w-full h-full rounded-full hover:border-gray-400 border-2 bg-[url('/profile.jpg')] bg-cover transition-all duration-500" />
                </button>
              </Tooltip>

              <div className="absolute w-full h-full animate-rotate-reverse">
                {planetSkills.map((item, index) => (
                  <Tooltip content={item.name} key={index}>
                    <button
                      style={{
                        top: item.top,
                        left: item.left,
                        transform: "translate(-50%, -50%)",
                        animation: `orbit 20s linear infinite ${item.delay}`,
                      }}
                      className="inline-flex absolute"
                      onClick={() => onOpenModal(item.name as TypeContent)}
                    >
                      <div className="bg-gray-900 border border-gray-700 rounded-full p-0.5 hover:scale-105 flex items-center jsutify-center">
                        <item.icon className="size-7 md:size-8 animate-rotate" />
                      </div>
                    </button>
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center text-white mt-4">
            <p className="text-sm sm:text-base">
              Hi! I'm{" "}
              <span className="font-bold text-primary inline-block">
                Darlley
              </span>
              👋
            </p>

            <Badge color="warning" content="Júnior" placement="top-right" classNames={{
              base: "flex flex-col",
              badge: "text-[9px] rounded-md"
            }}>
              <h1 className="font-bold mt-2 text-xl sm:text-2xl">
                <ShinyText text="Full Stack Web Developer" />
                <br />
                <ShinyText text="& UI Design" />
              </h1>
            </Badge>
          </div>
        </section>

        <section
          className="relative flex z-20 flex-col items-center justify-center min-h-svh px-4 xl:px-0 w-full snap-start snap-always"
          id="projects"
        >
          <div className="text-center my-10">
            <span className="text-4xl animate-pulse">✨</span>
            <h2 className="text-4xl font-bold">Favoritos</h2>
            <Link
              href="/projects"
              className="text-primary font-light hover:underline"
            >
              Veja todos
            </Link>
          </div>
          <div className="flex w-full flex-col items-center max-w-6xl mx-auto">
            <Tabs aria-label="Options" color="primary" variant="bordered" size="sm" defaultSelectedKey="fullstack">
              <Tab
                key="frontend"
                title={
                  <div className="flex items-center space-x-2">
                    <Figma size={20} strokeWidth={1.5} />
                    <span>Frontend</span>
                  </div>
                }
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Link href="https://darlley.dev/blog" target="_blank">
                    <Card className="h-full transition-transform hover:scale-[1.02]">
                      <CardHeader className="pb-0 pt-4 px-4 flex-col items-start">
                        <p className="text-tiny uppercase font-bold">Blog Pessoal</p>
                        <small className="text-default-500">
                          Nextjs, HeroUI e Notion API (CMS)
                        </small>
                      </CardHeader>
                      <CardBody>
                        <div className="w-full aspect-video overflow-hidden rounded-xl">
                          <Swiper
                            modules={[Pagination]}
                            pagination={{
                              clickable: true,
                            }}
                            className="h-full w-full"
                          >
                            <SwiperSlide>
                              <Image
                                alt="Preview do Blog 1"
                                src="/home/projects/blog-1.png"
                                width={800}
                                height={800}
                                className="object-cover w-full h-full"
                              />
                            </SwiperSlide>
                            <SwiperSlide>
                              <Image
                                alt="Preview do Blog 2"
                                src="/home/projects/blog-2.png"
                                width={800}
                                height={800}
                                className="object-cover w-full h-full"
                              />
                            </SwiperSlide>
                            <SwiperSlide>
                              <Image
                                alt="Preview do Blog 3"
                                src="/home/projects/blog-3.webp"
                                width={800}
                                height={800}
                                className="object-cover w-full h-full"
                              />
                            </SwiperSlide>
                          </Swiper>
                        </div>
                      </CardBody>
                    </Card>
                  </Link>

                  <Link href="https://github.com/Darlley/editor" target="_blank">
                    <Card className="h-full transition-transform hover:scale-[1.02]">
                      <CardHeader className="pb-0 pt-4 px-4 flex-col items-start">
                        <p className="text-tiny uppercase font-bold">Editor</p>
                        <small className="text-default-500">
                          Nextjs, HeroUI e Novel Editor
                        </small>
                      </CardHeader>
                      <CardBody>
                        <div className="w-full aspect-video overflow-hidden rounded-xl">
                          <Swiper
                            modules={[Pagination]}
                            pagination={{
                              clickable: true,
                            }}
                            className="h-full w-full"
                          >
                            <SwiperSlide>
                              <Image
                                alt="Preview do Editor 1"
                                src="/home/projects/editor-1.png"
                                width={800}
                                height={800}
                                className="object-cover w-full h-full"
                              />
                            </SwiperSlide>
                          </Swiper>
                        </div>
                      </CardBody>
                    </Card>
                  </Link>

                  <Link href="https://sorteio-woad.vercel.app/" target="_blank">
                    <Card className="h-full transition-transform hover:scale-[1.02]">
                      <CardHeader className="pb-0 pt-4 px-4 flex-col items-start">
                        <p className="text-tiny uppercase font-bold">Landing Page</p>
                        <small className="text-default-500">
                          Nextjs, Bootstrap e SCSS
                        </small>
                      </CardHeader>
                      <CardBody>
                        <div className="w-full aspect-video overflow-hidden rounded-xl">
                          <Swiper
                            modules={[Pagination]}
                            pagination={{
                              clickable: true,
                            }}
                            className="h-full w-full"
                          >
                            <SwiperSlide>
                              <Image
                                alt="Preview do Editor 1"
                                src="/home/projects/sorteio-1.png"
                                width={800}
                                height={800}
                                className="object-cover w-full h-full"
                              />
                            </SwiperSlide>
                          </Swiper>
                        </div>
                      </CardBody>
                    </Card>
                  </Link>
                </div>
              </Tab>
              <Tab
                key="backend"
                title={
                  <div className="flex items-center space-x-2">
                    <DatabaseZap size={20} strokeWidth={1.5} />
                    <span>Backend</span>
                  </div>
                }
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Link href="https://github.com/Darlley/hono-whatsapp-api" target="_blank">
                    <Card className="h-full transition-transform hover:scale-[1.02]">
                      <CardHeader className="pb-0 pt-4 px-4 flex-col items-start">
                        <p className="text-tiny uppercase font-bold">API WhatsApp + Google Sheets</p>
                        <small className="text-default-500">
                          HonoJS, Zod, whatsapp-web.js + Swagger
                        </small>
                      </CardHeader>
                      <CardBody>
                        <div className="w-full aspect-video overflow-hidden rounded-xl">
                          <Swiper
                            modules={[Pagination]}
                            pagination={{
                              clickable: true,
                            }}
                            className="h-full w-full"
                          >
                            <SwiperSlide>
                              <Image
                                alt="Preview da API 1"
                                src="/home/projects/whastappapi-1.png"
                                width={800}
                                height={800}
                                className="object-cover w-full h-full"
                              />
                            </SwiperSlide>
                            <SwiperSlide>
                              <Image
                                alt="Preview da API 2"
                                src="/home/projects/whastappapi-2.png"
                                width={800}
                                height={800}
                                className="object-cover w-full h-full"
                              />
                            </SwiperSlide>
                            <SwiperSlide>
                              <Image
                                alt="Preview da API 3"
                                src="/home/projects/whastappapi-3.png"
                                width={800}
                                height={800}
                                className="object-cover w-full h-full"
                              />
                            </SwiperSlide>
                          </Swiper>
                        </div>
                      </CardBody>
                    </Card>
                  </Link>

                  <Link href="https://node-do-zero-0pkm.onrender.com/" target="_blank">
                    <Card className="h-full transition-transform hover:scale-[1.02]">
                      <CardHeader className="pb-0 pt-4 px-4 flex-col items-start">
                        <p className="text-tiny uppercase font-bold">TO/DO de videos (Rocketseat)</p>
                        <small className="text-default-500">
                          Fastify, neon.tech + render.com
                        </small>
                      </CardHeader>
                      <CardBody>
                        <div className="w-full aspect-video overflow-hidden rounded-xl">
                          <Swiper
                            modules={[Pagination]}
                            pagination={{
                              clickable: true,
                            }}
                            className="h-full w-full"
                          >
                            <SwiperSlide>
                              <Image
                                alt="Preview da API de vídeos 1"
                                src="/home/projects/video-api-1.png"
                                width={800}
                                height={800}
                                className="object-cover w-full h-full"
                              />
                            </SwiperSlide>
                            <SwiperSlide>
                              <Image
                                alt="Preview da API de vídeos 2"
                                src="/home/projects/video-api-2.jpeg"
                                width={800}
                                height={800}
                                className="object-cover w-full h-full"
                              />
                            </SwiperSlide>
                          </Swiper>
                        </div>
                      </CardBody>
                    </Card>
                  </Link>

                  <Link href="https://nlw-connect-nodejs.onrender.com/" target="_blank">
                    <Card className="h-full transition-transform hover:scale-[1.02]">
                      <CardHeader className="pb-0 pt-4 px-4 flex-col items-start">
                        <p className="text-tiny uppercase font-bold">API de Indicações (NLW)</p>
                        <small className="text-default-500">
                          Fastify, PostgreSQL, Redis, Swagger + Render
                        </small>
                      </CardHeader>
                      <CardBody>
                        <div className="w-full aspect-video overflow-hidden rounded-xl">
                          <Swiper
                            modules={[Pagination]}
                            pagination={{
                              clickable: true,
                            }}
                            className="h-full w-full"
                          >
                            <SwiperSlide>
                              <Image
                                alt="Preview da API de vídeos 1"
                                src="/home/projects/ranking-1.png"
                                width={800}
                                height={800}
                                className="object-cover w-full h-full"
                              />
                            </SwiperSlide>
                            <SwiperSlide>
                              <Image
                                alt="Preview da API de vídeos 2"
                                src="/home/projects/video-api-2.jpeg"
                                width={800}
                                height={800}
                                className="object-cover w-full h-full"
                              />
                            </SwiperSlide>
                          </Swiper>
                        </div>
                      </CardBody>
                    </Card>
                  </Link>
                </div>
              </Tab>
              <Tab
                key="fullstack"
                title={
                  <div className="flex items-center space-x-2">
                    <MonitorSmartphone size={20} strokeWidth={1.5} />
                    <span>Fullstack</span>
                  </div>
                }

              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Link
                    href="https://github.com/Darlley/saas-admin"
                    target="_blank"
                  >
                    <Card className="h-full transition-transform hover:scale-[1.02]">
                      <CardHeader className="pb-0 pt-4 px-4 flex-col items-start">
                        <p className="text-tiny uppercase font-bold">Template</p>
                        <small className="text-default-500">
                          Next.js, Shadcn/ui, Stripe, Authjs, Prisma/PostgreSQL
                        </small>
                      </CardHeader>
                      <CardBody>
                        <div className="w-full aspect-video overflow-hidden rounded-xl">
                          <Swiper
                            modules={[Pagination]}
                            pagination={{
                              clickable: true,
                            }}
                            className="h-full w-full"
                          >
                            <SwiperSlide>
                              <Image
                                alt="Preview do Editor 1"
                                src="/home/projects/saas-admin1.png"
                                width={800}
                                height={800}
                                className="object-cover w-full h-full"
                              />
                            </SwiperSlide>
                            <SwiperSlide>
                              <Image
                                alt="Preview do Editor 2"
                                src="/home/projects/saas-admin2.png"
                                width={800}
                                height={800}
                                className="object-cover w-full h-full"
                              />
                            </SwiperSlide>
                          </Swiper>
                        </div>
                      </CardBody>
                    </Card>
                  </Link>

                  <Link
                    href="https://github.com/Darlley/knowledge-builder"
                    target="_blank"
                  >
                    <Card className="h-full transition-transform hover:scale-[1.02]">
                      <CardHeader className="pb-0 pt-4 px-4 flex-col items-start">
                        <p className="text-tiny uppercase font-bold">Base de Conhecimentos</p>
                        <small className="text-default-500">
                          Laravel, Livewire, TailwindCSS, Laravel Forge
                        </small>
                      </CardHeader>
                      <CardBody>
                        <div className="w-full aspect-video overflow-hidden rounded-xl">
                          <Swiper
                            modules={[Pagination]}
                            pagination={{
                              clickable: true,
                            }}
                            className="h-full w-full"
                          >
                            <SwiperSlide>
                              <Image
                                alt="Preview do Editor 1"
                                src="/home/projects/leadszapp-knowledge-1.png"
                                width={800}
                                height={800}
                                className="object-cover w-full h-full"
                              />
                            </SwiperSlide>
                            <SwiperSlide>
                              <Image
                                alt="Preview do Editor 2"
                                src="/home/projects/leadszapp-knowledge-2.png"
                                width={800}
                                height={800}
                                className="object-cover w-full h-full"
                              />
                            </SwiperSlide>
                          </Swiper>
                        </div>
                      </CardBody>
                    </Card>
                  </Link>

                  <Link href="https://letmeask-c49ed.web.app/" target="_blank">
                    <Card className="h-full transition-transform hover:scale-[1.02]">
                      <CardHeader className="pb-0 pt-4 px-4 flex-col items-start">
                        <p className="text-tiny uppercase font-bold">Salas Q&A</p>
                        <small className="text-default-500">
                          Vitejs, Firebase, SASS
                        </small>
                      </CardHeader>
                      <CardBody>
                        <div className="w-full aspect-video overflow-hidden rounded-xl">
                          <Swiper
                            modules={[Pagination]}
                            pagination={{
                              clickable: true,
                            }}
                            className="h-full w-full"
                          >
                            <SwiperSlide>
                              <Image
                                alt="Preview do Editor 1"
                                src="/home/projects/letmeask-1.png"
                                width={800}
                                height={800}
                                className="object-cover w-full h-full"
                              />
                            </SwiperSlide>
                            <SwiperSlide>
                              <Image
                                alt="Preview do Editor 2"
                                src="/home/projects/letmeask-2.png"
                                width={800}
                                height={800}
                                className="object-cover w-full h-full"
                              />
                            </SwiperSlide>
                          </Swiper>
                        </div>
                      </CardBody>
                    </Card>
                  </Link>
                </div>
              </Tab>
            </Tabs>
          </div>
        </section>

        <Beams />
        <GradientGrid />
      </main>

      <CustomModal isOpen={isOpen} content={content} setIsOpen={setIsOpen} />
    </div>
  );
}

const Beams: React.FC = () => {
  const { width } = useWindowSize();

  const numColumns = width ? Math.floor(width / GRID_BOX_SIZE) : 0;

  const placements = [
    {
      top: GRID_BOX_SIZE * 0,
      left: Math.floor(numColumns * 0.05) * GRID_BOX_SIZE,
      transition: {
        duration: 3.5,
        repeatDelay: 5,
        delay: 2,
      },
    },
    {
      top: GRID_BOX_SIZE * 12,
      left: Math.floor(numColumns * 0.15) * GRID_BOX_SIZE,
      transition: {
        duration: 3.5,
        repeatDelay: 10,
        delay: 4,
      },
    },
    {
      top: GRID_BOX_SIZE * 3,
      left: Math.floor(numColumns * 0.25) * GRID_BOX_SIZE,
    },
    {
      top: GRID_BOX_SIZE * 9,
      left: Math.floor(numColumns * 0.75) * GRID_BOX_SIZE,
      transition: {
        duration: 2,
        repeatDelay: 7.5,
        delay: 3.5,
      },
    },
    {
      top: 0,
      left: Math.floor(numColumns * 0.7) * GRID_BOX_SIZE,
      transition: {
        duration: 3,
        repeatDelay: 2,
        delay: 1,
      },
    },
    {
      top: GRID_BOX_SIZE * 2,
      left: Math.floor(numColumns * 1) * GRID_BOX_SIZE - GRID_BOX_SIZE,
      transition: {
        duration: 5,
        repeatDelay: 5,
        delay: 5,
      },
    },
  ];

  return (
    <>
      {placements.map((p, i) => (
        <Beam
          key={i}
          top={p.top}
          left={p.left - BEAM_WIDTH_OFFSET}
          transition={p.transition || {}}
        />
      ))}
    </>
  );
};

interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}

const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

interface BeamProps {
  top: number;
  left: number;
  transition?: {
    duration?: number;
    repeatDelay?: number;
    delay?: number;
  };
}

const Beam: React.FC<BeamProps> = ({ top, left, transition = {} }) => {
  return (
    <motion.div
      initial={{
        y: 0,
        opacity: 0,
      }}
      animate={{
        opacity: [0, 1, 0],
        y: 32 * 8,
      }}
      transition={{
        ease: "easeInOut",
        duration: 3,
        repeat: Infinity,
        repeatDelay: 1.5,
        ...transition,
      }}
      style={{
        top,
        left,
      }}
      className="absolute z-10 h-[64px] w-[1px] bg-gradient-to-b from-blue-500/0 to-blue-500"
    />
  );
};

const GradientGrid: React.FC = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2.5,
        ease: "easeInOut",
      }}
      className="absolute inset-0 z-0"
    >
      <div
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='rgb(30 58 138 / 0.5)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        }}
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </motion.div>
  );
};

const GRID_BOX_SIZE = 32;
const BEAM_WIDTH_OFFSET = 1;
