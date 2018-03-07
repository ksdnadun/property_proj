
export class Property {
  _id: string;
  name: string;
  location: ILocation;
}

export interface ILocation {
  type: string;
  coordinates: number[];
}
