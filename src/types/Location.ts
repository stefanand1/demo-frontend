export interface Location {
    id: number;
    attributes: Attributes;
  }

  export interface Image {
    id: number;
    attributes: Attributes;
  }
  export interface Attributes {
    name: string;
    alternativeText?: null;
    caption?: null;
    width: number;
    height: number;
    formats: Formats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl?: null;
    provider: string;
    provider_metadata?: null;
    createdAt: string;
    updatedAt: string;
  }
  export interface Formats {
    thumbnail: Thumbnail;
  }
  export interface Thumbnail {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path?: null;
    size: number;
    width: number;
    height: number;
    sizeInBytes: number;
  }

  
  export interface Attributes {
    title: string;
    bedCount: number;
    estMinMonthlyPay: string;
    estMaxMonthlyPay: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    lat: number;
    lng: number;
    images: {
      data: Image[]
    }
  }
  