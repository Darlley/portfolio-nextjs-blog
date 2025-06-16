import {  Modal,  ModalContent,  ModalHeader,  ModalBody,  ModalFooter} from "@heroui/modal";

import AICustomIcon from "@/icons/AICustomIcon";
import AWSCustomIcon from "@/icons/AWSCustomIcon";
import BackEndCustomIcon from "@/icons/BackEndCustomIcon";
import FigmaCustomIcon from "@/icons/FigmaCustomIcon";
import LaravelCustomIcon from "@/icons/LaravelCustomIcon";
import MongoCustomIcon from "@/icons/MongoCustomIcon";
import N8NCustomIcon from "@/icons/N8NCustomIcon";
import ReactCustomIcon from "@/icons/ReactCustomIcon";
import TailwindCustomIcon from "@/icons/TailwindCustomIcon";
import WordpressCustomIcon from "@/icons/WordpressCustomIcon";
import clsx from "clsx";

import Link from "next/link";
import { CustomModalProps } from "./CustomModal.types";
import { cardSkills } from "@/constants/home";
import { Chip } from "@heroui/chip";
export default function CustomModal({
  isOpen,
  setIsOpen,
  content,
}: CustomModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      radius="lg"
      placement="center"
      scrollBehavior="outside"
      size="lg"
      backdrop="opaque"
      classNames={{
        body: "",
      }}
    >
      <ModalContent>
        <ModalHeader>
          <div className="flex items-center gap-2 w-max">
            {content === "Frontend" && (
              <ReactCustomIcon className="size-4 md:size-8" />
            )}
            {content === "Design" && (
              <FigmaCustomIcon className="size-4 md:size-8" />
            )}
            {content === "CSS" && (
              <TailwindCustomIcon className="size-4 md:size-8" />
            )}
            {content === "WordPress" && (
              <WordpressCustomIcon className="size-4 md:size-8" />
            )}
            {content === "Database" && (
              <MongoCustomIcon className="size-4 md:size-8" />
            )}
            {content === "Laravel" && (
              <LaravelCustomIcon className="size-4 md:size-8" />
            )}
            {content === "Nestjs" && (
              <BackEndCustomIcon className="size-4 md:size-8" />
            )}
            {content === "AI" && <AICustomIcon className="size-4 md:size-8" />}
            {content === "Low-Code/No-Code" && (
              <N8NCustomIcon className="size-4 md:size-8" />
            )}
            {content === "AWS" && (
              <AWSCustomIcon className="size-4 md:size-8" />
            )}
            <h2 className="text-xl font-bold text-white">
              {cardSkills?.[content]?.title}
            </h2>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="h-full w-full">
            <p className="whitespace-pre-wrap">
              {cardSkills?.[content]?.description}
            </p>
            {cardSkills?.[content]?.list && cardSkills?.[content]?.list?.length > 0 && (
              <ul
                role="list"
                className="mt-2 w-full overflow-hidden flex flex-col gap-2"
              >
                {cardSkills?.[content]?.list.map((item, key) => {
                  return (
                    <li key={item.title + key} className="w-full max-w-full">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center w-full py-3 px-2 rounded-lg hover:bg-white/5 transition-colors">
                        <div className="flex flex-col w-full">
                          <div className="flex items-center gap-x-3 mb-1 sm:mb-0">
                            <div
                              className={clsx(
                                "rounded-full p-1",
                                item.certifiedUrl
                                  ? "flex-none text-green-400 bg-green-400/10 animate-pulse"
                                  : "text-rose-400 bg-rose-400/10"
                              )}
                            >
                              <div className="w-2 h-2 bg-current rounded-full" />
                            </div>
                            <h2 className="min-w-0 text-sm font-semibold leading-6 text-white flex flex-wrap gap-x-2">
                              <span className="truncate">Certificado</span>
                              {item?.school && (
                                <div className="flex items-center">
                                  <span className="text-gray-400 mx-1">/</span>
                                  <span className="whitespace-nowrap">
                                    {item.school}
                                  </span>
                                </div>
                              )}
                            </h2>
                            {item?.certifiedUrl && (
                              <Link href={item.certifiedUrl} target="_blank">
                                <Chip variant="bordered" size="sm">
                                  Ver
                                </Chip>
                              </Link>
                            )}
                          </div>
                          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-x-2.5 text-xs leading-5 text-gray-400 max-w-full mt-1 sm:mt-0">
                            <span className="flex-1 line-clamp-2 sm:line-clamp-1">
                              {item.title}
                            </span>
                            {(item.certifiedUrl || item.projectUrl) && (
                              <span className="hidden sm:inline">•</span>
                            )}
                            {item.projectUrl && (
                              <Link
                                href={item.projectUrl}
                                target="_blank"
                                className="text-primary truncate hover:underline"
                              >
                                Link para o Projeto
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {!!cardSkills?.[content]?.externalUrl && (
            <div className="flex h-max- w-max">
              <Link
                href={cardSkills?.[content]?.externalUrl}
                className="z-10 inline-block mt-4 text-sm font-bold text-white transition-colors cursor-pointer hover:text-secundary-500"
                target="_blank"
              >
                Saber mais
              </Link>
            </div>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
