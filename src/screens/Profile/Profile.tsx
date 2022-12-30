import { IonButton, IonContent, IonIcon, IonPage, IonText, IonTitle } from '@ionic/react';
import axios from 'axios';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Menu from '../../components/menu/Menu';
import TabNavigationBottom from '../../components/TabNavigationBottom';
import { getCurrentUser } from '../../services/auth.service';
import { getReceiver, updateReceiver } from '../../services/receiver.service';


import './Profile.css';
import { informationCircle, pencil, save } from 'ionicons/icons';

const Profile: React.FC = () => {
  const currentUser = getCurrentUser();

  const [userdata, setData] = useState<any>({ hits: [] });

  // Simple but it works can be moved to cetral control place use a state management lib
  // Redux Saga
  useEffect(() => {
    // Create an scoped async function in the hook
    async function anyNameFunction() {
      const receiver = await getReceiver();
      setData(receiver.data);
      // console.log(receiver)
    }

    // Execute the created function directly
    if (currentUser.roles) {
      anyNameFunction();
    }
  }, []);

  {/* ___________________ Display _______________ */ }

  const [edit, setEdit] = useState<Boolean>(false);

  const handleSetEdit = () => {
    setEdit(!edit)
  }

  const initialValues: any = {
    first_name: userdata.first_name ? userdata.first_name : "",
    last_name: userdata.last_name ? userdata.last_name : "",
    number_of_request: userdata.number_of_request && userdata.number_of_request,
    number_of_received_deliveries: userdata.number_of_request,
    address: "",
    address_line_2: "",
    city: "",
    state: "",
    zip_code: "",
    phone: "",
    email: currentUser.email,
    vegan: userdata.vegan ? userdata.vegan : false,
    vegetarain: userdata.vegetarain ? userdata.vegetarain : false,
    pescatarian: userdata.pescatarian ? userdata.pescatarian : false,
    celiac_desease: userdata.celiac_desease ? userdata.celiac_desease : false,
    kosher: userdata.kosher ? userdata.kosher : false,
    peanut_allergy: userdata.peanut_allergy ? userdata.peanut_allergy : false,
    dairy_allergy: userdata.dairy_allergy ? userdata.dairy_allergy : false,
    seafood_allergy: userdata.seafood_allergy ? userdata.seafood_allergy : false,
    egg_allergy: userdata.egg_allergy ? userdata.egg_allergy : false,
  };

  const validationSchema = Yup.object().shape({
  });


  const handleSubmit = (formValue: any) => {
    const receiver_post_values = {
      first_name: formValue.first_name,
      last_name: formValue.last_name,
      vegetarain: formValue.vegetarain,
      vegan: formValue.vegan,
      pescatarian: formValue.pescatarian,
      kosher: formValue.kosher,
      celiac_desease: formValue.celiac_desease,
      peanut_allergy: formValue.peanut_allergy,
      dairy_allergy: formValue.dairy_allergy,
      seafood_allergy: formValue.seafood_allergy,
      egg_allergy: formValue.egg_allergy,
    };
    console.log(receiver_post_values)

    updateReceiver(receiver_post_values).then(() => {

      window.location.reload();
    })


  }

  return (
    <IonPage>

      <Menu></Menu>

      {/* New  */}
      <IonContent>
        <Formik initialValues={initialValues}
          validationSchema={validationSchema}
          enableReinitialize={true}
          // enableReintialize={true}
          onSubmit={
            values => {
              handleSubmit(values)
            }
          }
        >
          {(formikProps) => {
            const { values, handleChange } = formikProps;
            return (
              <Form>
                {/* ___________________ Profile _______________ */}
                <div className="profile_grid">

                  {/* Banner */}
                  <div className="input_div whole profile_top ">
                    <div className='profile_title_text'>
                      <h1 className="profile_title">Profile</h1>
                    </div>
                    <div className="profile_title">
                      {edit === !true
                        ?
                        <IonButton onClick={handleSetEdit}>
                          Edit
                          <IonIcon slot="start" icon={pencil}></IonIcon>
                        </IonButton>
                        :


                        <IonButton type="submit">
                          <input type="submit" className="x-display" />
                          Save
                          <IonIcon slot="start" icon={save}></IonIcon>
                        </IonButton>

                      }

                    </div>
                  </div>
                  {/* Personal Info */}
                  <>
                    <div className="input_div whole">
                      <div className="section_title_div">
                        <IonText className="section_title">Personal Information</IonText>
                      </div>
                    </div>

                    {/* First Name */}
                    <div className="input_div one_3rd">

                      <div className="label_div">
                        <label htmlFor="fist_name" className="label">First Name</label>
                      </div>
                      {edit === true ?
                        <Field
                          name="first_name"
                          type="text"
                          autoComplete="off"
                          className="input_field"
                        />
                        :
                        values.first_name
                      }

                    </div>

                    {/* Last Name */}
                    <div className="input_div one_3rd_2">

                      <div className="label_div">
                        <label htmlFor="last_name" className="label">Family Name</label>
                      </div>
                      {edit === true ?
                        <Field
                          name="last_name"
                          type="text"
                          autoComplete="off"
                          className="input_field"
                        />
                        :
                        values.last_name
                      }
                    </div>

                    {/* Number of Requests */}
                    <div className="input_div one_3rd_4">

                      <div className="label_div">
                        <label htmlFor="number" className="label"># of Requests</label>
                      </div>

                      {values.number_of_request}

                    </div>

                    {/* Number of Received Deliveries */}
                    <div className="input_div one_3rd_5">

                      <div className="label_div">
                        <label htmlFor="number" className="label"># of Received Deliveries</label>
                      </div>


                      {values.number_of_received_deliveries}

                    </div>
                  </>

                  {/* Address Info */}
                  <>
                    <div className="input_div whole">
                      <div className="section_title_div">
                        <IonText className="section_title">Address</IonText>
                      </div>
                    </div>

                    {/* street */}
                    <div className="input_div first_half">

                      <div className="label_div">
                        <label htmlFor="address" className="label">Street Address</label>
                      </div>

                      {edit === true ?
                        <Field
                          name="address"
                          type="text"
                          autoComplete="on"
                          className="input_field"
                          placeholder="Street Address"
                        />
                        :
                        values.address
                      }
                    </div>

                    {/* address line 2 */}
                    <div className="input_div second_half">

                      <div className="label_div">
                        <label htmlFor="address_line_2" className="label">Address Line 2</label>
                      </div>

                      {edit === true ?
                        <Field
                          name="address_line_2"
                          type="text"
                          autoComplete="on"
                          className="input_field"
                          placeholder="Address Line 2"
                        />
                        :
                        values.address_line_2
                      }
                    </div>

                    {/* City */}
                    <div className="input_div one_3rd">

                      <div className="label_div">
                        <label htmlFor="city" className="label">City</label>
                      </div>

                      {edit === true ?
                        <Field
                          name="city"
                          type="text"
                          autoComplete="on"
                          className="input_field"
                          placeholder="City"
                        />
                        :
                        values.city
                      }
                    </div>

                    {/* State */}
                    <div className="input_div one_3rd_2">

                      <div className="label_div">
                        <label htmlFor="state" className="label">State</label>
                      </div>

                      {edit === true ?
                        <Field
                          name="state"
                          type="text"
                          autoComplete="on"
                          className="input_field"
                          placeholder="State"
                        />
                        :
                        values.state
                      }
                    </div>

                    {/* Zip code */}
                    <div className="input_div one_3rd_3">
                      <div className="label_div">
                        <label htmlFor="zip_code" className="label">Zip code</label>
                      </div>

                      {edit === true ?
                        <Field
                          name="zip_code"
                          type="text"
                          autoComplete="on"
                          className="input_field"
                          placeholder="Zip Code"
                        />
                        :
                        values.zip_code
                      }
                    </div>
                  </>

                  {/* Contact Info */}
                  <>
                    <div className="input_div whole">
                      <div className="section_title_div">
                        <IonText className="section_title">Contact Information</IonText>
                      </div>
                    </div>


                    {/* Phone */}
                    <div className="input_div first_half">
                      <div className="label_div">
                        <label htmlFor="zip_code" className="label">Phone Number</label>
                      </div>

                      {edit === true ?
                        <Field
                          name="phone"
                          type="text"
                          autoComplete="on"
                          className="input_field"
                          placeholder="Phone #"
                        />
                        :
                        values.phone
                      }
                    </div>

                    {/* Email */}
                    <div className="input_div second_half">
                      <div className="label_div">
                        <label htmlFor="address" className="label">Email Address</label>
                      </div>
                      {values.email}
                    </div>

                  </>

                  {/* Food Preferences */}
                  <>
                    <div className="input_div whole">
                      <div className="section_title_div">
                        <IonText className="section_title">Food Preferences</IonText>
                      </div>
                    </div>

                    <div className="input_div one_3rd">
                      {/* Vegan */}
                      <div className="">
                        <Field type="checkbox" name="vegan" id="vegan" className="" disabled={edit === !true && "disabled"} />
                        <label htmlFor="vegan" className="">Vegan</label>
                      </div>
                    </div>

                    <div className="input_div one_3rd_2">
                      {/* Vegan */}
                      <div className="">
                        <Field type="checkbox" name="vegetarain" id="vegetarain" className="" disabled={edit === !true && "disabled"} />
                        <label htmlFor="vegetarain" className="">Vegetarain</label>
                      </div>
                    </div>

                    <div className="input_div one_3rd_3">
                      {/* Vegan */}
                      <div className="">
                        <Field type="checkbox" name="pescatarian" id="pescatarian" className="" disabled={edit === !true && "disabled"} />
                        <label htmlFor="pescatarian" className="label_cehckbox">Pescatarian</label>
                      </div>
                    </div>

                  </>

                  {/* Food Restrictions */}
                  <>
                    <div className="input_div whole">
                      <div className="section_title_div">
                        <IonText className="section_title">Food Restrictions</IonText>
                      </div>
                    </div>

                    <div className="input_div first_half">
                      {/* Celiac Desease */}
                      <div className="">
                        <Field type="checkbox" name="celiac_desease" id="celiac_desease" className="" disabled={edit === !true && "disabled"} />
                        <label htmlFor="celiac_desease" className="" >Celiac Desease</label>
                      </div>
                    </div>

                    <div className="input_div second_half">
                      {/* Kosher */}
                      <div className="">
                        <Field type="checkbox" name="kosher" id="kosher" className="" disabled={edit === !true && "disabled"} />
                        <label htmlFor="kosher" className="">Kosher</label>
                      </div>
                    </div>
                  </>

                  {/* Food Allergies */}
                  <>
                    <div className="input_div whole">
                      <div className="section_title_div">
                        <IonText className="section_title">Food Allergies</IonText>
                      </div>
                    </div>

                    <div className="input_div first_half">
                      {/* Celiac Desease */}
                      <div className="">
                        <Field type="checkbox" name="peanut_allergy" id="peanut_allergy" className="" disabled={edit === !true && "disabled"} />
                        <label htmlFor="peanut_allergy" className="" >Peanuts</label>
                      </div>
                    </div>

                    <div className="input_div second_half">
                      {/* Kosher */}
                      <div className="">
                        <Field type="checkbox" name="dairy_allergy" id="dairy_allergy" className="" disabled={edit === !true && "disabled"} />
                        <label htmlFor="dairy_allergy" className="">Dairy</label>
                      </div>
                    </div>

                    <div className="input_div first_half">
                      {/* Seafood */}
                      <div className="">
                        <Field type="checkbox" name="seafood_allergy" id="seafood_allergy" className="" disabled={edit === !true && "disabled"} />
                        <label htmlFor="seafood_allergy" className="">Seafood</label>
                      </div>
                    </div>

                    <div className="input_div second_half">
                      {/* Eggs */}
                      <div className="">
                        <Field type="checkbox" name="egg_allergy" id="egg_allergy" className="" disabled={edit === !true && "disabled"} />
                        <label htmlFor="egg_allergy" className="">Dairy</label>
                      </div>
                    </div>
                  </>


                </div>
              </Form>
            );
          }}
        </Formik>
      </IonContent>
      <TabNavigationBottom></TabNavigationBottom>
    </IonPage>
  );
};
export default Profile;