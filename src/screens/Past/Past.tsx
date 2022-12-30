import { IonPage, IonTitle } from '@ionic/react';
import Menu from '../../components/menu/Menu';
import TabNavigationBottom from '../../components/TabNavigationBottom';

const Past: React.FC = () => {
  return (
    <IonPage>
      <Menu></Menu>
      <IonTitle>Past</IonTitle>
      {/* Bottom Nav*/}
      <TabNavigationBottom></TabNavigationBottom>
    </IonPage>
  );
};

export default Past;
