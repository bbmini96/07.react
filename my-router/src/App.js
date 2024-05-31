import { Route, Routes } from 'react-router-dom';
import './App.css';
import { About, Home, Service, History, Location, Events } from './components/Components';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='about' element={<About/>}>
          <Route path='service' element={<Service />}/>
          <Route path='history' element={<History />}/>
          <Route path='location' element={<Location />}/>
        </Route>
        <Route path='events' element={<Events/>} />
      </Routes>
    </div>
  );
}

export default App;
