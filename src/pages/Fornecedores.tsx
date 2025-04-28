const Fornecedores = () => {

  const suppliers = [
    { id: 1, name: 'Empresa 1 LTDA', cnpj: '11.111.111/1111-11', contact: '(45) 99999-9999', address: 'Rua 1, Bairro Azul, Cascavel-PR' },
    { id: 2, name: 'Empresa 2 LTDA', cnpj: '22.222.222/2222-22', contact: '(45) 98888-8888', address: 'Rua 2, Bairro Verde, Cascavel-PR' },
  ];

  return (
    <div>
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-2 mb-4">

        <div className="input-group w-100 w-md-25">
          <span className="input-group-text"><i className="fas fa-search"></i></span>
          <input
            type="text"
            className="form-control"
            placeholder="Pesquisar por nome..."
          />
        </div>

        <div className="input-group w-100 w-md-25">
          <span className="input-group-text"><i className="fas fa-search"></i></span>
          <input
            type="text"
            className="form-control"
            placeholder="Pesquisar por contato..."
          />
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
            <th>
              <input className="form-check-input" type="checkbox" />
            </th>
            <th>ID</th>
            <th>Nome</th>
            <th>CNPJ</th>
            <th>Contato</th>
            <th>Endereço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {suppliers
            .map((supplier) => (
              <tr key={supplier.id}>
                <th scope="row">
                  <input
                    className="form-check-input"
                    type="checkbox"
                  />
                </th>
                <td>{supplier.id}</td>
                <td>{supplier.name}</td>
                <td>{supplier.cnpj}</td>
                <td>{supplier.contact}</td>
                <td>{supplier.address}</td>
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

export default Fornecedores;