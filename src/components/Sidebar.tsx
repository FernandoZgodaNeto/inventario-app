import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside id="sidebar" className='expand'>
      <div className="sidebar-header d-flex flex-column p-4">
        <div className="sidebar-logo d-flex justify-between items-center">
          <Link to="/" className="text-green-400 font-bold text-xl">Inventário</Link>
        </div>
      </div>

      <ul className="sidebar-nav">
        <li className="sidebar-item">
          <Link to="/produtos" className="sidebar-link">
            <i className="fas fa-boxes"></i>
            <span>Produtos</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/clientes" className="sidebar-link">
            <i className="fas fa-users"></i>
            <span>Clientes</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/fornecedores" className="sidebar-link">
            <i className="fas fa-truck"></i>
            <span>Fornecedores</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/pedidos" className="sidebar-link">
            <i className="fas fa-shopping-cart"></i>
            <span>Pedidos</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/transacoes" className="sidebar-link">
            <i className="fas fa-exchange-alt"></i>
            <span>Transações</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/usuarios" className="sidebar-link">
            <i className="fas fa-user-cog"></i>
            <span>Usuários</span>
          </Link>
        </li>
      </ul>

      <div className="sidebar-footer">
        <Link to="/" className="sidebar-link">
          <i className="fas fa-sign-out-alt"></i>
          <span>Sair</span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;