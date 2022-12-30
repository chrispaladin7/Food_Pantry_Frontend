import { IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react';
import FoodPackage from '../../components/food_package/FoodPackage';
import Food_Package_Interface from '../../components/food_package/FoodPackageinterface';
import Menu from '../../components/menu/Menu';
import TabNavigationBottom from '../../components/TabNavigationBottom';
import Restaurant_logo from '../../assets/img/Restaurant_logo.jpg';
import Restarant_background from '../../assets/img/Pizza_Background.png';
import Food_Item_Interface from '../../components/food_item/FoodIteminterface';
import { getAllItemsForPackage } from '../../services/item.service';
import { getAllPackages } from '../../services/package.service';
import { useEffect, useState } from 'react';
import APICallItem from '../../components/food_item/APICallItemInterface';
import APICallPackage from '../../components/food_package/APICallPackageInterface ';

import "./Offers.css"
import makeDateNice from '../../common/DataFormat';
import { boolean } from 'yup';
import CheckBox from './CheckBox';

const Offers: React.FC = () => {
  // Data State
  const [packagesArr, setPackagesArr] = useState<APICallPackage[]>([]);
  // Get data
  useEffect(() => {
    getAllPackages().then((packages) => {
      let food_pref: any = []
      packages.data.map((packageIn: APICallPackage) => {
        packageIn.date_for_pickup = makeDateNice(packageIn.date_for_pickup)

        packageIn.Items.map((item: APICallItem) => {
          // console.log(item)
          if (item.egg_preferences === true && !food_pref.includes('egg')) {
            food_pref.push('egg')
          }
          if (item.dairy_preferences === true && !food_pref.includes('dairy')) {
            food_pref.push('dairy')
          }
          if (item.fish_preferences === true && !food_pref.includes('fish')) {
            food_pref.push('fish')
          }
          if (item.peanut_preferences === true && !food_pref.includes('peanut')) {
            food_pref.push('peanut')
          }
        })
        packageIn.food_pref = food_pref
        food_pref = []
      })
      // console.log(packages.data)
      setPackagesArr(packages.data)
    })
  }, [])


  /******************* Search Text *********************/
  const [query, setQuery] = useState("");
  const keys: string[] = ["donor_name", "package_description", "package_type", "date_for_pickup"];
  const searchText = (data: APICallPackage[]) => {
    return data.filter((item: APICallPackage) =>
      keys.some((key: string) => (item as any)[key].toLowerCase().includes(query))
    );
  };
  /*****************************************************/
  /****************** Search Fillters ******************/
  const [Filters, setFilters] = useState<any>({
    foodOptions: []
  })

  const showFilteredResults = (filters: any) => {

  }
  const [InFilter, setInFilter] = useState<any[]>([]);

  const handleFilters = (filters: any, category: any) => {
    const newFilters = { ...Filters }
    console.log(filters)
    setInFilter(filters)

    newFilters[category] = filters

    showFilteredResults(newFilters)


  }

  /*****************************************************/
  console.log(InFilter)
  const searchOuter = (data: any) => {
    if (InFilter.length > 0) {
      return data.filter((item: any) =>
        InFilter.some((key) => item['food_pref'].includes(key))
        // keys.some((key: string) => singlePack.Items.some(g => foodFilters[key] == g[key]))
        // singlePack.Items.some(g => foodFilters[value] == !g[value])
      );
    }
    return data
  };

  return (
    <IonPage>
      <Menu></Menu>
      <IonContent>
        <IonGrid>
          <IonRow className='search-row'>
            <div className='search-container'>
              <input
                className="search"
                placeholder="Search..."
                onChange={(e) => setQuery(e.target.value.toLowerCase())}
              />
              <div className='check-box-search-container'>
                <CheckBox
                  handleFilters={(filters: any) => handleFilters(filters, "food_specs")}
                ></CheckBox>

              </div>
            </div>
          </IonRow>
          <IonRow>
            {(packagesArr.length > 0) && searchOuter(searchText(packagesArr)).map((foodPackage: APICallPackage, index: number) => {
              return (
                <IonCol
                  sizeXs="12"
                  sizeSm="12"
                  sizeMd="6"
                  sizeLg="4"
                  sizeXl="3"
                  key={index}
                >
                  <FoodPackage
                    image={Restaurant_logo}
                    backgroundImage={Restarant_background}
                    items={foodPackage.Items}
                    {...foodPackage}
                    key={index}
                  ></FoodPackage>
                </IonCol>
              );
            })}
          </IonRow>

        </IonGrid>
      </IonContent>
      {/* Bottom Nav*/}
      <TabNavigationBottom></TabNavigationBottom>
    </IonPage>
  );
};

export default Offers;
