import './App.css';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import Navigation from './components/Navigation'
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Navigation />}/>
        <Route path='/signup' element={<SignUpPage />}/>
        <Route path='/signin' element={<SignInPage />}/>
      </Routes>
    </div>
  );
}

export default App;
