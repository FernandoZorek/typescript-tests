// Define the API interface: https://api.origamid.dev/json/notebook.json and show the data on the screen.
// async function fetchProduct() {
//     const response = await fetch('https://api.origamid.dev/json/notebook.json');
//     const data = await response.json();
//     showProduct(data);
//   }
//   fetchProduct();
//   function showProduct(data) {
//     document.body.innerHTML = `
//       <div>
//         <h2>${data.name}</h2>
//       </div>
//     `;
//   }

interface Company {
    nome: string,
    fundacao: number,
    pais: string
}

interface Product {
    nome: string,
    preco: number,
    descricao: string,
    garantia: number,
    seguroAcidentes: boolean,
    empresaFabricante: Company,
    empresaMontadora: Company
}

async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    showProduct(data);
}

fetchProduct();
function showProduct(data: Product) {
    document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
      <p>R$ ${data.preco}</p>
      <div>
        <h3>Manufacturer: ${data.empresaFabricante.nome}</h3>
      </div>
      <div>
        <h3>Automaker: ${data.empresaMontadora.nome}</h3>
      </div>
    </div>
    `;
}
