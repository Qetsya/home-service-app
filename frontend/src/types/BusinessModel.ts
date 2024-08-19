export interface BusinessModel {
  _id: string;
  name: string;
  about?: string;
  address: string;
  category: string;
  contactPerson: string;
  email: string;
  images: ImageUrl[];
}

interface ImageUrl {
  url: string;
}
