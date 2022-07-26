import { useEffect } from "react"
import { api } from "../../services/api";
import {Container} from "./styles"

export function TransactionsTable(){
  useEffect(() => {
    api.get('transactions')
    .then(response => console.log(response.data))
  }, []);

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12000</td>
            <td>Desenvolvimento</td>
            <td>21/02/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">-R$1200</td>
            <td>Despesa</td>
            <td>20/02/2022</td>
          </tr>
          <tr>
            <td>Compra de livros</td>
            <td className="withdraw">-R$1000</td>
            <td>Despesa</td>
            <td>22/02/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}