export type SiteSettings = {
  phone?: string;
  whatsapp?: string;
  email?: string;
  address?: string;
  facebook?: string;
  instagram?: string;
  mapsLink?: string;
  bookingLink?: string;
  announcement?: string;
  footerText?: string;
};

export type ContentEntry = {
  slug: string;
  title: string;
  shortDescription?: string;
  fullDescription?: string;
  image?: string;
  alt?: string;
  category?: string;
  date?: string;
  startDate?: string;
  endDate?: string;
  duration?: string;
  energyLevel?: string;
  location?: string;
  status?: string;
  availability?: string;
  registrationLink?: string;
  caption?: string;
  featured?: boolean;
  displayOrder?: number;
  country?: string;
  quote?: string;
  name?: string;
  body?: string;
  aspect?: string;
};
