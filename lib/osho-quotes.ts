export const oshoQuoteCategories = [
  "Awareness & Witnessing",
  "Meditation & Silence",
  "Love & Life",
  "Love & Relationship",
  "Life & Change",
  "Mind & Freedom",
  "Joy & Celebration",
  "Authenticity & Courage",
  "Acceptance & Inner Growth",
  "Presence & Letting Go",
  "Creativity, Compassion & Community",
] as const;

export type OshoQuoteCategory = (typeof oshoQuoteCategories)[number];

export type OshoQuote = {
  quote: string;
  category: OshoQuoteCategory;
  source?: string;
  sourceUrl?: string;
};

/**
 * Add up to 100 verified quotations here. Preserve the exact wording and include
 * a book, discourse, or authorized publication wherever possible.
 *
 * Example shape (leave commented until real content is ready):
 * {
 *   quote: "Exact quotation",
 *   category: "Meditation & Silence",
 *   source: "Book or discourse title",
 *   sourceUrl: "https://example.com/authorized-source",
 * },
 */
export const oshoQuotes: readonly OshoQuote[] = [
  {
    quote: "Love is the goal, life is the journey",
    category: "Love & Life",
    source: "Book or discourse title",
    sourceUrl: "https://example.com/authorized-source",
  },
];
