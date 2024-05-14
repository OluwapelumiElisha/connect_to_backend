import { Button } from '@/components/ui/button'
import React, { useState } from 'react';
import axios from 'axios';

const CreatePDFs = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!file) 
     return ('Please select a file.');
    
      
    

    const formData = new FormData();
    formData.append('pdf', file);

    try {
      const response = await axios.post('http://localhost:4002/uploadPdf', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('File uploaded successfully:', response.data.url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Upload PDF</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".pdf" onChange={handleFileChange} /> <br /> <br />
        <Button type="submit">Upload</Button>
      </form>
    </div>
  );
};

export default CreatePDFs;
