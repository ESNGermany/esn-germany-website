/**
 * Directus interface for general information item
 */
export interface GeneralInformationItem {
  email: string;
  facebook: string;
  instagram: string;
  twitter: string;
  linkedin: string;
  section_counter: number;
  banner_text: string;
  address_co: string;
  address_street: string;
  address_city: string;
  background_photos: [
    {
      directus_files_id: string | undefined;
    },
  ];
}
