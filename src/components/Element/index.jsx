import React from "react";
import { useParams } from "react-router-dom";
import ProductsItem from "../../mock/products";
import { Box1, Box2, Button, Container, Product } from "./style";

const Element = () => {
  const { title } = useParams();
  return (
    <Container>
      {ProductsItem.filter((value) => value.title === title).map((item) => {
        return (
          <Product key={item.id}>
            <Box1>
              <Box1.Img src={item.img} />
            </Box1>
            <Box2>
              <Box2.Title>{item.title}</Box2.Title>
              <Box2.Desc>{item.description}</Box2.Desc>
              <Box2.Price>{item.price}</Box2.Price>
              <Button onClick={() => alert("Buyed")}>Buy</Button>
            </Box2>
          </Product>
        );
      })}
    </Container>
  );
};

export default Element;
