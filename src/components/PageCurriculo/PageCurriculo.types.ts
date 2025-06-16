export interface ApiData {
  firstName: string;
  lastName: string;
  title: string;
  profileImage: string;
  education: Education[];
  skills: string[];
  experience: Experience[];
  languages: string[];
  contact: Record<string, string>;
  social: Record<string, string>;
  profileText: string;
  download: string;
}

interface Education {
  period: string;
  institution: string;
  details: string;
}

interface Experience {
  period: string;
  company: string;
  description: string;
}

export interface PageCurriculoProps {
  // Adicione aqui quaisquer props que o componente possa receber
}
