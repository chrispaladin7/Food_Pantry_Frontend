import React, { useEffect, useState } from 'react';
import {
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonBadge,
} from '@ionic/react';
import {
  map,
  bicycleOutline,
  hourglassOutline,
  listOutline,
  homeOutline,
} from 'ionicons/icons';
import EventBus from '../common/EventBus';
import IUser from '../types/IUser';
import * as AuthService from '../services/auth.service';

const TabNavigationBottom: React.FC = () => {
  const [showDonorView, setShowDonorView] = useState<boolean>(false);
  const [showCourierView, setShowCourierView] = useState<boolean>(false);
  const [showReceiverView, setShowReceiverView] = useState<boolean>(false);

  const [showAdminBoard, setShowAdminBoard] = useState<boolean>(false);

  const [currentUser, setCurrentUser] = useState<IUser | undefined>(undefined);

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
  };
  return (
    <>
      {(showDonorView || showReceiverView || showCourierView) && (
        <IonTabBar slot="bottom">
          {showCourierView && (
            <IonTabButton tab="Offers" href="/offers">
              <IonIcon icon={listOutline} />
              <IonLabel>Offers</IonLabel>
            </IonTabButton>
          )}
          {showDonorView && (
            <IonTabButton  tab="AddOffer" href="/addoffer">
              <IonIcon icon={listOutline} />
              <IonLabel>Add Offer</IonLabel>
            </IonTabButton>
          )}

          {currentUser && (
            <IonTabButton tab="Donation" href="/donation">
              <IonIcon icon={bicycleOutline} />
              <IonLabel>Donation</IonLabel>
              <IonBadge>1</IonBadge>
            </IonTabButton>
          )}

          <IonTabButton tab="Home" href="/home">
            <IonIcon icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          <IonTabButton tab="Map" href="/map">
            <IonIcon icon={map} />
            <IonLabel>Map</IonLabel>
          </IonTabButton>

          <IonTabButton tab="Past" href="/past">
            <IonIcon icon={hourglassOutline} />
            <IonLabel>Past</IonLabel>
          </IonTabButton>
        </IonTabBar>
      )}
    </>
  );
};

export default TabNavigationBottom;
