import Item from './Item';

interface Package {
  package_title: string;
  package_description: string;
  package_type: string;
  package_address_street: string;
  package_address_line_2: string;
  package_address_city: string;
  package_address_state: string;
  package_address_zip: string;
  date_time_start: Date;
  date_time_end: Date;
  items: Array<Item>;
}

export default Package;
