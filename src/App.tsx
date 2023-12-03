import { Routes, Route, Link } from 'react-router-dom';
import { ControledForm } from './components/ControledForm';
import { YupReactHookFotm } from './components/YupFotm';
import { Home } from './components/Home';

export function App() {
  return (
    <>
      <header className="header-form">
        <Link to="/">Home</Link>
        <Link to="/controled">ControledForm</Link>
        <Link to="/yup">YupReactHookFotm</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/controled" element={<ControledForm />} />
        <Route path="/yup" element={<YupReactHookFotm />} />
      </Routes>
    </>
  );
}
