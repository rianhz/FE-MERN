import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddMahasiswa = () => {
  const [nama, setNama] = useState('');
  const [nim, setNim] = useState(null);
  const [jurusan, setJurusan] = useState('');
  const navigate = useNavigate();

  const addDatas = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/mahasiswa/add', {
      nama,
      nim,
      jurusan,
    });

    navigate('/mahasiswa');
  };

  return (
    <div className='pt-5'>
      <Form onSubmit={addDatas}>
        <Form.Group className='mb-3'>
          <Form.Control type='text' placeholder='Nama' onChange={(e) => setNama(e.target.value)} value={nama} />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control type='number' placeholder='NIM' onChange={(e) => setNim(e.target.value)} value={nim} />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control type='text' placeholder='Jurusan' onChange={(e) => setJurusan(e.target.value)} value={jurusan} />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Add
        </Button>
      </Form>
    </div>
  );
};

export default AddMahasiswa;
