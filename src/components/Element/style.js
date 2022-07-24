import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Product = styled.div`
  width: 80%;
  height: 700px;
  display: flex;
`;
export const Box1 = styled.div`
  flex: 1;
`;

Box1.Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const Box2 = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 30px 0 30px;
`;

Box2.Title = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
`;

Box2.Desc = styled.h4`
  font-family: Arial, Helvetica, sans-serif;
`;

Box2.Price = styled.h1`
  margin-left: auto;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Button = styled.div`
  width: 150px;
  height: 50px;
  border: 1px solid #212121;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  cursor: pointer;
  user-select: none;
  :hover {
    background-color: black;
    color: white;
  }
`;
