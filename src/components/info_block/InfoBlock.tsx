import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonImg,
  IonCol,
  IonGrid,
  IonRow,
  IonText,
} from '@ionic/react';
/* Theme variables */
import '../../theme/variables.css';
import '../../theme/master_css.css';

import './InfoBlock.css';

type CompData = {
  data: any;
};

const InfoBlock: React.FC<CompData> = (props) => {
  const { data } = props;
  return (
    <IonCard className="card_style">
      <IonGrid>
        <IonRow>
          <section className="card_section upper-block">
            <IonCardHeader>
              <IonCardTitle className="text-lg text-heavy text-dark padding_left_0">
                {data[0].title}
              </IonCardTitle>
              <IonCardSubtitle className="text-md text-light padding_left_0">
                {data[0].subtitle}
              </IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <IonText className="z_up text-md ion-padding text-mild text-dark padding_left_0">
                {data[0].text}
              </IonText>
            </IonCardContent>
            <div className="curve"></div>
          </section>

          <section className="card_section lower-block">
            <IonCardHeader>
              <IonCardTitle className="text-lg text-heavy text-light padding_left_0">
                {data[1].title}
              </IonCardTitle>
              <IonCardSubtitle className="text-md text-dark padding_left_0">
                {data[1].subtitle}
              </IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <IonText className="z_up text-md ion-padding text-mild text-light padding_left_0">
                {data[1].text}
              </IonText>
            </IonCardContent>
          </section>
        </IonRow>
      </IonGrid>
    </IonCard>
  );
};

export default InfoBlock;
