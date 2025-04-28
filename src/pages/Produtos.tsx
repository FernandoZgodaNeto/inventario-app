const Produtos = () => {

  const products = [
    { id: 1, name: 'Caneta', price: 2.00, quantity: 50, image: 'assets/images/produtos/caneta.jpg' },
    { id: 2, name: 'Borracha', price: 1.50, quantity: 30, image: 'assets/images/produtos/borracha.jpg' },
    { id: 3, name: 'Lápis', price: 1.80, quantity: 42, image: 'assets/images/produtos/lapis.jpg' },
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
            <i className="fas fa-dollar-sign"></i>
          </span>
          <select 
            id="filterPreco" 
            className="form-select" 
          >
            <option value="">Filtrar por Preço</option>
            <option value="menor">Menor Preço</option>
            <option value="maior">Maior Preço</option>
          </select>
        </div>

        <div className="input-group w-100 w-md-25">
          <span className="input-group-text">
            <i className="fas fa-truck"></i>
          </span>
          <select 
            id="filterFornecedor" 
            className="form-select" 
          >
            <option value="">Filtrar por Fornecedor</option>
            <option value="fornecedorA">Fornecedor A</option>
            <option value="fornecedorB">Fornecedor B</option>
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
            <th scope="col">Imagem</th>
            <th scope="col">Nome</th>
            <th scope="col">Descrição</th>
            <th scope="col">Preço</th>
            <th scope="col">Quantidade</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <th scope="row">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  value="" 
                />
              </th>
              <td>{product.id}</td>
              <td>
                <img src={product.image} alt={product.name} width="50" height="50" />
              </td>
              <td>{product.name}</td>
              <td>-</td>
              <td>R$ {product.price.toFixed(2)}</td>
              <td>{product.quantity}</td>
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

export default Produtos;