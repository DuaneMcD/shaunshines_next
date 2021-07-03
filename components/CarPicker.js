import { useState, useEffect } from 'react';
import Select from 'react-select';
import Axios from 'axios';
import Fetch from 'node-fetch';
import YearSelect from './YearSelect';
import MakeSelect from './MakeSelect';
import ModelSelect from './ModelSelect';
import TrimSelect from './TrimSelect';

const CarPicker = () => {
  const [models, setModels] = useState([]);
  const [selectedYear, setSelectedYear] = useState();
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [trims, setTrims] = useState([]);
  const [selectedTrim, setSelectedTrim] = useState('');
  const [selectedService, setSelectedService] = useState('');

  const models_URL = `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/${selectedMake}/modelyear/${selectedYear}?format=json`;
  const options = [
    { label: 'Select a Service', value: 'Select a Service' },
    { label: 'Make it Shine!', value: 'Shine' },
    { label: 'Exterior', value: 'Exterior' },
    { label: 'Interior', value: 'Interior' },
    { label: 'Custom', value: 'Custom' },
  ];

  // const fetchModels = async () => {
  //   const response = await Axios(models_URL);
  //   setModels(response.data.Results);
  // };
  const fetchModels = async () => {
    const where = encodeURIComponent(
      JSON.stringify({
        Year: selectedYear,
        Make: selectedMake,
        Model: {
          $exists: true,
        },
      })
    );
    const response = await fetch(
      `https://parseapi.back4app.com/classes/Carmodels_Car_Model_List?limit=10&keys=Model,Category&where=${where}`,
      {
        headers: {
          'X-Parse-Application-Id': 'u3RDu9JZAQ2q00JErqKwkX7HkJMpGnufuDtRB5Zi', // This is your app's application id
          'X-Parse-REST-API-Key': 'c8ja274bg8pFb5cIAGcJryM0IjU4egzcYF3Prn5m', // This is your app's REST API key
        },
      }
    );
    const data = await response.json(); // Here you have the data that you need
    console.log(data.results);
    setModels(data.results);
  };

  const fetchVehicleCategory = async () => {
    const where = encodeURIComponent(
      JSON.stringify({
        Year: selectedYear,
        Make: selectedMake,
        Model: selectedModel,
      })
    );
    const response = await Fetch(
      `https://parseapi.back4app.com/classes/Carmodels_Car_Model_List?limit=10&where=${where}`,
      {
        headers: {
          'X-Parse-Application-Id': 'u3RDu9JZAQ2q00JErqKwkX7HkJMpGnufuDtRB5Zi',
          'X-Parse-REST-API-Key': 'c8ja274bg8pFb5cIAGcJryM0IjU4egzcYF3Prn5m',
        },
      }
    );
    const data = await response.json(); // Here you have the data that you need
    // console.log(data.results);
    // setTrims([data.results[0].Category]);
  };

  useEffect(() => {
    if (selectedYear && selectedMake) {
      fetchModels();
      ///reset model select with new year | make
    }
  }, [selectedYear, selectedMake]);

  useEffect(() => {
    if (selectedYear && selectedMake && selectedModel) {
      fetchVehicleCategory();
    }
  }, [selectedYear, selectedMake, selectedModel]);

  return (
    <div className='servicePicker'>
      <p>Please select a vehicle</p>
      <YearSelect function={setSelectedYear} />
      <MakeSelect function={setSelectedMake} />
      <ModelSelect
        make={selectedMake}
        year={selectedYear}
        models={models}
        function={setSelectedModel}
      />
      <TrimSelect
        make={selectedMake}
        year={selectedYear}
        selectedModel={selectedModel}
        trims={trims}
        function={setTrims}
      />
      <p className='promptSelectService'>Detail service:</p>
      <Select
        className='selectService'
        options={options}
        onChange={e => {
          setSelectedService(e.value);
        }}
      />
    </div>
  );
};

export default CarPicker;
