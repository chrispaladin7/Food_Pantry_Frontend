import React, { useState, useEffect } from 'react';

import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonPage,
  IonRow,
  IonText,
} from '@ionic/react';

// styles of component
import './Home.css';

// nav related components
import Menu from '../../components/menu/Menu';
import TabNavigationBottom from '../../components/TabNavigationBottom';

// general components
import Promo from '../../assets/img/Promo.png';
import InfoBlock from '../../components/info_block/InfoBlock';
import { getPublicContent } from '../../services/user.service';

const cta_data = [
  {
    title: 'Donate Food',
    subtitle: 'lead by example',
    text: 'Join a vibrant community of like-minded, caring individuals and businesses. To be a food donor is not only rewarding on the social justice level, but it can also have great tax benefits. Regardless of the size of your operations, giving back to the community is not only an option but our duty as human beings. Individuals, small businesses, and giants of industry are all invited to join FoodPantry in our quest to limit food waste, bring out the best in humanity, and, last but not least, provide access to food for those of us who need it the most.  ',
    image: 'food_donation_box.jpg',
  },
  {
    title: 'Volunteer Your Time',
    subtitle: 'a force for good',
    text: 'Join a vibrant community of like-minded, caring individuals and businesses. To be a food donor is not only rewarding on the social justice level, but it can also have great tax benefits. Regardless of the size of your operations, giving back to the community is not only an option but our duty as human beings. Individuals, small businesses, and giants of industry are all invited to join FoodPantry in our quest to limit food waste, bring out the best in humanity, and, last but not least, provide access to food for those of us who need it the most.  ',
    image: 'time_volunteer.png',
  },
];

const Home: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => {
        const ismobile = window.innerWidth < 539;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);

  const [content, setContent] = useState<string>('');
  useEffect(() => {
    getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
        setContent(_content);
      }
    );
  }, []);

  return (
    <IonPage>
      {/* head section for menu and title */}
      <IonHeader>
        <Menu></Menu>
      </IonHeader>

      {/* main section of the page - description, roat map and more */}
      <IonContent className="">
        {/* grid */}
        <IonGrid className="main_grid">
          {/* first row */}
          <IonRow>
            {/* column 1 */}
            <IonCol
              className="col_zero_p_left "
              size-xl="4"
              size-lg="4"
              size-md="12"
              size-sm="12"
              size-xs="12"
            >
              <IonImg src={Promo} className="promo_img" />
            </IonCol>

            {/* column 2*/}
            <IonCol
              className=""
              size-xl="8"
              size-lg="8"
              size-md="12"
              size-sm="12"
              size-xs="12"
            >
              <IonRow>
                <IonText className="title ion-padding text-xl">
                  <span>B</span>
                  <span>u</span>
                  <span>i</span>
                  <span>l</span>
                  <span>d</span>
                  <span> t</span>
                  <span>o</span>
                  <span> h</span>
                  <span>e</span>
                  <span>l</span>
                  <span>p</span>
                </IonText>
              </IonRow>
              <IonRow>
                <IonText
                  className={`ion-padding text-md ${
                    isMobile ? 'center' : ''
                  } subtitle`}
                >
                  You can make a difference! Be the change you want to see in
                  others
                </IonText>
              </IonRow>
              <IonRow>
                <InfoBlock data={cta_data} />
              </IonRow>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>

      {/* Bottom Nav*/}
      <TabNavigationBottom></TabNavigationBottom>
    </IonPage>
  );
};

export default Home;
