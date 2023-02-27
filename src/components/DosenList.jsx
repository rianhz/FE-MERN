import React, { useEffect, useState } from 'react';
import { Form, Table } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { IoMdAddCircleOutline } from 'react-icons/io';

const DosenList = () => {
  const [datas, setDatas] = useState([]);
  const [inputText, setInputText] = useState('');
  useEffect(() => {
    if (inputText.length > 2) {
      searchDatas();
    } else {
      axios.get('http://localhost:5000/dosen').then((response) => setDatas(response.data));
    }
  }, [datas]);
  const searchDatas = async () => {
    const newDatas = await axios.get(`http://localhost:5000/dosen/searchName/${inputText}`).then((res) => res.data);
    setDatas(newDatas);
  };

  const deleteDosen = async (ids) => {
    await axios.delete(`http://localhost:5000/dosen/delete/${ids}`);
  };
  return (
    <div className='dosen'>
      <div className='header-wrapper'>
        <h4>Dosen</h4>
        <div className='button-wrapper'>
          <Link to='/dosen/add' id='adding'>
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
            <th>ID</th>
            <th>Nama</th>
            <th>NIK</th>
            <th>Mata Kuliah</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((el, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{el.nama}</td>
                <td>{el.nik}</td>
                <td>{el.mata_kuliah}</td>
                <td style={{ display: 'flex', gap: '5px' }}>
                  <Link to={`/dosen/edit/${el.id}`} className='btn btn-primary' id='edits'>
                    Edit
                  </Link>
                  <Link className='btn btn-secondary' id='deletes' onClick={() => deleteDosen(el.id)}>
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

export default DosenList;
