const Sidebar = () => {

  return (
    <aside id="sidebar" className='expand'>
      <div className="sidebar-header d-flex flex-column p-4">
        <div className="sidebar-logo d-flex justify-between items-center">
          <a href="#" className="text-green-400 font-bold text-xl">Inventário</a>
        </div>
      </div>

      <ul className="sidebar-nav">
        <li className="sidebar-item">
          <a href="/produtos" className="sidebar-link">
            <i className="fas fa-boxes"></i>
            <span className=''>Produtos</span>
          </a>
        </li>
        <li className="sidebar-item">
          <a href="/clientes" className="sidebar-link">
            <i className="fas fa-users"></i>
            <span className=''>Clientes</span>
          </a>
        </li>
        <li className="sidebar-item">
          <a href="/fornecedores" className="sidebar-link">
            <i className="fas fa-truck"></i>
            <span className=''>Fornecedores</span>
          </a>
        </li>
        <li className="sidebar-item">
          <a href="/pedidos" className="sidebar-link">
            <i className="fas fa-shopping-cart"></i>
            <span className=''>Pedidos</span>
          </a>
        </li>
        <li className="sidebar-item">
          <a href="/transacoes" className="sidebar-link">
            <i className="fas fa-exchange-alt"></i>
            <span className=''>Transações</span>
          </a>
        </li>
        <li className="sidebar-item">
          <a href="/usuarios" className="sidebar-link">
            <i className="fas fa-user-cog"></i>
            <span className=''>Usuários</span>
          </a>
        </li>
      </ul>

      <div className="sidebar-footer">
        <a href="/" className="sidebar-link">
          <i className="fas fa-sign-out-alt"></i>
          <span className=''>Sair</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;