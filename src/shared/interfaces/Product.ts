export interface IProduct {
  _id: string;
  announceName: string;
  formattedPrice: string;
  price: number;
  kilometer: string;
  year: string;
  shiftType: string;
  gasType: string;
  link: string;
  img: string;
  location: string;
  inCart: boolean;
  postDate: {
    $date: Date;
  };
}
