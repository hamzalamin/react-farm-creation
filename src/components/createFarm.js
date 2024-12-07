import React, { useState } from "react";
import { createFarm } from "../api/farmApi";
import '../styles/FarmForm.css';

const FarmForm = () => {
  const [farmData, setFarmData] = useState({
    name: '',
    localization: '',
    surface: '',
    creationDate: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFarmData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const newFarm = await createFarm(farmData);
      console.log('Farm created successfully:', newFarm);
      setFarmData({
        name: '',
        localization: '',
        surface: '',
        creationDate: ''
      });

      setSuccessMessage('Farm created successfully.');

    } catch (error) {
      setError('Error creating farm. Please try again.');
      console.error('Error creating farm:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="farm-form-container">
      <h2>Create Farm</h2>
      <form onSubmit={handleSubmit} className="farm-form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={farmData.name}
            onChange={handleChange}
            required
            placeholder="Enter farm name"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="localization"
            value={farmData.localization}
            onChange={handleChange}
            required
            placeholder="Enter localization"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            step="any"
            name="surface"
            value={farmData.surface}
            onChange={handleChange}
            required
            placeholder="Enter surface area"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            name="creationDate"
            value={farmData.creationDate}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <button type="submit" disabled={loading} className="submit-btn">
          {loading ? 'Creating...' : 'Create Farm'}
        </button>
        {error && <p className="error-msg">{error}</p>}
        {successMessage && <p className="success-msg">{successMessage}</p>}

      </form>
    </div>
  );
};

export default FarmForm;