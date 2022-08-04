export interface RawContact  {
  id: string;
  firstName: string;
  lastName: string;
  position:string;
  company: string;
  phones: string[];
  emails: string[];
  addresses: string[];
  birthday: string[];
  avatar: string;
}
export interface RawRenderContact {
  key : string;
  value : string;
}
