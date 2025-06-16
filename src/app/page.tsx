import { Metadata } from "next";

import PageBlog from "@/components/PageBlog";

export const metadata: Metadata = {
  title: "Darlley Brito - Blog",
  description: "Um blog de pensamentos sobre tecnologia e filosofia.",
  authors: [
    {
      name: "Darlley Brito",
      url: "https://github.com/Darlley",
    }
  ],
  
  keywords: ["web developer", "full stack", "ui designer", "frontend", "backend", "nodehjs", "reactjs", "nextjs", "typescript", "tailwindcss"],
  openGraph: {
    title: "Darlley Brito - Portfólio",
    description: "Web Developer Full Stack and UI Designer.",
    type: "website",
    url: "https://darlley.dev",
    locale: "pt_BR",
    images: [
      {
        url: "/thumbnail.png",
      }
    ]
  },
  icons: "/favicon.ico"
};

export default function Page() {
  return <PageBlog />;
}
