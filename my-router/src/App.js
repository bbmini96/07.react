import { Route, Routes } from 'react-router-dom';
import './App.css';
import { About, Home, Service, History, Location, Events, Products, NotFoundPage } from './components/Components';

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
        <Route path='events' element={<Events />} />

        {/* import!! */}
        {/* QueryString: /products?productId=?? */}
        <Route path='products' element={<Products />} />
        {/* URL Parameter: /products/1 */}
        <Route path='products/:urlProductId' element={<Products />} />

        <Route path='/*' element={<NotFoundPage />} />


      </Routes>
    </div>
  );
}

export default App;
