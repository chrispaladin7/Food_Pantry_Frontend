import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
} from '@ionic/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Menu from '../../components/menu/Menu';
import TabNavigationBottom from '../../components/TabNavigationBottom';
import Package from '../../types/Package';
import Item from '../../types/Item';
import Offers from '../Offers/Offers';

import './AddOffer.css';
import { useState } from 'react';

const AddOffer: React.FC = () => {
  // _________________________________________________________________
  // PACKAGE
  // _________________________________________________________________
  // starter values
  const initialValues: Package = {
    package_title: '',
    package_description: '',
    package_type: '',
    package_address_street: '',
    package_address_line_2: '',
    package_address_city: '',
    package_address_state: '',
    package_address_zip: '',
    date_time_start: new Date(),
    date_time_end: new Date(),
    items: [],
  };

  // Post request to server
  const handleAddPackage = (formValue: Package) => {
    const {
      package_title,
      package_description,
      package_type,
      package_address_street,
      package_address_line_2,
      package_address_city,
      package_address_state,
      package_address_zip,
      date_time_start,
      date_time_end,
      items,
    } = formValue;
    // dummy operation will be replaced with ha POST to server
    console.log(
      package_title,
      package_description,
      package_type,
      package_address_street,
      package_address_line_2,
      package_address_city,
      package_address_state,
      package_address_zip,
      date_time_start,
      date_time_end,
      items
    );
  };

  // _________________________________________________________________
  // ITEM
  // _________________________________________________________________

  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [itemWeight, setItemWeight] = useState('');
  const [peanut, setPeanut] = useState(false);
  const [dairy, setDairy] = useState(false);
  const [fish, setFish] = useState(false);
  const [eggs, setEggs] = useState(false);

  const handlePeanut = () => {
    setPeanut(!peanut);
  };
  const handleDairy = () => {
    setDairy(!dairy);
  };
  const handleFish = () => {
    setFish(!fish);
  };
  const handleEggs = () => {
    setEggs(!eggs);
  };

  const [items, setItems] = useState<any>([]);

  // Post request to server
  const handleAddItem = () => {
    const item = {
      itemName,
      itemQuantity,
      itemWeight,
      peanut,
      dairy,
      fish,
      eggs,
    };
    if (itemName !== '') {
      addItemToAtrray(item);
      console.log(items);
      setItemName('');
      setItemQuantity('');
      setItemWeight('');
      setPeanut(false);
      setDairy(false);
      setFish(false);
      setEggs(false);
    }
  };

  const addItemToAtrray = (item: any) => {
    setItems((old: any) => [...old, item]);
  };

  return (
    <IonPage>
      <Menu></Menu>
      <IonContent>
        <Formik initialValues={initialValues} onSubmit={handleAddPackage}>
          {(form) => (
            <Form>
              <div className="add_offer_inner_form_wrapper">
                {/* package title */}
                <div className="input_div whole">
                  <label htmlFor="package_title">Package Title</label>
                  <Field
                    name="package_title"
                    type="text"
                    autoComplete="on"
                    className="input_field"
                  />
                </div>
                {/* package type */}
                <div className="input_div one_3rd">
                  <label htmlFor="role">Package type</label>

                  <div className="input_field_group_radio">
                    <label className="check_selector_reg">
                      <Field
                        type="checkbox"
                        name="package_type"
                        value="restaurant dish"
                        className="checkbox_space_test"
                      />
                      Restaurant Dish
                    </label>

                    <label className="check_selector_reg">
                      <Field
                        type="checkbox"
                        name="package_type"
                        value="packaged food"
                        className="checkbox_space_test"
                      />
                      Packaged Food
                    </label>

                    <label className="check_selector_reg">
                      <Field
                        type="checkbox"
                        name="package_type"
                        value="fresh produce"
                        className="checkbox_space_test"
                      />
                      Fresh Produce
                    </label>

                    <label className="check_selector_reg">
                      <Field
                        type="checkbox"
                        name="package_type"
                        value="special diet"
                        className="checkbox_space_test"
                      />
                      Special Diet
                    </label>

                    <label className="check_selector_reg">
                      <Field
                        type="checkbox"
                        name="package_type"
                        value="frozen food"
                        className="checkbox_space_test"
                      />
                      Frozen Food
                    </label>
                  </div>
                </div>
                {/* describtion */}
                <div className="input_div two_3rd">
                  <label htmlFor="package_description">
                    Package Description
                  </label>
                  <Field
                    name="package_description"
                    as="textarea"
                    rows="10"
                    className="input_field"
                  />
                </div>

                {/* address */}

                {/* street */}
                <div className="input_div first_half">
                  <label htmlFor="package_address_street">Street Address</label>
                  <Field
                    name="package_address_street"
                    type="text"
                    autoComplete="on"
                    className="input_field"
                    placeholder="Street Address"
                  />
                </div>

                {/* address line 2 */}
                <div className="input_div second_half">
                  <label htmlFor="package_address_line_2">Address Line 2</label>
                  <Field
                    name="package_address_line_2"
                    type="text"
                    autoComplete="on"
                    className="input_field"
                    placeholder="Address Line 2"
                  />
                </div>

                {/* City */}
                <div className="input_div one_3rd">
                  <label htmlFor="package_address_city">City</label>
                  <Field
                    name="package_address_city"
                    type="text"
                    autoComplete="on"
                    className="input_field"
                    placeholder="City"
                  />
                </div>

                {/* State */}
                <div className="input_div one_3rd_2">
                  <label htmlFor="package_address_state">State</label>
                  <Field
                    name="package_address_state"
                    type="text"
                    autoComplete="on"
                    className="input_field"
                    placeholder="State"
                  />
                </div>

                {/* Zip code */}
                <div className="input_div one_3rd_3">
                  <label htmlFor="package_address_zip">Zip code</label>
                  <Field
                    name="package_address_zip"
                    type="text"
                    autoComplete="on"
                    className="input_field"
                    placeholder="Zip Code"
                  />
                </div>

                {/* add item */}
                <div className="first_half">
                  <div className="center">
                    <IonText className="text-md text-heavy">Add Item</IonText>
                  </div>
                  {/* item name */}
                  <div className="input_div first_half">
                    <label htmlFor="item_name">Item Name</label>
                    <input
                      name="item_name"
                      type="text"
                      // autoComplete="on"
                      className="input_field"
                      value={itemName}
                      onChange={(event) => {
                        setItemName(event.target.value);
                      }}
                    />
                  </div>

                  {/* item quantity */}
                  <div className="input_div first_half">
                    <label htmlFor="item_quantity">Item Quantity</label>
                    <input
                      name="item_quantity"
                      type="text"
                      autoComplete="on"
                      className="input_field"
                      value={itemQuantity}
                      onChange={(event) => {
                        setItemQuantity(event.target.value);
                      }}
                    />
                  </div>

                  {/* item weight */}
                  <div className="input_div first_half">
                    <label htmlFor="item_weight">Item Weight</label>
                    <input
                      name="item_weight"
                      type="text"
                      autoComplete="on"
                      className="input_field"
                      value={itemWeight}
                      onChange={(event) => {
                        setItemWeight(event.target.value);
                      }}
                    />
                  </div>
                  {/* item name */}
                  <div className="first_half">
                    <label htmlFor="item_preferences">Allergens</label>
                    <label className="check_selector_reg">
                      <input
                        type="checkbox"
                        name="item_preferences"
                        className="checkbox_space_test"
                        defaultChecked={peanut}
                        checked={peanut}
                        onChange={() => {
                          handlePeanut();
                        }}
                      />
                      Peanut
                    </label>
                    <label className="check_selector_reg">
                      <input
                        type="checkbox"
                        name="item_preferences"
                        className="checkbox_space_test"
                        defaultChecked={dairy}
                        checked={dairy}
                        onChange={() => {
                          handleDairy();
                        }}
                      />
                      Dairy
                    </label>

                    <label className="check_selector_reg">
                      <input
                        type="checkbox"
                        name="item_preferences"
                        className="checkbox_space_test"
                        defaultChecked={fish}
                        checked={fish}
                        onChange={() => {
                          handleFish();
                        }}
                      />
                      Fish
                    </label>

                    <label className="check_selector_reg">
                      <input
                        type="checkbox"
                        name="item_preferences"
                        className="checkbox_space_test"
                        defaultChecked={eggs}
                        checked={eggs}
                        onChange={() => {
                          handleEggs();
                        }}
                      />
                      Eggs
                    </label>
                  </div>
                  <div className="firs_half">
                    <IonButton
                      className="login_button to_right"
                      onClick={handleAddItem}
                    >
                      {/* <input type="submit" className="x-display" /> */}
                      Add Item
                    </IonButton>
                  </div>
                </div>
                {/* current items */}
                <div className="input_div second_half">
                  <div className="center">
                    <IonText className="text-md text-heavy">Items</IonText>
                  </div>

                  <IonGrid className="table_items">
                    <IonRow>
                      <IonCol>Name</IonCol>
                      <IonCol>Quantity</IonCol>
                      <IonCol>Weight</IonCol>
                      <IonCol>Peanut</IonCol>
                      <IonCol>Dairy</IonCol>
                      <IonCol>Fish</IonCol>
                      <IonCol>Eggs</IonCol>
                    </IonRow>
                    {items.map((item: any, index: number) => {
                      return (
                        <IonRow key={index}>
                          <IonCol>{item.itemName}</IonCol>
                          <IonCol>{item.itemQuantity}</IonCol>
                          <IonCol>{item.itemWeight}</IonCol>
                          <IonCol>
                            {item.peanut === true ? 'True' : 'False'}
                          </IonCol>
                          <IonCol>
                            {item.dairy === true ? 'True' : 'False'}
                          </IonCol>
                          <IonCol>
                            {item.fish === true ? 'True' : 'False'}
                          </IonCol>
                          <IonCol>
                            {item.eggs === true ? 'True' : 'False'}
                          </IonCol>
                        </IonRow>
                      );
                    })}
                  </IonGrid>
                </div>

                {/* submit package */}
                <div className="input_div whole">
                  {/* clean up some of this code!!! */}
                  <IonButton type="submit" className="login_button to_right">
                    <input type="submit" className="x-display" />
                    Add Package
                  </IonButton>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </IonContent>
      <TabNavigationBottom></TabNavigationBottom>
    </IonPage>
  );
};

export default AddOffer;
