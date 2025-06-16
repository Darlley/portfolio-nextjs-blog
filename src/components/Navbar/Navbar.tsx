import { Button, ButtonGroup } from "@heroui/button";

import { CaretDownIcon } from "@radix-ui/react-icons";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

import GithubCustomIcon from "@/icons/GithubCustomIcon";
import LinkedinCustomIcon from "@/icons/LinkedinCustomIcon";
import { File, FileText } from "lucide-react";
import { NavbarProps } from "./Navbar.types";
export default function Navbar(props: NavbarProps) {
  return (
    <>
      <nav className="z-50 w-full sticky top-6 px-6 mx-auto max-w-7xl lg:px-8">
        <div className="bg-gray-950/80 border border-gray-800 rounded-lg w-full flex items-center gap-8 justify-between px-4 py-2 backdrop-blur-sm relative">
          <div className="">
            <Link
              href="/"
              className="flex items-center flex-shrink-0 gap-2"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.96424 2.68571C10.0668 2.42931 9.94209 2.13833 9.6857 2.03577C9.4293 1.93322 9.13832 2.05792 9.03576 2.31432L5.03576 12.3143C4.9332 12.5707 5.05791 12.8617 5.3143 12.9642C5.5707 13.0668 5.86168 12.9421 5.96424 12.6857L9.96424 2.68571ZM3.85355 5.14646C4.04882 5.34172 4.04882 5.6583 3.85355 5.85356L2.20711 7.50001L3.85355 9.14646C4.04882 9.34172 4.04882 9.6583 3.85355 9.85356C3.65829 10.0488 3.34171 10.0488 3.14645 9.85356L1.14645 7.85356C0.951184 7.6583 0.951184 7.34172 1.14645 7.14646L3.14645 5.14646C3.34171 4.9512 3.65829 4.9512 3.85355 5.14646ZM11.1464 5.14646C11.3417 4.9512 11.6583 4.9512 11.8536 5.14646L13.8536 7.14646C14.0488 7.34172 14.0488 7.6583 13.8536 7.85356L11.8536 9.85356C11.6583 10.0488 11.3417 10.0488 11.1464 9.85356C10.9512 9.6583 10.9512 9.34172 11.1464 9.14646L12.7929 7.50001L11.1464 5.85356C10.9512 5.6583 10.9512 5.34172 11.1464 5.14646Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
              <h1 className="text-lg font-semibold tracking-tight">
                Darlley
              </h1>
            </Link>
          </div>

          <div className="flex flex-col items-center md:justify-between md:w-full md:flex-row">
            <NavigationMenu.Root className="NavigationMenuRoot">
              <NavigationMenu.List className="NavigationMenuList">
                <NavigationMenu.Item>
                  <NavigationMenu.Trigger className="NavigationMenuTrigger">
                    Pages{" "}
                    <CaretDownIcon className="CaretDown" aria-hidden />
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content className="NavigationMenuContent">
                    <ul className="List one">
                      <li style={{ gridRow: "span 3" }}>
                        <Link
                          href="https://www.udemy.com/certificate/UC-3c8c6d6e-4c1d-4388-ab88-228cda80ed44/"
                          target="_blank"
                        >
                          <Image
                            src="/card.png"
                            width={400}
                            height={400}
                            className="Callout"
                            alt="Meu card"
                          />
                        </Link>
                      </li>

                      <li>
                        <Link className="ListItemLink" href="/about">
                          <div className="ListItemHeading">About</div>
                          <p className="ListItemText">
                            Saiba mais sobre mim, minhas crenças e meus
                            hobbies.
                          </p>
                        </Link>
                      </li>

                      <li>
                        <Link className="ListItemLink" href="/projects">
                          <div className="ListItemHeading">Projects</div>
                          <p className="ListItemText">
                            Projetos que ja fiz ou participei.
                          </p>
                        </Link>
                      </li>

                      <li>
                        <Link className="ListItemLink" href="/products">
                          <div className="ListItemHeading">Products</div>
                          <p className="ListItemText">
                            Produtos que uso no meu dia a dia.
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Trigger className="NavigationMenuTrigger">
                    External{" "}
                    <CaretDownIcon className="CaretDown" aria-hidden />
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content className="NavigationMenuContent">
                    <ul className="List two">
                      <li>
                        <Link
                          className={classNames("ListItemLink")}
                          href="https://www.instagram.com/filosofiawpp/"
                          target="_blank"
                        >
                          <div className="ListItemHeading">
                            Philosophy & Theology
                          </div>
                          <p className="ListItemText">
                            Tenho uma página sobre filsofia onde compartilho
                            minhas leituras de livros e artigos.
                          </p>
                        </Link>
                      </li>

                      <Link
                        className="ListItemLink"
                        href="https://medium.com/@darlleybrito"
                        target="_blank"
                      >
                        <div className="ListItemHeading">Medium</div>
                        <p className="ListItemText">Meu blog no Medium</p>
                      </Link>

                      <li>
                        <Link
                          className={classNames("ListItemLink")}
                          href="https://www.notion.so/DI-LOGOS-PLAT-NICOS-48e947e0c73b4d518145a4b83ab332e3"
                          target="_blank"
                        >
                          <div className="ListItemHeading">
                            Diálogos Platônicos
                          </div>
                          <p className="ListItemText">
                            Fiz alguns resumos e estudos sobre alguns dos
                            livros de Platão.
                          </p>
                        </Link>
                      </li>

                      <li>
                        <Link
                          className={classNames("ListItemLink")}
                          href="https://www.evernote.com/shard/s513/client/snv?noteGuid=d73e3f67-0a8f-67ae-d2ba-fa74c4e9fd15&noteKey=8bf937abec1186e7380680fb59801cae&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs513%2Fsh%2Fd73e3f67-0a8f-67ae-d2ba-fa74c4e9fd15%2F8bf937abec1186e7380680fb59801cae&title=META%2BDE%2BLEITURA"
                          target="_blank"
                        >
                          <div className="ListItemHeading">
                            Leitura ordenada
                          </div>
                          <p className="ListItemText">
                            Lista de livros ordenada sobre filosofia com
                            link de afiliado.
                          </p>
                        </Link>
                      </li>

                      <li>
                        <Link
                          className={classNames("ListItemLink")}
                          href="https://anchor.fm/darlley"
                          target="_blank"
                        >
                          <div className="ListItemHeading">Podcast</div>
                          <p className="ListItemText">
                            Ja tentei criar um podcast, mas a oratória e
                            outros fatores me fizeram ver que não isto que
                            eu queria.
                          </p>
                        </Link>
                      </li>

                      <li>
                        <Link
                          className={classNames("ListItemLink")}
                          href="https://github.com/Darlley/portfolio-nextjs"
                          target="_blank"
                        >
                          <div className="ListItemHeading">
                            Código do portfólio
                          </div>
                          <p className="ListItemText">
                            Quem quiser o código deste portfólio ele pode
                            ser encontrado no meu Github.
                          </p>
                        </Link>
                      </li>

                      <li>
                        <Link
                          className={classNames("ListItemLink")}
                          href="https://youtu.be/3domkWfU3Lo"
                          target="_blank"
                        >
                          <div className="ListItemHeading">
                            🧐 Uma análise deste portfólio
                          </div>
                          <p className="ListItemText">
                            O professor (da Serliv) Daniel Tapias Morales
                            analisou este portfólio em seu canal no YouTube.
                          </p>
                        </Link>
                      </li>

                      <li>
                        <Link
                          className={classNames("ListItemLink")}
                          href="https://hub.docker.com/r/darlleybbf/portfolio"
                          target="_blank"
                        >
                          <div className="ListItemHeading">
                            💙 Docker Image
                          </div>
                          <p className="ListItemText">
                            Criei uma imagem Docker para este portfólio.
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <Link className="NavigationMenuLink" href="/blog">
                    Blog
                  </Link>
                </NavigationMenu.Item>

                <NavigationMenu.Indicator className="NavigationMenuIndicator">
                  <div className="Arrow" />
                </NavigationMenu.Indicator>
              </NavigationMenu.List>

              <div className="ViewportPosition">
                <NavigationMenu.Viewport className="NavigationMenuViewport" />
              </div>
            </NavigationMenu.Root>

            <div className="hidden gap-2 md:flex md:h-max md:w-max md:items-center md:text-white">
              <Link
                href="https://www.linkedin.com/in/darlleybrito/"
                target="_blank"
                className="flex items-center gap-2 text-base px-4 py-1 rounded-md hover:bg-gray-50/10 transition-all duration-500"
              >
                <LinkedinCustomIcon className="size-4" />
                <span>Linkedin</span>
              </Link>

              <Link
                href="https://github.com/Darlley"
                target="_blank"
                className="flex items-center gap-2 text-base px-4 py-1 rounded-md hover:bg-gray-50/10 transition-all duration-500"
              >
                <GithubCustomIcon className="size-4" />
                <span>Github</span>
              </Link>

              <Link
                href="/curriculo"
                className="flex items-center gap-2 text-base px-4 py-1 rounded-md hover:bg-gray-50/10 transition-all duration-500"
              >
                <File className="size-4 stroke-2" />
                <span>Curriculo</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <nav className="fixed flex justify-center w-full gap-2 md:hidden left-0 bottom-4 z-50">
        <ButtonGroup>
          <Button
            as={Link}
            href="https://www.linkedin.com/in/darlleybrito/"
            target="_blank"
            isIconOnly
          >
            <LinkedinCustomIcon className="size-4" />
          </Button>
          <Button as={Link} href="https://github.com/Darlley" target="_blank" isIconOnly>
            <svg
              className="size-4"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </Button>
          <Button
            as={Link}
            href="https://www.figma.com/@darlleybrito"
            target="_blank"
            isIconOnly
          >
            <svg
              className="size-5"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 16C16 13.7909 17.7909 12 20 12C22.2091 12 24 13.7909 24 16C24 18.2091 22.2091 20 20 20C17.7909 20 16 18.2091 16 16Z"
                fill="#1ABCFE"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 24C8 21.7909 9.79086 20 12 20H16V24C16 26.2091 14.2091 28 12 28C9.79086 28 8 26.2091 8 24Z"
                fill="#0ACF83"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 4V12H20C22.2091 12 24 10.2091 24 8C24 5.79086 22.2091 4 20 4H16Z"
                fill="#FF7262"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 8C8 10.2091 9.79086 12 12 12H16V4H12C9.79086 4 8 5.79086 8 8Z"
                fill="#F24E1E"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 16C8 18.2091 9.79086 20 12 20H16V12H12C9.79086 12 8 13.7909 8 16Z"
                fill="#A259FF"
              />
            </svg>
          </Button>
          <Button as={Link} href="/curriculo" target="_blank">
            <FileText size={20} strokeWidth={1.5} />
            <span>Curriculo</span>
          </Button>
        </ButtonGroup>
      </nav>
    </>
  );
}
