interface Item {
  item_name: string;
  peanut_preferences: boolean;
  dairy_preferences: boolean;
  fish_preferences: boolean;
  egg_preferences: boolean;
  best_before_date: Date;
  quantity: number;
  perishable_status: boolean;
  weight: number;
}

export default Item;
