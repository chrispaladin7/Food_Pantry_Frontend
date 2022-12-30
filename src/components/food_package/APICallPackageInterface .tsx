import APICallItem from "../food_item/APICallItemInterface";

export default interface APICallPackage {
  food_pref: any;
  filter(arg0: (item: APICallPackage) => boolean): unknown;
  package_id: number;
  donor_name: string;
  package_description: string;
  package_type: string;
  date_for_pickup: string;
  status: string;
  location: string;
  comment: string;
  createdAt: string;
  updatedAt: string;
  Items: APICallItem[];
}