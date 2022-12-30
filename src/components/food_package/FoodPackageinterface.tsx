import APICallItem from '../food_item/APICallItemInterface';
import Food_Item_Interface from '../food_item/FoodIteminterface';

interface Food_Package_Interface {
  // may need to add more
  image: string;
  backgroundImage: string;
  donor_name: string;
  // package_weight: string;
  // description: string;
  // items: Food_Item_Interface[];
  // pickupStartTime: Date;
  // pickupEndTime: Date;
  items: APICallItem[];
  comment: string;
  status: string;
  package_type: string;
  package_id: number;
  package_description: string;
  location: string;
  date_for_pickup: string;
}

export default Food_Package_Interface;
