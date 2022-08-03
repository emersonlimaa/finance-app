import { Container } from "./styles";
import incomeImg from "../../assets/Entradas.svg"
import outcomeImg from "../../assets/Saidas.svg"
import totalImg from "../../assets/Total.svg"

export function Summary(){
  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$1000</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="Entradas" />
        </header>
        <strong>-R$300</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$700</strong>
      </div>
    </Container>
  )
}