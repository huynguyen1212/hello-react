import React, { Component } from "react";
import axios from "axios";

import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";

import { CartContext } from "../contexts/Cart";

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: []
    };
  }

  componentDidMount() {
    axios.get("https://wy34h.sse.codesandbox.io/product").then((res) => {
      this.setState({
        product: res.data
      });
    });
  }

  render() {
    const { product } = this.state;

    return (
      <Container>
        <h2>Product</h2>
        <Row>
          {product.map((product) => (
            <Col sm="4">
              <Card>
                <CardImg top width="100%" src={product.imageUrl} />
                <CardBody>
                  <CardTitle>{product.name}</CardTitle>
                  <CardText>{product.description}</CardText>
                  <CartContext.Consumer>
                    {({ addToCart }) => (
                      <Button onClick={() => addToCart(product)}>
                        Add to card
                      </Button>
                    )}
                  </CartContext.Consumer>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Product;
