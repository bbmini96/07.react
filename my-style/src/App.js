
import './App.css';
import Style from './components/Style';
import { GlobalStyle, Style2, theme } from './components/Style2';
import { ThemeProvider } from 'styled-components';


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <GlobalStyle />

      {/* <Style /> */}
      <Style2 />
      </ThemeProvider>
    </div>
    
  )
}

export default App;
