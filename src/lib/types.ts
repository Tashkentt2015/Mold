export type SiliconeType = 'platinum' | 'condensation' | 'food-grade';
export type Product = {
  slug: string;
  title: string;
  shortDescription: string;
  useCases: string[];
  silicone: SiliconeType;
  sizes: { width: number; height: number; depth?: number; unit: 'mm'|'cm' }[];
  priceTRY: number;
  popularity: number;
  images: string[];
};
