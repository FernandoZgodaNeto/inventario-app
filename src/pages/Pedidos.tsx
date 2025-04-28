const Pedidos = () => {
  const orders = [
    { id: 1, date: '25/04/2025', client: 'João da Silva', status: 'Pendente', total: 500.00 },
    { id: 2, date: '26/04/2025', client: 'Maria Oliveira', status: 'Concluído', total: 1200.00 },
  ];

  return (
    <div>
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-2 mb-4">

        <div className="input-group w-100 w-md-25">
          <span className="input-group-text"><i className="fas fa-search"></i></span>
          <input
            type="text"
            className="form-control"
            placeholder="Pesquisar por cliente..."
          />
        </div>

        <div className="input-group w-100 w-md-25">
          <span className="input-group-text"><i className="fas fa-filter"></i></span>
          <select
            className="form-select"
          >
            <option value="">Filtrar por status</option>
            <option value="Pendente">Pendente</option>
            <option value="Concluído">Concluído</option>
          </select>
        </div>

        <div className="d-flex">
          <button className="btn btn-success me-2">
            <i className="fas fa-plus"></i>
          </button>
          <button className="btn btn-danger">
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>

      </div>

      <table className="table">
        <thead>
          <tr>
            <th><input className="form-check-input" type="checkbox" /></th>
            <th>ID</th>
            <th>Data</th>
            <th>Cliente</th>
            <th>Status</th>
            <th>Total</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {orders
            .map(order => (
              <tr key={order.id}>
                <th scope="row">
                  <input
                    className="form-check-input"
                    type="checkbox"
                  />
                </th>
                <td>{order.id}</td>
                <td>{order.date}</td>
                <td>{order.client}</td>
                <td>
                  <span className={`badge ${order.status === 'Pendente' ? 'bg-warning text-dark' : 'bg-success'}`}>
                    {order.status}
                  </span>
                </td>
                <td>R$ {order.total.toFixed(2)}</td>
                <td>
                  <button className="btn btn-primary btn-sm me-2">
                    <i className="fas fa-eye"></i>
                  </button>
                  <button className="btn btn-danger btn-sm">
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pedidos;