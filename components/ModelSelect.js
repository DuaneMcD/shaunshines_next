import Select from 'react-select';

const ModelSelect = props => {
  return (
    <Select
      className='selectModel'
      placeholder='Select Vehicle Model'
      models={props.models}
      options={props.models.map(model => ({
        label: model.Model,
        value: model.Model,
      }))}
      onChange={e => {
        props.function(e.value);
      }}
    />
  );
};

export default ModelSelect;
