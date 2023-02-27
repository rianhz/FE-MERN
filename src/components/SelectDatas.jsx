import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SelectDatas = () => {
  return (
    <div>
      <div className='welcome'>
        <h2>Selamat datang, admin</h2>
      </div>

      <Dropdown>
        <Dropdown.Toggle variant='success' id='dropdown-basic'>
          Pilih Data
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>
            <Link to='/mahasiswa'>Mahasiswa</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to='/dosen'>Dosen</Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default SelectDatas;
