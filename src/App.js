import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddDosen from './components/AddDosen';
import AddMahasiswa from './components/AddMahasiswa';
import Dashboard from './components/Dashboard';
import DosenList from './components/DosenList';
import EditDosen from './components/EditDosen';
import EditMahasiswa from './components/EditMahasiswa';
import MahasiswaList from './components/MahasiswaList';
import SelectDatas from './components/SelectDatas';

function App() {
  return (
    <div className='App'>
      <Container className='pt-5'>
        <SelectDatas />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/mahasiswa' element={<MahasiswaList />} />
          <Route path='/mahasiswa/edit/:id' element={<EditMahasiswa />} />
          <Route path='/mahasiswa/add' element={<AddMahasiswa />} />
          <Route path='/dosen' element={<DosenList />} />
          <Route path='/dosen/edit/:id' element={<EditDosen />} />
          <Route path='/dosen/add' element={<AddDosen />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
