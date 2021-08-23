import React from "react";
import {List,Button, Image } from "semantic-ui-react";


const CartComponent = ({ title, id, price, image, removeFromCart}) => (
  <List selection divided verticalAlign="middle">
      <List.Item>
      <List.Content floated="right">
        <Button onClick={removeFromCart.bind(this, id)} color="red">
          Удалить
        </Button>
      </List.Content>
      <Image avatar src={image} />
      <List.Content>{title}</List.Content>
      <List.Content>{price}</List.Content>
    </List.Item>
  </List>

);

export default CartComponent;