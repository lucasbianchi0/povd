import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import "./CardProduct.css"

const CardProduct = ({data}) => (
  <Card className="producto-stili">
    <Image src={data.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{data.title}</Card.Header>
      <Card.Meta>
        <span className='date'>{data.category}</span>
      </Card.Meta>
      <Card.Description>
        {data.price}
      </Card.Description>
    </Card.Content>

  </Card>
)

export default CardProduct