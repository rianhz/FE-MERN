import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const EditDosen = () => {
  const [nama, setNama] = useState('');
  const [nik, setNik] = useState('');
  const [mata_kuliah, setMata_kuliah] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    searchPerson();
    console.log(id);
  }, []);

  const searchPerson = () => {
    axios.get(`http://localhost:5000/dosen/search/${id}`).then((res) => {
      console.log(res);
      setNama(res.data[0].nama);
      setMata_kuliah(res.data[0].mata_kuliah);
      setNik(res.data[0].nik);
    });
  };

  const saveDatas = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/dosen/edit/${id}`, {
      nama,
      nik,
      mata_kuliah,
    });

    navigate('/dosen');
  };

  return (
    <div className='pt-5'>
      <Form onSubmit={saveDatas}>
        <Form.Group className='mb-3'>
          <Form.Control type='text' placeholder='Nama' onChange={(e) => setNama(e.target.value)} value={nama} />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control type='text' placeholder='NIK' onChange={(e) => setNik(e.target.value)} value={nik} />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control type='text' placeholder='Jurusan' onChange={(e) => setMata_kuliah(e.target.value)} value={mata_kuliah} />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Save
        </Button>
      </Form>
    </div>
  );
};

export default EditDosen;
