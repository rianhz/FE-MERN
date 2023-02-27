import React, { useEffect, useState } from 'react';
import { Form, Table } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { IoMdAddCircleOutline } from 'react-icons/io';

const MahasiswaList = () => {
  const [datas, setDatas] = useState([]);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    if (inputText.length > 2) {
      searchDatas();
    } else {
      axios.get('http://localhost:5000/mahasiswa').then((response) => setDatas(response.data));
    }
  }, [datas]);

  const searchDatas = async () => {
    const newDatas = await axios.get(`http://localhost:5000/mahasiswa/searchName/${inputText}`).then((res) => res.data);
    setDatas(newDatas);
  };

  const deleteDatas = async (ids) => {
    await axios.delete(`http://localhost:5000/mahasiswa/delete/${ids}`);
  };
  return (
    <div className='mahasiswa'>
      <div className='header-wrapper'>
        <h4>Mahasiswa</h4>
        <div className='button-wrapper'>
          <Link to='/mahasiswa/add' id='adding'>
            <IoMdAddCircleOutline style={{ fontSize: '20px' }} /> Add
          </Link>
        </div>
      </div>
      <Form className='d-flex pb-3'>
        <Form.Control type='search' placeholder='Search' className='me-2' aria-label='Search' onChange={(e) => setInputText(e.target.value)} />
      </Form>
      <Table striped bordered hover variant='dark'>
        <thead>
          <tr>
            <th>No.</th>
            <th>Nama</th>
            <th>NIM</th>
            <th>Jurusan</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((el, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{el.nama}</td>
                <td>{el.nim}</td>
                <td>{el.jurusan}</td>
                <td style={{ display: 'flex', gap: '5px' }}>
                  <Link to={`/mahasiswa/edit/${el.id}`} className='btn btn-primary' id='edits'>
                    Edit
                  </Link>
                  <Link onClick={() => deleteDatas(el.id)} className='btn btn-secondary' id='deletes'>
                    Delete
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default MahasiswaList;
