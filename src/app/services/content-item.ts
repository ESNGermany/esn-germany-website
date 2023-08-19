/**
 * Directus interface for content items
 */
export interface ContentItem {
  title: string;
  text: string;
  layout:
    | 'text_only'
    | 'text_above_img_below'
    | 'text_below_img_above'
    | 'text_left_img_right'
    | 'text_right_img_left';
  wrap_in_shadow_box: boolean;
  background_gray: boolean;
  page:
    | 'Home'
    | 'Our_network'
    | 'For_students'
    | 'ESNcard_partners'
    | 'Contact_us';
  order_on_page: number;
  image: string;
}
