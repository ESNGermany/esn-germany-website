/**
 * Directus interface for news items
 */
export interface NewsItem {
  id: string;
  title: string;
  text: string;
  image: string;
  attachment: string;
  author: string;
  published: Date;
}
