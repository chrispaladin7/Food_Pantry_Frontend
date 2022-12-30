// imports here
import { IonCard, IonText } from '@ionic/react';
import Food_Item_Interface from './FoodIteminterface';

// css import
import './FoodItem.css';
import APICallItem from './APICallItemInterface';
import makeDateNice from '../../common/DataFormat';

// use props
const FoodItem: React.FC<APICallItem> = (props) => {
  // don't forget to destructure your prop
  const {
    item_name,
    peanut_preferences,
    dairy_preferences,
    fish_preferences,
    egg_preferences,
    best_before_date,
    quantity,
    perishable_status,
    weight,
    weight_units,
  } = props;
  // component related functions here

  //The main part of the work you will need to do is style and make this component
  return (
    <IonCard className="text-light">
      <div className="section_title_div item_title text-md" id="item_name">
        <IonText className="section_title" style={{ fontSize: "1.5rem", paddingBottom: "1rem" }}>{item_name}</IonText>
      </div>
      <div className="item_details">
        <div className="section_title_div item_title text-md" id="weight">
          <IonText className="section_title" style={{ fontSize: "1.2rem", paddingBottom: "0.6rem" }}>
            Weight:
          </IonText><span style={{ fontSize: "1rem" }}> {weight}{weight_units}</span>
        </div>
        <div className="section_title_div item_title text-md" id="weight">
          <IonText className="section_title" style={{ fontSize: "1.2rem", paddingBottom: "0.6rem" }}>
            Quantity:
          </IonText><span style={{ fontSize: "1rem" }}>{quantity} </span>
        </div>
        <div className="section_title_div item_title text-md" id="best_before_date">
          <IonText className="section_title" style={{ fontSize: "1.2rem", paddingBottom: "0.6rem" }}>
            Best Before:
          </IonText><span style={{ fontSize: "1rem" }}> {makeDateNice(best_before_date)}</span>
        </div>

      </div>
      <div className="form_control_group_check">

        <div className="section_title_div item_title text-md" id="item_name"
          hidden={
            !peanut_preferences &&
            !dairy_preferences &&
            !fish_preferences &&
            !egg_preferences
          }>
          <IonText className="section_title" style={{ fontSize: "1.2rem", paddingBottom: "0.6rem" }}>Contains</IonText>
        </div>

        {peanut_preferences &&
          <>
            <input type="checkbox" name="peanut_preferences" id="peanut_preferences" className="" checked disabled={true} />
            <label htmlFor="peanut_preferences" className="radio_selector_reg">peanut</label>
          </>
        }

        {dairy_preferences &&
          <>
            <input type="checkbox" name="dairy_preferences" id="dairy_preferences" className="" checked disabled={true} />
            <label htmlFor="dairy_preferences" className="radio_selector_reg">dairy</label>
          </>
        }
        {fish_preferences &&
          <>
            <input type="checkbox" name="fish_preferences" id="egfish_preferencesg" className="" checked disabled={true} />
            <label htmlFor="fish_preferences" className="radio_selector_reg">fish</label>
          </>
        }
        {egg_preferences &&
          <>
            <input type="checkbox" name="egg_preferences" id="egg_preferences" className="" checked disabled={true} />
            <label htmlFor="egg_preferences" className="radio_selector_reg">egg</label>
          </>
        }
      </div>
    </IonCard>
  );
};

export default FoodItem;
