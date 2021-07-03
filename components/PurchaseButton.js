const PurchaseButton = props => {
  return (
    <div className='addService'>
      <p className='displayEstimate'>$$$$${props.estimate}</p>
      <button className='addToCart'>Add to cart</button>
    </div>
  );
};

export default PurchaseButton;
