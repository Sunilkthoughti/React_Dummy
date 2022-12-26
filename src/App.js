import './App.css';
import Create from './components/Create';
import Login from './components/Login';
import Read from './components/Read';
import Update from './components/Update';
import Delete from './components/Delete'

// import Login from './components/Login'
import {Routes, Route} from 'react-router-dom'
function Home() {
  return(
    <div>hello</div>
  )

}
function App() {
  return (
    
    <div className="main">
    <Routes>
      
        <Route path='/' element={<Home/>} />
        <Route  path='/create' element={<Create/>} />
        <Route path='/update' element={<Update/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/read' element={<Read/>} />
        <Route path='/delete' element={<Delete/>} />
        {/* <Route path='/Login' element={<Login />} /> */}
        {/* <h2 className="main-header">React Crud Operations</h2>
        <div>
          <Route  path='/create' element={<Create/>} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route  path='/Read' element={<Read/>} />
        </div>

        <Route path='/Udate' element={<Update/>} /> */}
    
    </Routes>
    </div>
  
  );
}

export default App;