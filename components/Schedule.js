import { useState } from 'react';
import Image from 'next/image';
import CarPicker from './CarPicker';
import PurchaseButton from './PurchaseButton';
import { createPopper } from '@popperjs/core';
// import DatePicker from 'react-date-picker';
// import TimePicker from 'react-time-picker';
// import DateTimePicker from 'react-datetime-picker';
import serviceImg from './images/shaun-orange-camaro.JPG';

const Schedule = () => {
  const [value, onChange] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [estimate, setEstimate] = useState();

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  // const datePicker = () => {
  //   $('picker').datetimepicker({
  //     timepicker: true,
  //     datepicker: true,
  //     format: 'Y-m-d H:i',
  //     // value: {new Date()},
  //     weeks: true,
  //   });
  // };

  return (
    <main className='shop'>
      <button id='cart' className='cart'>
        <i className='bi bi-cart-fill'></i>
      </button>
      <h1 className='title'>Schedule Service</h1>
      <Image className='shopImage' src={serviceImg} alt='' />
      <p className='salesCopy'>
        Shaun Shines offers bespoke detailing services to suite your vehicle
        needs. <br />
        <br />
        To schedule service please enter your vehicle details, detailing service
        and a date.
      </p>
      <p className='disclaimer'>
        <u>Notice</u>
        <br />
        **Base Prices shown**
        <br />
        The quote may vary depending on vehicles’ size/condition – heavily
        pitted, soiled, badly scratched etc. All vehicles are reviewed for
        condition before service.
      </p>
      <CarPicker />
      <div className='dateTimePicker'>
        {/* <DatePicker
          className='datePicker'
          onChange={onChange}
          value={value}
          minDate={tomorrow}
          // maxDate={tomorrow.getDate() + 30}
        />
        <TimePicker className='timePicker' onChange={onChange} value={value} /> */}
      </div>
      <PurchaseButton />
    </main>
  );
};

export default Schedule;
