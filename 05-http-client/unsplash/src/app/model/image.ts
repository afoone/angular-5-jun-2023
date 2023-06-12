export interface Image {
  id: string;
  alt_description: string;
  height: number;
  width: number;
  urls: ImageUrls;
}

export interface ImageUrls {
  small: string;
}

