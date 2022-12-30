import { IonPage, IonTitle } from '@ionic/react';
import Menu from '../../components/menu/Menu';
import TabNavigationBottom from '../../components/TabNavigationBottom';

const MapNav: React.FC = () => {
  return (
    <IonPage>
      <Menu></Menu>
      <IonTitle>Map</IonTitle>
      {/* Bottom Nav*/}
      <TabNavigationBottom></TabNavigationBottom>
    </IonPage>
  );
};

export default MapNav;
