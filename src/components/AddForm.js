import React, { useState } from 'react';

function AddForm({onAddButton}) {
  // Intitial form variable
  const initialForm = {
    description: '',
    image: '',
    location: ''
  }

  // React state(s)
  const [formData, setFormData] = useState(initialForm);

  // formData destructured
  const {description, image, location} = formData;

  // Event Handler: Make each text box a controlled input
  function handleAddFormChange(e) {
    console.log('handleChange');
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  // Event Handler: Submit click => backend
  function handleFormSubmit(e) {
    e.preventDefault();

    fetch('http://localhost:6001/listings', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => onAddButton(data))

    setFormData(initialForm);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label>Description: </label>
      <input
        type='text'
        name='description'
        value={description}
        placeholder='Enter Description'
        onChange={handleAddFormChange}
      />
      <label>Image: </label>
      <input
        type='text'
        name='image'
        value={image}
        placeholder='Enter Image URL'
        onChange={handleAddFormChange}
      />
      <label>Location: </label>
      <input
        type='text'
        name='location'
        value={location}
        placeholder='Enter Location'
        onChange={handleAddFormChange}
      />
      <button style={{cursor: 'pointer'}}>Submit</button>
    </form>
  )
}

export default AddForm;