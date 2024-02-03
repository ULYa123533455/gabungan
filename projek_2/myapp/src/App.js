import React from 'react';
import './App.css';
import ProjectPage from './component/ProjectPage';
import ProjectsPage from './component/ProjectsPage';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import HomePage from "./component/home/HomePage"

function App() {
  // const[data, setData]=useState([])

  // useEffect(()=>{
  //   fetch("http://localhost:3001/projects")
  //   .then((res) => res.json())
  //   .then((json) => setData(json))
  // },[])

  return (
    <BrowserRouter>
    <header className='sticky'>
      <span className='logo'>
        
      </span>

      <img src="assets/nadim.jpeg" alt='logo' width='29' height="99" />

      <NavLink to='/' className="button rounded">
        <span className='icon-home'></span>
        Home
      </NavLink>

      <NavLink to='/projects' className="button rounded">
        20 universitas swasta terbaik
      </NavLink>
    </header>

    <div className='container'>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="projects" element={<ProjectsPage/>}/>
        <Route path="projects/:id" element={<ProjectPage/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    // <div className="row">
      
      
    //         {data.map(item =>(
    //             <figure className="card">
    //                 <p>{item.id}</p>
    //                 <img src={item.imageUrl} alt="" />
    //                 <p>Nama : {item.name}</p>
    //                 <p>Deskripsi : {item.description}</p>
    //                 <p>Tanggal :{item.contractSignedOn}</p>
    //                 <p>Budget : {item.budget}</p>
    //             </figure>
    //         ))}
    
    // </div>
  );
}

export default App;
