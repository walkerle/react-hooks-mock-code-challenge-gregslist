import React, {useState} from 'react';

function AddListingForm({onAddListing}) {
  // Initial Form Data:
  const initialForm = {
    description: '',
    image: '',
    location: ''
  }

  // React state:
  const [formData, setFormData] = useState(initialForm);

  // Event Handler: Make form a controlled input
  const handleChange = (e) => {
    // console.log('name', e.target.name);
    // console.log('value', e.target.value);
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  // Event Handler: Add listing
  function handleSubmit(e) {
    e.preventDefault();
    onAddListing(formData);
    setFormData(initialForm);
  }

  return(
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="description"
        placeholder="description"
        value={formData.description}
        onChange={(e) => handleChange(e)}
        name='description'
      />
      <input
        type="text"
        id="image"
        placeholder="image"
        value={formData.image}
        onChange={(e) => handleChange(e)}
        name='image'
      />
      <input
        type="text"
        id="location"
        placeholder="location"
        value={formData.location}
        onChange={(e) => handleChange(e)}
        name='location'
      />
      <button type="submit">🔍</button>
    </form>
  )
}

export default AddListingForm;