import React from 'react';
import axios from 'axios';

function DownloadButton({ params }) {
  const downloadXml = async () => {
    try {
      const response = await axios.get('/cars/xml', { params, responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/xml' }));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'cars.xml');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error downloading XML:', error);
    }
  };

  return <button onClick={downloadXml}>Download Results as XML</button>;
}

export default DownloadButton;