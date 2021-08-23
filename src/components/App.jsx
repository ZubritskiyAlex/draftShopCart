import React, {Component} from 'react';
import axios from "axios";
import {Container} from "semantic-ui-react";
import ProductCard from "../containers/ProductCard";
import { Card } from 'semantic-ui-react'
import Filter from "../containers/Filter";
import Menu from "../containers/Menu";


class App extends Component {
    componentWillMount() {
    const { setProducts } = this.props;
    axios.get('https://fakestoreapi.com/products').then(({ data }) => {
      setProducts(data);
    });
  }
render() {
        const {products, isReady, setFilter} = this.props;
        return(
            <Container>
                <Menu/>
                <Filter setFilter={setFilter}/>
            <Card.Group itemsPerRow={4}>
                { !isReady
                    ? 'Loading...'
                    : products.map((product, i) =>
                    <ProductCard key={i} {...product}/>
                    )}
            </Card.Group>
            </Container>
        );
    }
}



export default App;