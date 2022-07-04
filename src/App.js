import './App.css';
import LogProvider from './context/LogContext';
import ThemeProvider from './context/ThemeContext';
import Router from './router/Router';

function App() {
  return (
    <LogProvider>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </LogProvider>
  );
}

export default App;
