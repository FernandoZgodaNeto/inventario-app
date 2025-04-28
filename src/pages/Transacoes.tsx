const Transacoes = () => {

  const transacoes = [
    { id: 1, date: '25/04/2025', tipo: 'Entrada', valor: 500.00, produto: 'Caneta', pedido: 101 },
    { id: 2, date: '26/04/2025', tipo: 'Saída', valor: 1000.00, produto: 'Lápis', pedido: 102 },
  ];

  return (
    <div>
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-2 mb-4">

        <div className="input-group w-100 w-md-25">
          <span className="input-group-text"><i className="fas fa-search"></i></span>
          <input
            type="text"
            className="form-control"
            placeholder="Pesquisar por produto ou pedido..."
          />
        </div>

        <div className="input-group w-100 w-md-25">
          <span className="input-group-text"><i className="fas fa-filter"></i></span>
          <select
            className="form-select"
          >
            <option value="">Filtrar por tipo</option>
            <option value="Entrada">Entrada</option>
            <option value="Saída">Saída</option>
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
            <th>Tipo</th>
            <th>Valor</th>
            <th>Produto</th>
            <th>Pedido</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {transacoes
            .map(transacao => (
              <tr key={transacao.id}>
                <th scope="row">
                  <input
                    className="form-check-input"
                    type="checkbox"
                  />
                </th>
                <td>{transacao.id}</td>
                <td>{transacao.date}</td>
                <td>
                  <span className={`badge ${transacao.tipo === 'Entrada' ? 'bg-success' : 'bg-danger'}`}>
                    {transacao.tipo}
                  </span>
                </td>
                <td>R$ {transacao.valor.toFixed(2)}</td>
                <td>{transacao.produto}</td>
                <td>{transacao.pedido}</td>
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

export default Transacoes;