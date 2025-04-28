import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Produtos from './pages/Produtos';
import Clientes from './pages/Clientes';
import Fornecedores from './pages/Fornecedores';
import Transacoes from './pages/Transacoes';
import Pedidos from './pages/Pedidos';
import Usuarios from './pages/Usuarios';
import Layout from './components/Layout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/produtos" replace />} />
        <Route path="/produtos" element={<Layout><Produtos /></Layout>} />
        <Route path="/clientes" element={<Layout><Clientes /></Layout>} />
        <Route path="/fornecedores" element={<Layout><Fornecedores /></Layout>} />
        <Route path="/transacoes" element={<Layout><Transacoes /></Layout>} />
        <Route path="/pedidos" element={<Layout><Pedidos /></Layout>} />
        <Route path="/usuarios" element={<Layout><Usuarios /></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;