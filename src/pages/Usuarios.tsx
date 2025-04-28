const Usuarios = () => {

  const usuarios = [
    { id: 1, nome: 'Fernando Zgoda', email: 'fernandozgoda@gmail.com', tipo: 'Admin' },
    { id: 2, nome: 'Joao Alberto', email: 'joaoalberto@gmail.com', tipo: 'Padrão' },
  ];

  return (
    <div>
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-2 mb-4">

        <div className="input-group w-100 w-md-25">
          <span className="input-group-text"><i className="fas fa-search"></i></span>
          <input
            type="text"
            className="form-control"
            placeholder="Pesquisar por nome ou email..."
          />
        </div>

        <div className="input-group w-100 w-md-25">
          <span className="input-group-text"><i className="fas fa-filter"></i></span>
          <select
            className="form-select"
          >
            <option value="">Filtrar por tipo</option>
            <option value="Admin">Admin</option>
            <option value="Padrão">Padrão</option>
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
            <th>Nome</th>
            <th>Email</th>
            <th>Tipo</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {usuarios
            .map(usuario => (
              <tr key={usuario.id}>
                <th scope="row">
                  <input
                    className="form-check-input"
                    type="checkbox"
                  />
                </th>
                <td>{usuario.id}</td>
                <td>{usuario.nome}</td>
                <td>{usuario.email}</td>
                <td>
                  <span className={`badge ${usuario.tipo === 'Admin' ? 'bg-success' : 'bg-primary'}`}>
                    {usuario.tipo}
                  </span>
                </td>
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

export default Usuarios;