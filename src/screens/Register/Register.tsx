import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import RUser from '../../types/RUser';
import { register } from '../../services/auth.service';
import { addReceiver } from '../../services/receiver.service';

import {
  IonButton,
  IonContent,
  IonHeader,
  IonImg,
  IonPage,
  IonText,
} from '@ionic/react';
import '../../theme/Login_Registration.css';
import Menu from '../../components/menu/Menu';
import logo from '../../assets/img/Logo.png';
import { RouteComponentProps } from 'react-router-dom';
import { login } from '../../services/auth.service';

interface RouterProps {
  history: string;
}
type Props = RouteComponentProps<RouterProps>;

const Register: React.FC<Props> = ({ history }) => {
  const [successful, setSuccessful] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const initialValues: any = {
    email: '',
    password: '',
    password_check: '',
    role: '',
    vegan: false,
    vegetarain: false,
    pescatarian: false,
    kosher: false,
    celiac_desease: false,
    peanut_allergy: false,
    dairy_allergy: false,
    seafood_allergy: false,
    egg_allergy: false,
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please enter a valid email!')
      .max(255)
      .required('Please enter an email!'),

    password: Yup.string()
      .required('Please enter a password!')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        'Password must contain 8 characters,\n one uppercase,\n one lowercase,\n one number and one special case Character'
      ),

    password_check: Yup.string()
      .required('Please confirm password!')
      .oneOf([Yup.ref('password'), null], 'Passwords must match!'),

    role: Yup.string().required('Please select one of the user types!'),
  });
  const handleRegister = (formValue: RUser) => {
    const { email, password, role } = formValue;

    const preferences = {
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

    console.log(preferences);

    register(email, password, role).then(
      (response) => {
        setMessage(response.data.message);
        setSuccessful(true);

        login(email, password).then(
          (response) => {
            addReceiver(preferences).then(
              (success) => {
                console.log(success);
              },
              (error) => {
                console.log(error);
              }
            );
            setTimeout(() => {
              history.push('/profile');
              window.location.reload();
            }, 3000);
          },
          (error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
            // setLoading(false);
            setMessage(resMessage);
          }
        );
        // Extract loginn into its own file - and register
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setMessage(resMessage);
        setSuccessful(false);
      }
    );
  };
  return (
    <IonPage>
      <IonHeader>
        <Menu></Menu>
      </IonHeader>
      <IonContent>
        <div className="container">
          <div className="card card-container">
            <IonImg src={logo} className="logo center" />
            <img
              src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
              alt="profile-img"
              className="profile-img-card"
            />

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleRegister}
            >
              {(formikProps) => {
                const { values, handleChange } = formikProps;
                return (
                  <Form>
                    {message && (
                      <div className="form_control_group">
                        <div
                          className={
                            successful ? 'success_text' : 'danger_text'
                          }
                          role="alert"
                        >
                          {message}
                        </div>
                        {/* Not needed since a timeout function is applied */}
                        {/* {successful && (
                          <IonButton className="login_button" href="/login">
                            To Login
                          </IonButton>
                        )} */}
                      </div>
                    )}
                    {!successful && (
                      <div>

                        <div className="form_control_group">
                          <div className="section_title_div">
                            <label htmlFor="email" className="section_title" style={{ fontSize: "18px", textAlign: "left" }}>Email</label>
                          </div>

                          <Field
                            name="email"
                            type="text"
                            autoComplete="on"
                            className="form-control"
                          />

                          <ErrorMessage
                            name="email"
                            component="div"
                            className="danger_text form_error_input text_center"
                          />
                        </div>

                        <div className="form_control_group">
                          <div className="section_title_div">
                            <label htmlFor="password" className="section_title" style={{ fontSize: "18px", textAlign: "left" }}>Password</label>
                          </div>

                          <Field
                            name="password"
                            type="password"
                            autoComplete="on"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="password"
                            component="div"
                            className="danger_text form_error_input text_center"
                          />
                        </div>

                        <div className="form_control_group">
                          <div className="section_title_div">
                            <label htmlFor="password_check" className="section_title" style={{ fontSize: "18px", textAlign: "left" }}>Confirm Password</label>
                          </div>
                          <Field
                            name="password_check"
                            type="password"
                            autoComplete="on"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="password_check"
                            component="div"
                            className="danger_text form_error_input text_center"
                          />
                        </div>

                        {/* Section Title */}
                        <div className="section_title_div" >
                          <h2 className="section_title" style={{ fontSize: "18px", textAlign: "left" }}>Select User Type</h2>
                        </div>

                        <div className="form_control_group_radio" style={{ width: "100%" }}>
                          <div role="group">
                            {/* Donor */}
                            <Field type="radio" id="donor" name="role" value="donor" />
                            <label htmlFor="donor" className="radio_selector_reg">Donor</label>

                            {/* Courier */}
                            <Field type="radio" id="courier" name="role" value="courier" />
                            <label htmlFor="courier" className="radio_selector_reg">Courier</label>

                            {/* Receiver */}
                            <Field type="radio" id="receiver" name="role" value="receiver" />
                            <label htmlFor="receiver" className="radio_selector_reg">Receiver</label>
                            
                          </div>
                        </div>
                        <ErrorMessage
                          name="role"
                          component="div"
                          className="danger_text form_error_input text_center"
                        />
                        {values.role === 'receiver' && (
                          <>
                            {/* Preferences */}
                            <div className="form_control_group_check">
                              <div role="group">
                                {/* Section Title */}
                                <div className="section_title_div">
                                  <h2 className="section_title" style={{ fontSize: "18px", textAlign: "left" }}>Food Preferences</h2>
                                </div>


                                {/* Vegan */}
                                <Field
                                  id="vegan"
                                  type="checkbox"
                                  name="vegan"
                                />
                                <label htmlFor="vegan" className="radio_selector_reg">Vegan</label>

                                {/* Vegetarain */}
                                <Field
                                  id="vegetarain"
                                  type="checkbox"
                                  name="vegetarain"
                                />
                                <label htmlFor="vegetarain" className="radio_selector_reg">Vegetarain</label>

                                {/* Pescatarian */}
                                <Field
                                  id="pescatarian"
                                  type="checkbox"
                                  name="pescatarian"
                                />
                                <label htmlFor="pescatarian" className="radio_selector_reg">Pescatarian</label>
                              </div>
                            </div>

                            {/* Restrictions */}
                            <div className="form_control_group_check">
                              <div role="group">
                                {/* Section Title */}
                                <div className="section_title_div">
                                  <label className="section_title" style={{ fontSize: "18px", textAlign: "left" }}>Food Restrictions</label>
                                </div>

                                {/* Kosher */}
                                <Field
                                  id="kosher"
                                  type="checkbox"
                                  name="kosher"
                                />
                                <label htmlFor="kosher" className="radio_selector_reg">Kosher</label>

                                {/* Celiac Desease */}
                                <Field
                                  id="celiac_desease"
                                  type="checkbox"
                                  name="celiac_desease"
                                />
                                <label htmlFor="celiac_desease" className="radio_selector_reg">Celiac Desease</label>

                              </div>
                            </div>

                            {/* Allergies */}
                            <div className="form_control_group_check">
                              <div role="group">
                                {/* Section Title */}
                                <div className="section_title_div">
                                  <label className="section_title" style={{ fontSize: "18px", textAlign: "left" }}>Food Allergies</label>
                                </div>

                                {/* Peanuts */}
                                <Field
                                  id="peanut_allergy"
                                  type="checkbox"
                                  name="peanut_allergy"
                                />
                                <label htmlFor="peanut_allergy" className="radio_selector_reg">Peanuts</label>

                                {/* Dairy */}
                                <Field
                                  id="dairy_allergy"
                                  type="checkbox"
                                  name="dairy_allergy"
                                />
                                <label htmlFor="dairy_allergy" className="radio_selector_reg">Dairy</label>


                                {/* Seafood */}
                                <Field
                                  id="seafood_allergy"
                                  type="checkbox"
                                  name="seafood_allergy"
                                />
                                <label htmlFor="seafood_allergy" className="radio_selector_reg">Seafood</label>


                                {/* Eggs */}
                                <Field
                                  id="egg_allergy"
                                  type="checkbox"
                                  name="egg_allergy"
                                />
                                <label htmlFor="egg_allergy" className="radio_selector_reg">Eggs</label>

                              </div>
                            </div>
                          </>
                        )}

                        <div className="form_control_group">
                          <IonButton type="submit" className="login_button">
                            <input type="submit" className="x-display" />
                            Sign Up
                          </IonButton>
                        </div>
                        <IonText>
                          Already a member? <a href="/login">Login</a>{' '}
                        </IonText>
                      </div>
                    )}
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default Register;
