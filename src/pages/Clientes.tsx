const Clientes = () => {

  const clients = [
    { id: 1, name: 'João Silva', location: 'São Paulo', email: 'joao@gmail.com' },
    { id: 2, name: 'Maria Souza', location: 'Rio de Janeiro', email: 'maria@gmail.com' },
    { id: 3, name: 'Carlos Oliveira', location: 'Belo Horizonte', email: 'carlos@gmail.com' },
  ];

  return (
    <div>
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-2 mb-4">
        <div className="input-group w-100 w-md-25">
          <span className="input-group-text">
            <i className="fas fa-search"></i>
          </span>
          <input
            type="text"
            id="searchInput"
            className="form-control"
            placeholder="Pesquisar por nome..."
          />
        </div>

        <div className="input-group w-100 w-md-25">
          <span className="input-group-text">
            <i className="fas fa-map-marker-alt"></i>
          </span>
          <select
            id="filterLocation"
            className="form-select"
          >
            <option value="">Filtrar por Localização</option>
            <option value="São Paulo">São Paulo</option>
            <option value="Rio de Janeiro">Rio de Janeiro</option>
            <option value="Belo Horizonte">Belo Horizonte</option>
          </select>
        </div>

        <div className="d-flex">
          <button className="btn btn-success me-2" id="btnAdicionar">
            <i className="fas fa-plus"></i>
          </button>
          <button className="btn btn-danger" id="btnExcluirSelecionados">
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
              />
            </th>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">E-mail</th>
            <th scope="col">Localização</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          {clients
            .map((client) => (
              <tr key={client.id}>
                <th scope="row">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                  />
                </th>
                <td>{client.id}</td>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.location}</td>
                <td>
                  <button className="btn btn-primary btn-sm me-2">
                    <i className="fas fa-edit"></i>
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

export default Clientes;
