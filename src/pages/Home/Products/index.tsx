import { Link } from 'react-router-dom'

import Tag from '../../../components/Tags'
import Star from '../../../assets/images/star.png'
import {
  Card,
  Click,
  Description,
  Image,
  Rating,
  RatingNote,
  TagPosition,
  Title
} from './styles'

import { Comida } from '..'

export type Props = {
  titulo: string
  tipo: string
  avaliacao: string
  foto: string
  descricao: string
  item: Comida[]
}

const Product = ({ avaliacao, descricao, titulo, tipo, foto }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 195) {
      return descricao.slice(0, 195) + '...'
    }
    return descricao
  }

  return (
    <Card>
      <Image src={foto} alt={titulo} />
      <RatingNote>{avaliacao}</RatingNote>
      <TagPosition>
        <Tag key={tipo}>{tipo}</Tag>
      </TagPosition>
      <Rating src={Star} alt="Avaliação" />
      <Title>{titulo}</Title>
      <Description>{getDescricao(descricao)}</Description>
      <Link to="/categories">
        <Click type="submit">Saiba mais</Click>
      </Link>
    </Card>
  )
}

export default Product
