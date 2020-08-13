export interface ContactModel {
  phone: string[];
  email: string[];
  messengerList: {
    name: string;
    link: string;
  }[]
  mobile: {
    isMainPhone: boolean;
    phone: string;
    note: string;
  }[];
}
