import React, { useState } from 'react';
import Select from 'react-select';

export const YearSelect = props => {
  const currentModelYear = new Date().getFullYear() + 1;
  const [years] = useState([]);

  for (let i = currentModelYear; i > 1949; i--) {
    years.push(React.createElement('option', { value: i, key: i }, i));
  }

  return (
    <Select
      className='userSlectedYear'
      placeholder='Enter Vehicle Year'
      options={years.map(year => ({
        label: year,
        value: year,
      }))}
      onChange={e => {
        props.function(Number(e.label.key));
      }}
    />
  );
};

export default YearSelect;
