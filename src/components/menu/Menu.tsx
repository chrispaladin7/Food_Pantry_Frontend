import React from 'react';
import {
  IonHeader,
  IonButtons,
  IonMenuButton,
  IonToolbar,
  IonImg,
} from '@ionic/react';
import { Link } from 'react-router-dom';

import './Menu.css';

import logo from '../../assets/img/Logo.png';

const Menu: React.FC = () => (
  <IonHeader>
    <IonToolbar>
      <Link to="/home" style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <IonImg src={logo} className="logo" />
      </Link>
      <IonButtons slot="end">
        <IonMenuButton className="menuButton"></IonMenuButton>
      </IonButtons>
    </IonToolbar>
  </IonHeader>
);

export default Menu;
