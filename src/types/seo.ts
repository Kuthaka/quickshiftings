export interface CityFAQ {
  question: string;
  answer: string;
}

export interface CitySEOData {
  slug: string;
  cityName: string;
  region: string;
  metaTitle: string;
  metaDescription: string;
  faqs: CityFAQ[];
}

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  _updatedAt: string;
  mainImage?: { url: string; alt: string };
  author?: string;
}
