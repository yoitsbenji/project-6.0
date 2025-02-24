import Product from '../Products'
import { Container } from '../../../styles'
import { List, Section } from './styles'

export type Props = {
  item: Food[]
}

const ProductList = ({ item }: Props) => {
  return (
    <Section>
      <Container>
        <List>
          {item.map((item) => (
            <li key={item.id}>
              <Product
                id={item.id}
                key={item.id}
                descricao={item.descricao}
                titulo={item.titulo}
                foto={item.capa}
                avaliacao={item.avaliacao}
                tipo={item.tipo}
                item={[]}
              />
            </li>
          ))}
        </List>
      </Container>
    </Section>
  )
}
export default ProductList
