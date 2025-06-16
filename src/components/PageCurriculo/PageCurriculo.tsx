"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ApiData, PageCurriculoProps } from "./PageCurriculo.types";
import MotionDesign from "../ui/motion-design";
import { Chip } from "@heroui/chip";

export default function PageCurriculo(props: PageCurriculoProps) {
  const [api, setApi] = useState<ApiData>({
    firstName: "",
    lastName: "",
    title: "",
    profileImage: "",
    education: [],
    skills: [],
    experience: [],
    languages: [],
    contact: {},
    social: {},
    profileText: "",
    download: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      fetch("/api")
        .then(async (response) => {
          const result = await response.text();
          const data: ApiData = JSON.parse(result);
          setApi(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <main className="h-svh w-full flex items-center justify-center bg-gray-950">
        <div>
          <MotionDesign />
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white dark:bg-gray-950">
      <div className="curriculo__curriculo ">
        <header className="curriculo__header">
          <div className="curriculo__header__content">
            <div className="curriculo__header__content--profile">
              <img src={api.profileImage || ""} alt="Minha imagem" />
            </div>

            <div className="curriculo__header__content--headline">
              <h1>
                <strong>{api.firstName}</strong> {api.lastName}
              </h1>
              <h2>{api.title}</h2>
            </div>
          </div>
        </header>

        <main className="curriculo__app__main">
          <div className="curriculo__app__item">
            <h3 className="curriculo__app__title">Profile</h3>
            <p className="curriculo__app__description">{api.profileText}</p>
          </div>

          <div className="curriculo__row">
            <div className="curriculo__col-5">
              <div className="curriculo__app__item">
                <h3 className="curriculo__app__title">Education</h3>
                <div className="curriculo__app__timeline">
                  <div className="curriculo__timeline__item">
                    {api.education.map((current, key) => (
                      <div className="curriculo__content" key={key}>
                        <span className="curriculo__app__date--timeline">
                          {current?.period as string}
                        </span>
                        <h2 className="curriculo__app__title--timeline">
                          {current.institution}
                        </h2>
                        <p className="curriculo__app__description--timeline">
                          {current.details.split(" ").map((frase, index) => {
                            if (index >= 3 && index <= 9) {
                              return <strong key={index}>{frase + " "}</strong>;
                            }

                            return frase + " ";
                          })}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="curriculo__app__item">
                <h3 className="curriculo__app__title">Skills</h3>
                <div className="curriculo__app__container">
                  {api.skills.map((skill, key) => (
                    <Chip color="primary" key={key}>
                      {skill}
                    </Chip>
                  ))}
                </div>
              </div>
            </div>

            <div className="curriculo__col-7">
              <div className="curriculo__app__item">
                <h3 className="curriculo__app__title">Experience</h3>
                <div className="curriculo__app__timeline">
                  <div className="curriculo__timeline__item">
                    {api.experience.map((current, key) => (
                      <div className="curriculo__content" key={key}>
                        <span className="curriculo__app__date--timeline">
                          {current.period}
                        </span>
                        <h2 className="curriculo__app__title--timeline">
                          {current.company}
                        </h2>
                        <p className="curriculo__app__description--timeline">
                          {current.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-20 md:mt-4 curriculo__app__item">
                <h3 className="curriculo__app__title">Languages</h3>
                <div className="curriculo__app__container">
                  {api.languages.map((language, key) => (
                    <Chip color="primary" key={key}>
                      {language}
                    </Chip>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="curriculo__footer">
          <div className="curriculo__footer__container">
            <p>
              Desenvolvido por{" "}
              <Link
                href="https://darlley.dev/"
                className="transition-colors curriculo__underline hover:text-zinc-800"
              >
                Darlley Brito
              </Link>{" "}
              sob licença MIT © 2023.
            </p>

            <div className="flex gap-4">
              <Link href="/curriculo.pdf" target="_blank">
                <svg
                  className="h-8 curriculo__w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fill="#909090"
                      d="m24.1 2.072 5.564 5.8v22.056H8.879V30h20.856V7.945z"
                    ></path>
                    <path
                      fill="#f4f4f4"
                      d="M24.031 2H8.808v27.928h20.856V7.873z"
                    ></path>
                    <path
                      fill="#7a7b7c"
                      d="M8.655 3.5h-6.39v6.827h20.1V3.5z"
                    ></path>
                    <path
                      fill="#dd2025"
                      d="M22.472 10.211H2.395V3.379h20.077z"
                    ></path>
                    <path
                      fill="#464648"
                      d="M9.052 4.534H7.745v4.8h1.028V7.715L9 7.728a2 2 0 0 0 .647-.117 1.4 1.4 0 0 0 .493-.291 1.2 1.2 0 0 0 .335-.454 2.1 2.1 0 0 0 .105-.908 2.2 2.2 0 0 0-.114-.644 1.17 1.17 0 0 0-.687-.65 2 2 0 0 0-.409-.104 2 2 0 0 0-.319-.026m-.189 2.294h-.089v-1.48h.193a.57.57 0 0 1 .459.181.92.92 0 0 1 .183.558c0 .246 0 .469-.222.626a.94.94 0 0 1-.524.114M12.533 4.521c-.111 0-.219.008-.295.011L12 4.538h-.78v4.8h.918a2.7 2.7 0 0 0 1.028-.175 1.7 1.7 0 0 0 .68-.491 1.9 1.9 0 0 0 .373-.749 3.7 3.7 0 0 0 .114-.949 4.4 4.4 0 0 0-.087-1.127 1.8 1.8 0 0 0-.4-.733 1.6 1.6 0 0 0-.535-.4 2.4 2.4 0 0 0-.549-.178 1.3 1.3 0 0 0-.228-.017m-.182 3.937h-.1V5.392h.013a1.06 1.06 0 0 1 .6.107 1.2 1.2 0 0 1 .324.4 1.3 1.3 0 0 1 .142.526c.009.22 0 .4 0 .549a3 3 0 0 1-.033.513 1.8 1.8 0 0 1-.169.5 1.1 1.1 0 0 1-.363.36.67.67 0 0 1-.416.106M17.43 4.538H15v4.8h1.028V7.434h1.3v-.892h-1.3V5.43h1.4v-.892"
                    ></path>
                    <path
                      fill="#dd2025"
                      d="M21.781 20.255s3.188-.578 3.188.511-1.975.646-3.188-.511m-2.357.083a7.5 7.5 0 0 0-1.473.489l.4-.9c.4-.9.815-2.127.815-2.127a14.2 14.2 0 0 0 1.658 2.252 13 13 0 0 0-1.4.288Zm-1.262-6.5c0-.949.307-1.208.546-1.208s.508.115.517.939a10.8 10.8 0 0 1-.517 2.434 4.4 4.4 0 0 1-.547-2.162Zm-4.649 10.516c-.978-.585 2.051-2.386 2.6-2.444-.003.001-1.576 3.056-2.6 2.444M25.9 20.895c-.01-.1-.1-1.207-2.07-1.16a14 14 0 0 0-2.453.173 12.5 12.5 0 0 1-2.012-2.655 11.8 11.8 0 0 0 .623-3.1c-.029-1.2-.316-1.888-1.236-1.878s-1.054.815-.933 2.013a9.3 9.3 0 0 0 .665 2.338s-.425 1.323-.987 2.639-.946 2.006-.946 2.006a9.6 9.6 0 0 0-2.725 1.4c-.824.767-1.159 1.356-.725 1.945.374.508 1.683.623 2.853-.91a23 23 0 0 0 1.7-2.492s1.784-.489 2.339-.623 1.226-.24 1.226-.24 1.629 1.639 3.2 1.581 1.495-.939 1.485-1.035"
                    ></path>
                    <path fill="#909090" d="M23.954 2.077V7.95h5.633z"></path>
                    <path fill="#f4f4f4" d="M24.031 2v5.873h5.633z"></path>
                    <path
                      fill="#fff"
                      d="M8.975 4.457H7.668v4.8H8.7V7.639l.228.013a2 2 0 0 0 .647-.117 1.4 1.4 0 0 0 .493-.291 1.2 1.2 0 0 0 .332-.454 2.1 2.1 0 0 0 .105-.908 2.2 2.2 0 0 0-.114-.644 1.17 1.17 0 0 0-.687-.65 2 2 0 0 0-.411-.105 2 2 0 0 0-.319-.026m-.189 2.294h-.089v-1.48h.194a.57.57 0 0 1 .459.181.92.92 0 0 1 .183.558c0 .246 0 .469-.222.626a.94.94 0 0 1-.524.114M12.456 4.444c-.111 0-.219.008-.295.011l-.235.006h-.78v4.8h.918a2.7 2.7 0 0 0 1.028-.175 1.7 1.7 0 0 0 .68-.491 1.9 1.9 0 0 0 .373-.749 3.7 3.7 0 0 0 .114-.949 4.4 4.4 0 0 0-.087-1.127 1.8 1.8 0 0 0-.4-.733 1.6 1.6 0 0 0-.535-.4 2.4 2.4 0 0 0-.549-.178 1.3 1.3 0 0 0-.228-.017m-.182 3.937h-.1V5.315h.013a1.06 1.06 0 0 1 .6.107 1.2 1.2 0 0 1 .324.4 1.3 1.3 0 0 1 .142.526c.009.22 0 .4 0 .549a3 3 0 0 1-.033.513 1.8 1.8 0 0 1-.169.5 1.1 1.1 0 0 1-.363.36.67.67 0 0 1-.416.106M17.353 4.461h-2.43v4.8h1.028V7.357h1.3v-.892h-1.3V5.353h1.4v-.892"
                    ></path>
                  </g>
                </svg>
              </Link>

              <Link
                href="https://www.figma.com/file/YfJtjKe8p2J7U7PQ3N5goB/Curriculo?node-id=1%3A3&t=TvRfslRgIRxZpogt-1"
                target="_blank"
              >
                <svg
                  className="h-8 curriculo__w-8"
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
              </Link>

              <Link
                href="https://www.linkedin.com/in/darlleybrito/"
                target="_blank"
              >
                <svg
                  className="h-8 curriculo__w-8"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <path
                    fill="#0A66C2"
                    d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
