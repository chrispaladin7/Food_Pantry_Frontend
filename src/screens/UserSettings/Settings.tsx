import { IonPage, IonTitle } from '@ionic/react';
import Menu from '../../components/menu/Menu';

const Settings: React.FC = () => {
  return (
    <IonPage>
      <Menu></Menu>
      <IonTitle>Settings</IonTitle>
    </IonPage>
  );
};

export default Settings;
