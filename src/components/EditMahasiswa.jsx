import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const EditMahasiswa = () => {
  const [nama, setNama] = useState('');
  const [nim, setNim] = useState('');
  const [jurusan, setJurusan] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    searchPerson();
  }, []);

  const searchPerson = () => {
    axios.get(`http://localhost:5000/mahasiswa/searchId/${id}`).then((res) => {
      setNama(res.data[0].nama);
      setJurusan(res.data[0].jurusan);
      setNim(res.data[0].nim);
    });
  };

  const saveDatas = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/mahasiswa/edit/${id}`, {
      nama,
      nim,
      jurusan,
    });

    navigate('/mahasiswa');
  };

  return (
    <div className='pt-5'>
      <Form onSubmit={saveDatas}>
        <Form.Group className='mb-3'>
          <Form.Control type='text' placeholder='Nama' onChange={(e) => setNama(e.target.value)} value={nama} />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control type='text' placeholder='NIM' onChange={(e) => setNim(e.target.value)} value={nim} />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control type='text' placeholder='Jurusan' onChange={(e) => setJurusan(e.target.value)} value={jurusan} />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Save
        </Button>
      </Form>
    </div>
  );
};

export default EditMahasiswa;
