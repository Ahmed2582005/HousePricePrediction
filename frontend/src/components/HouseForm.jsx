import { useState } from "react";
import API from "../services/api";

function HouseForm({ setPrediction }) {
  
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    location_grouped: "",
    carpet_area_sqft: "",
    super_area_sqft: "",
    plot_area_sqft: "",
    Bathroom: "",
    Balcony: "",
    "Car Parking": "",
    floor_num: "",
    Furnishing: "",
    Transaction: "",
    Ownership: "",
    Status: "",
    facing: "",
    overlooking: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // إرسال البيانات إلى الـ Backend
  const handleSubmit = async (e) => {
  e.preventDefault();


  // التأكد إن البيانات موجودة
  if (
    !formData.location_grouped ||
    !formData.carpet_area_sqft ||
    !formData.Bathroom
  ) {
    alert("Please fill the required fields");
    return;
  }


  try {

    setLoading(true);


    const response = await API.post("/predict", {

      ...formData,

      carpet_area_sqft: Number(formData.carpet_area_sqft),
      super_area_sqft: Number(formData.super_area_sqft),
      plot_area_sqft: Number(formData.plot_area_sqft),
      Bathroom: Number(formData.Bathroom),
      Balcony: Number(formData.Balcony),
      "Car Parking": Number(formData["Car Parking"]),
      floor_num: Number(formData.floor_num),

    });


    setPrediction(response.data.predicted_price);


  } catch(error){

    console.error(error);
    alert("Error while predicting price");


  } finally {

    setLoading(false);

  }

};

  return (
    <form onSubmit={handleSubmit}>

      <h2>House Information</h2>

      <label>
          📍 Location
      </label>
      <input
        type="text"
        name="location_grouped"
        value={formData.location_grouped}
        onChange={handleChange}
      />

      <label>
         📐 Carpet Area (sqft)
      </label>
      <input
        type="number"
        name="carpet_area_sqft"
        value={formData.carpet_area_sqft}
        onChange={handleChange}
      />

      <label>
          🏢 Super Area (sqft)
      </label>
   
      <input
        type="number"
        name="super_area_sqft"
        value={formData.super_area_sqft}
        onChange={handleChange}
      />

      <label>
         🌳 Plot Area (sqft)
      </label>
  
      <input
        type="number"
        name="plot_area_sqft"
        value={formData.plot_area_sqft}
        onChange={handleChange}
      />

      <label>
         🚿 Bathrooms
      </label>

      <input
        type="text"
        name="Bathroom"
        value={formData.Bathroom}
        onChange={handleChange}
      />

      <label>
         🌅 Balcony
      </label>

      <input
        type="number"
        name="Balcony"
        value={formData.Balcony}
        onChange={handleChange}
      />

      <label>
        🚗 Car Parking
      </label>

      <input
        type="number"
        name="Car Parking"
        value={formData["Car Parking"]}
        onChange={handleChange}
      />

      <label>
          🏬 Floor Number
      </label>
      <input
        type="number"
        name="floor_num"
        value={formData.floor_num}
        onChange={handleChange}
      />

      <label>
         🛋 Furnishing
      </label>

      <select
        name="Furnishing"
        value={formData.Furnishing}
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option value="Unfurnished">Unfurnished</option>
        <option value="Semi-Furnished">Semi-Furnished</option>
        <option value="Furnished">Furnished</option>
      </select>

      <label>
          📄 Transaction
      </label>
      <select
        name="Transaction"
        value={formData.Transaction}
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option value="Resale">Resale</option>
        <option value="New Property">New Property</option>
        <option value="Other">Other</option>
        <option value="Rent/Lease">Rent/Lease</option>
      </select>

      <label>
         👤 Ownership
      </label>

      <select
        name="Ownership"
        value={formData.Ownership}
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option value="Freehold">Freehold</option>
        <option value="Co-operative Society">Co-operative Society</option>
        <option value="Power Of Attorney">Power Of Attorney</option>
        <option value="Leasehold">Leasehold</option>
      </select>

      <label>
         🏠 Status
      </label>
      <select
        name="Status"
        value={formData.Status}
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option value="Ready to Move">Ready to Move</option>
      </select>
      <label>
          🧭 Facing
      </label>

      <input
        type="text"
        name="facing"
        value={formData.facing}
        onChange={handleChange}
      />

      <label>
         🌳 Overlooking
      </label>
      <input
        type="text"
        name="overlooking"
        value={formData.overlooking}
        onChange={handleChange}
      />

      <br />
      <br />


<button
 type="button"
 className="reset"
 onClick={() => {
   setFormData({
    location_grouped:"",
    carpet_area_sqft:"",
    super_area_sqft:"",
    plot_area_sqft:"",
    Bathroom:"",
    Balcony:"",
    "Car Parking":"",
    floor_num:"",
    Furnishing:"",
    Transaction:"",
    Ownership:"",
    Status:"",
    facing:"",
    overlooking:""
   });

   setPrediction(null);

 }}
>
 🔄 Reset
</button>
      <button type="submit">

{
 loading 
 ?
 "⏳ Predicting..."
 :
 "🚀 Predict Price"
}

</button>
      
    </form>
  );
}

export default HouseForm;