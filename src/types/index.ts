export interface Project {
  title: string;
  description: string;
  technologies: string[];
  demoLink: string;
  image: string;
  category:  "Karya Illustrasi" | "Aset & Elemen Kreator" | "Character Design" | "Desain Grafis";
}

export interface Blog {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
}
