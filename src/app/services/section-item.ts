/**
 * Directus interface for section items
 */
export interface SectionItem {
  name: string;
  city: string;
  website: string;
  email: string;
  region: 'north' | 'west' | 'east' | 'southwest' | 'southeast';
}
