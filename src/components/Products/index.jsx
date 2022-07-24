import React from "react";
import { useNavigate } from "react-router-dom";
import ProductsItem from "../../mock/products";
import { Card, Container } from "./style";

const Products = () => {
  const navigate = useNavigate();
  return (
    <Container>
      {ProductsItem.map((value) => {
        return (
          <Card key={value.id}>
            <Card.Img src={value.img} alt="img" />
            <Card.Title>{value.title}</Card.Title>
            <Card.Btn onClick={() => navigate(`/products/${value.title}`)}>
              Select
            </Card.Btn>
          </Card>
        );
      })}
    </Container>
  );
};

export default Products;
