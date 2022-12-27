import './App.css';
import Create from './components/Create';
import Login from './components/Login';
import Update from './components/Update';
import Read from './components/Read';
import Delete from './components/Delete'


import {Routes, Route} from 'react-router-dom'
// import { List } from 'semantic-ui-react';
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