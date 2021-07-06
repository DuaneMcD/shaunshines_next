import { useState } from 'react';
import { useForm } from 'react-hook-form';
import CarPicker from './CarPicker';
import Image from 'next/image';
import serviceImg from './images/shaun-orange-camaro.JPG';
import axios from 'axios';

export const Schedule = () => {
  const [value, onChange] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [estimate, setEstimate] = useState();
  const { register, handleSubmit, errors, reset } = useForm();

  const quoteRequestSubmit = async values => {
    const config = {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_URL}/api/requestQuote`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: values,
    };

    try {
      const response = await axios(config);
      console.log(response);
      if (response.data.status == 200) {
        console.log('Success!');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className='shop'>
      <h1 className='title'>Request A Quote</h1>
      <div className='quoteBlock'>
        <p className='salesCopy'>
          {`Shaun Shines offers bespoke detailing services to suite your vehicle needs.

To schedule service please enter your vehicle details, detailing service and provide desired date or availabilty in comments.`}
        </p>
        <div className='form-container'>
          <form
            className='quoteForm'
            onSubmit={handleSubmit(quoteRequestSubmit)}>
            <label htmlFor='name'>Contact Full Name</label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Speed Racer'
              {...register('name', { required: true })}
            />
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='yourname@email.com'
              {...register('email', { required: true })}
            />
            <label htmlFor='phone'>Phone Number</label>
            <input
              type='phone'
              id='phone'
              name='phone'
              placeholder='757-000-0000'
              {...register('phone', { required: true })}
            />
            <label htmlFor='carYear'>Vehicle Year</label>
            <input
              type='number'
              id='carYear'
              name='carYear'
              placeholder='2020'
              {...register('carYear', { required: true })}
            />
            <label htmlFor='carMake'>Vehicle Make</label>
            <input
              type='text'
              id='carMake'
              name='carMake'
              placeholder='Subaru'
              {...register('carMake', { required: true })}
            />
            <label htmlFor='carModel'>Vehicle Model</label>
            <input
              type='text'
              id='carModel'
              name='carModel'
              placeholder='WRX'
              {...register('carModel', { required: true })}
            />
            <label htmlFor='carTrim'>Vehicle Trim</label>
            <input
              type='text'
              id='carTrim'
              name='carTrim'
              placeholder='STI'
              {...register('carTrim', { required: true })}
            />
            <label htmlFor='service'>Service Requested</label>
            <select
              name='service'
              id='service'
              {...register('service', { required: true })}>
              <option value='Select a Service'>Select a Service</option>
              <option value='Make it Shine'>Make it Shine</option>
              <option value='Exterior'>Exterior</option>
              <option value='Interior'>Interior</option>
              <option value='Vinyl Wrap'>Vinyl Wrap</option>
              <option value='Custom'>Custom</option>
            </select>
            <label htmlFor='comments'>Desired Time & Comments</label>
            <textarea
              id='comments'
              name='comments'
              rows='4'
              cols='60'
              placeholder='I would like to ...'
              {...register('comments', { required: true })}
            />
            <button type='submit' className='submitRequest'>
              Request Quote
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Schedule;
