import { useState, useEffect } from 'react';
// import Axios from 'axios';
import Select from 'react-select';

const MakeSelect = props => {
  const [makes, setMakes] = useState([]);

  useEffect(() => {
    fetchMakes();
  }, []);
  useEffect(() => {}, [makes]);

  // const fetchMakes = async () => {
  //   const response = await Axios(
  //     'https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json'
  //   );
  //   setMakes(response.data.Results.slice(0, 147));
  // };

  const fetchMakes = async () => {
    const where = encodeURIComponent(
      JSON.stringify({
        Year: {
          $exists: true,
        },
      })
    );
    const response = await fetch(
      `https://parseapi.back4app.com/classes/Carmodels_Car_Model_List?limit=10&order=Make&keys=Make&where=${where}`,
      {
        headers: {
          'X-Parse-Application-Id': 'u3RDu9JZAQ2q00JErqKwkX7HkJMpGnufuDtRB5Zi', // This is your app's application id
          'X-Parse-REST-API-Key': 'c8ja274bg8pFb5cIAGcJryM0IjU4egzcYF3Prn5m', // This is your app's REST API key
        },
      }
    );
    const data = await response.json(); // Here you have the data that you need
    console.log(JSON.stringify(data, null, 2));
  };

  // const toProperCase = string => {
  //   string = string.toLowerCase().split(' ');

  //   let final = [];

  //   for (let word of string) {
  //     final.push(word.charAt(0).toUpperCase() + word.slice(1));
  //   }
  //   return final.join(' ');
  // };

  return (
    <Select
      className='userSelectedMake'
      placeholder='Enter Vehicle Make'
      options={makes.map(make => ({
        label: make.Make_Name.toLowerCase(),
        // value: toProperCase(make.Make_Name),
      }))}
      onChange={e => {
        props.function(e.value);
      }}
    />
  );
};

export default MakeSelect;
