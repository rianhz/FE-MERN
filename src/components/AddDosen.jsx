import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddDosen = () => {
  const [nama, setNama] = useState('');
  const [nik, setNik] = useState('');
  const [mata_kuliah, setMata_kuliah] = useState('');
  const navigate = useNavigate();

  const addDosen = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/dosen/add', {
      nama,
      nik,
      mata_kuliah,
    });

    navigate('/dosen');
  };
  return (
    <div className='pt-5'>
      <Form onSubmit={addDosen}>
        <Form.Group className='mb-3'>
          <Form.Control type='text' placeholder='Nama' onChange={(e) => setNama(e.target.value)} value={nama} />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control type='text' placeholder='NIK' onChange={(e) => setNik(e.target.value)} value={nik} />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control type='text' placeholder='Mata Kuliah' onChange={(e) => setMata_kuliah(e.target.value)} value={mata_kuliah} />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Add
        </Button>
      </Form>
    </div>
  );
};

export default AddDosen;
