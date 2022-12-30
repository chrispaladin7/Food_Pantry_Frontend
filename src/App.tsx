import { Redirect, Route, useHistory } from 'react-router-dom';
import {
  IonApp,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

// Pages imports
import Home from './screens/Home/Home';
import Help from './screens/Help/Help';
import About from './screens/AboutUs/About';
import Profile from './screens/Profile/Profile';
import Settings from './screens/UserSettings/Settings';
import { useEffect, useState } from 'react';
import Offers from './screens/Offers/Offers';
import Donation from './screens/Donation/Donation';
import MapNav from './screens/MapNav/MapNav';
import Past from './screens/Past/Past';

import Login from './screens/Login/Login';
import Register from './screens/Register/Register';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/master_css.css';
import './theme/fonts.css';

import {
  helpCircleOutline,
  informationCircle,
  options,
  personCircleOutline,
  logOutOutline,
  logInOutline,
  personAddOutline,
} from 'ionicons/icons';

import EventBus from './common/EventBus';
import * as AuthService from './services/auth.service';
import IUser from './types/IUser';
import AddOffer from './screens/AddOffer/AddOffer';

setupIonicReact();

// if kuser exiists
// send hasxhed and salted password and server logic checks
// server - NodeJS - express RESTful CRUD (SQL) binding HTTP method call GET, POST, UPDATE, PATCH,
// branch Main(), DATABASE(), SERVER()
//

const App: React.FC = () => {
  const [showDonorView, setShowDonorView] = useState<boolean>(false);
  const [showCourierView, setShowCourierView] = useState<boolean>(false);
  const [showReceiverView, setShowReceiverView] = useState<boolean>(false);

  const [showAdminBoard, setShowAdminBoard] = useState<boolean>(false);

  const [currentUser, setCurrentUser] = useState<IUser | undefined>(undefined);

  const history = useHistory();

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      setShowDonorView(user.roles.includes('ROLE_DONOR'));
      setShowCourierView(user.roles.includes('ROLE_COURIER'));
      setShowReceiverView(user.roles.includes('ROLE_RECEIVER'));
      setShowAdminBoard(user.roles.includes('ROLE_ADMIN'));
    }
    EventBus.on('logout', logOut);
    return () => {
      EventBus.remove('logout', logOut);
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setShowCourierView(false);
    setShowAdminBoard(false);
    setCurrentUser(undefined);
    history.push('/home');
    window.location.reload();
  };

  return (
    <IonApp>
      {/* Drop down menu - move this to a separate component*/}
      <IonMenu side="end" menuId="first" contentId="primary">
        <IonHeader>
          <IonToolbar color="medium">
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            {currentUser && (
              <>
                <IonItem button routerLink="/profile">
                  <IonIcon slot="start" icon={personCircleOutline}></IonIcon>
                  <IonLabel>Profile</IonLabel>
                </IonItem>
                <IonItem button routerLink="/Settings">
                  <IonIcon slot="start" icon={options}></IonIcon>
                  <IonLabel>Settings</IonLabel>
                </IonItem>
              </>
            )}
            <IonItem button routerLink="/help">
              <IonIcon slot="start" icon={helpCircleOutline}></IonIcon>
              <IonLabel>Help</IonLabel>
            </IonItem>

            <IonItem button routerLink="/about">
              <IonIcon slot="start" icon={informationCircle}></IonIcon>
              <IonLabel>About</IonLabel>
            </IonItem>

            {currentUser ? (
              <IonItem button onClick={logOut}>
                <IonIcon slot="start" icon={logOutOutline}></IonIcon>
                <IonLabel>Log out</IonLabel>
              </IonItem>
            ) : (
              <>
                <IonItem button routerLink="/Login">
                  <IonIcon slot="start" icon={logInOutline}></IonIcon>
                  <IonLabel>Login</IonLabel>
                </IonItem>
                <IonItem button routerLink="/Register">
                  <IonIcon slot="start" icon={personAddOutline}></IonIcon>
                  <IonLabel>Register</IonLabel>
                </IonItem>
              </>
            )}
          </IonList>
        </IonContent>
      </IonMenu>

      <IonReactRouter>
        <IonRouterOutlet id="primary">
          {/* public routes */}
          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/">
            <Redirect to="/home" />
          </Route>

          <Route exact path="/help">
            <Help />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          {/* any user routes */}
          <Route exact path="/settings">
            {currentUser && <Settings />}
          </Route>

          <Route exact path="/profile">
            {currentUser && <Profile />}
          </Route>

          <Route exact path="/map">
            {currentUser && <MapNav />}
          </Route>

          <Route exact path="/past">
            {currentUser && <Past />}
          </Route>
          <Route exact path="/addoffer">
            {showDonorView && <AddOffer />}
          </Route>

          {/* courier routes */}
          <Route exact path="/offers">
            {showCourierView && <Offers />}
          </Route>

          {/* donor routes */}
          <Route exact path="/donation">
            <Donation />
          </Route>

          {/* work will be needed here to disallow access of route if loged in */}
          <Route exact path="/login" component={Login} />

          {/* work will be needed here to disallow access of route if loged in */}
          <Route exact path="/register" component={Register} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
