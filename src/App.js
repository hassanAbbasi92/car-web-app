import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CarSearchForm from './CarSearchForm';
import CarList from './CarList';
import DownloadButton from './DownloadButton';

function App() {
  const [cars, setCars] = useState([]);
  const [searchParams, setSearchParams] = useState({ length: '', weight: '', velocity: '', color: '' });

  useEffect(() => {
    // Fetch all cars when the component mounts
    const fetchCars = async () => {
      try {
        const response = await axios.get('/cars');
        setCars(response.data);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };

    fetchCars();
  }, []);

  const searchCars = async (params) => {
    try {
      const response = await axios.get('/cars', { params });
      setCars(response.data);
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };

  const handleSearch = (params) => {
    setSearchParams(params);
    searchCars(params);
  };

  return (
    <div className="App">
      <h1>Car Search Application</h1>
      <CarSearchForm onSearch={handleSearch} />
      <CarList cars={cars} />
      <DownloadButton params={searchParams} />
    </div>
  );
}

export default App;
