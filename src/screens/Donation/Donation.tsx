import { IonPage, IonTitle } from '@ionic/react';
import Menu from '../../components/menu/Menu';
import TabNavigationBottom from '../../components/TabNavigationBottom';

const Donation: React.FC = () => {
  return (
    <IonPage>
      <Menu></Menu>
      <IonTitle>Donation</IonTitle>
      {/* Bottom Nav*/}
      <TabNavigationBottom></TabNavigationBottom>
    </IonPage>
  );
};

export default Donation;
