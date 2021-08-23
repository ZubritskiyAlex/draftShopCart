import React from "react";
import { Menu, Popup} from "semantic-ui-react";
import CartComponent from "./Cart";

const MenuComponent = ({totalPrice, count, items}) => (
    <Menu>
        <Menu.Item
          name='browse'
        >
          PlatformCreator
        </Menu.Item>
        <Menu.Item
          name='browse'
        >
          Shops
        </Menu.Item>
        <Menu.Item
          name='browse'
        >
          Create shop!
        </Menu.Item>

        <Menu.Item
          name='browse'
        >
          Create product!
        </Menu.Item>
        <Menu.Item
          name='browse'
        >
          Users
        </Menu.Item>
        <Menu.Item
          name='browse'
        >
          About
        </Menu.Item>


        <Menu.Item
          name='submit'
        >
          Total: &nbsp; <b>{totalPrice}</b>&nbsp;$
        </Menu.Item>

         <Popup

        trigger={
          <Menu.Item name="help">
            Корзина (<b>{count}</b>)
          </Menu.Item>
        }
        content={
            items.map(product => (
          <CartComponent {...product} />
        ))}
        on="click"
        hideOnScroll
         />
      </Menu>

);

export default MenuComponent;