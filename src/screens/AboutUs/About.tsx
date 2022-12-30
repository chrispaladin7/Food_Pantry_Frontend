import { IonContent, IonPage } from '@ionic/react';
import Menu from '../../components/menu/Menu';

import './About.css';

const About: React.FC = () => {
  return (
    <IonPage>
      <Menu></Menu>

      <IonContent className="center">
        <div className="spacer layer2">
          <h1 className="ion-padding-top text-lg text-heavy">About Us</h1>
        </div>

        {/* About the company */}
        <section className="z_up ">
          <h2 className="text-md-plus">The Company</h2>
          <p className="text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            iusto consequuntur sint cupiditate unde ab natus magnam? Aperiam
            delectus quos dolorum minus error vel unde eveniet ipsam sed, harum
            ea.
          </p>
          <p className="text-md">
            Ratione, veniam natus atque sunt molestias provident placeat totam
            quasi ducimus rerum mollitia est, suscipit repudiandae praesentium
            eos doloribus. Odio ducimus eos non ab natus sit officia consectetur
            iste distinctio?
          </p>
        </section>
        <div className="spacer layer1"></div>

        {/* About the project */}
        <section className="z_up color_2">
          <h2 className="text-md-plus">The Project</h2>
          <p className="text-md">
            Maiores sit minima error quisquam excepturi vero numquam obcaecati
            vitae iste, impedit veniam, dolorem iusto officia ut odio itaque ab
            necessitatibus labore, debitis nesciunt ducimus commodi delectus est
            nobis! Doloribus.
          </p>
          <p className="text-md">
            Ratione, veniam natus atque sunt molestias provident placeat totam
            quasi ducimus rerum mollitia est, suscipit repudiandae praesentium
            eos doloribus. Odio ducimus eos non ab natus sit officia consectetur
            iste distinctio?
          </p>
        </section>
        <div className="spacer layer2"></div>

        {/* The team */}
        <section className="z_up">
          <h2 className="text-md-plus">The Team</h2>
          <p className="text-md">
            Ratione, veniam natus atque sunt molestias provident placeat totam
            quasi ducimus rerum mollitia est, suscipit repudiandae praesentium
            eos doloribus. Odio ducimus eos non ab natus sit officia consectetur
            iste distinctio?
          </p>
          <p className="text-md">
            Maiores sit minima error quisquam excepturi vero numquam obcaecati
            vitae iste, impedit veniam, dolorem iusto officia ut odio itaque ab
            necessitatibus labore, debitis nesciunt ducimus commodi delectus est
            nobis! Doloribus.
          </p>
        </section>

        <div className="spacer layer1"></div>
      </IonContent>
    </IonPage>
  );
};

export default About;
