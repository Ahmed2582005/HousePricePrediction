function PredictionResult({ price }) {

  return (

    <div className={`result ${price ? "show" : ""}`}>

      <h2>
        💰 Predicted Price
      </h2>


      {price && (

        <h3>
          ₹ {price.toLocaleString()}
        </h3>

      )}

    </div>

  );
}


export default PredictionResult;