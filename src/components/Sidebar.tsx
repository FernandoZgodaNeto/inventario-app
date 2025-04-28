import { useState } from 'react';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <aside id="sidebar" className={`${isExpanded ? 'expand' : ''}`}>
      <div className="sidebar-header d-flex flex-column p-4">
        <div className="sidebar-logo d-flex justify-between items-center">
          <a href="#" className="text-green-400 font-bold text-xl">Inventário</a>
        </div>
      </div>

      <ul className="sidebar-nav">
        <li className="sidebar-item">
          <a href="/produtos" className="sidebar-link">
            <i className="fas fa-boxes"></i>
            <span className={`${isExpanded ? '' : 'hidden'}`}>Produtos</span>
          </a>
        </li>
        <li className="sidebar-item">
          <a href="/clientes" className="sidebar-link">
            <i className="fas fa-users"></i>
            <span className={`${isExpanded ? '' : 'hidden'}`}>Clientes</span>
          </a>
        </li>
        <li className="sidebar-item">
          <a href="/fornecedores" className="sidebar-link">
            <i className="fas fa-truck"></i>
            <span className={`${isExpanded ? '' : 'hidden'}`}>Fornecedores</span>
          </a>
        </li>
        <li className="sidebar-item">
          <a href="/pedidos" className="sidebar-link">
            <i className="fas fa-shopping-cart"></i>
            <span className={`${isExpanded ? '' : 'hidden'}`}>Pedidos</span>
          </a>
        </li>
        <li className="sidebar-item">
          <a href="/transacoes" className="sidebar-link">
            <i className="fas fa-exchange-alt"></i>
            <span className={`${isExpanded ? '' : 'hidden'}`}>Transações</span>
          </a>
        </li>
        <li className="sidebar-item">
          <a href="/usuarios" className="sidebar-link">
            <i className="fas fa-user-cog"></i>
            <span className={`${isExpanded ? '' : 'hidden'}`}>Usuários</span>
          </a>
        </li>
      </ul>

      <div className="sidebar-footer">
        <a href="/" className="sidebar-link">
          <i className="fas fa-sign-out-alt"></i>
          <span className={`${isExpanded ? '' : 'hidden'}`}>Sair</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;