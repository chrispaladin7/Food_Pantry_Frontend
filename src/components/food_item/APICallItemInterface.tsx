
interface IObjectKeys {
  [key: string]: string | number | boolean | any;
}

export default interface APICallItem extends IObjectKeys {
    item_id: number;
    item_name: string;
    peanut_preferences: boolean;
    dairy_preferences: boolean;
    fish_preferences: boolean;
    egg_preferences: boolean;
    best_before_date: string;
    quantity: number;
    perishable_status: boolean;
    weight: number;
    weight_units: string;
    createdAt: string;
    updatedAt: string;
    package_id: number;
  }