import LoginForm from '../LoginForm/LoginForm';
import InicioForm from '../InicioForm/InicioForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path='/login' element={<LoginForm />} />
          <Route path='/inicio' element={<InicioForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
