import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { servicesCollection } from '../firebase';

const Form = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const storage = getStorage();
      const storageRef = ref(storage, `images/${formData.image.name}`);
      await uploadBytes(storageRef, formData.image);

      const docRef = await addDoc(servicesCollection, {
        title: formData.title,
        description: formData.description,
        imageUrl: `gs://cleaningcompany-a6926.appspot.com/images/${formData.image.name}`
      });

      console.log('Document written with ID: ', docRef.id);

      setFormSubmitted(true);
      setFormData({
        title: '',
        description: '',
        image: null
      });
    } catch (error) {
      console.error('Error saving form data: ', error);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      {formSubmitted ? (
        <div className="text-center text-green-500 font-semibold">Form submitted successfully!</div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              name="title"
              placeholder="Enter title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              name="description"
              placeholder="Enter description"
              value={formData.description}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
              Image
            </label>
            <input
              type="file"
              accept="image/*"
              name="image"
              id="image"
              onChange={handleImageUpload}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Form;
