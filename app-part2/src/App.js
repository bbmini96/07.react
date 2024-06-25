import logo from './logo.svg';
import './App.css';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SigninPage';

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
