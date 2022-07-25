import logoImg from "../../assets/Logo.svg"
import { Container } from "./styles"
import { Content } from "./styles"

export function Header(){
  return(
    <Container>
      <Content>
      <img src={logoImg}alt="Finance App" />
      <button>Nova transação</button>
      </Content>
    </Container>
  )
}