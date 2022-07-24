import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  width: 450px;
  height: 500px;
  margin: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 15px;
  transition: 0.3s;
  :hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 10px gray;
  }
`;

Card.Img = styled.img`
  width: 90%;
  height: 70%;
`;

Card.Title = styled.p`
  font-size: 25px;
  font-family: Arial, Helvetica, sans-serif;
`;

Card.Btn = styled.button`
  border: none;
  outline: none;
  width: 150px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: orange;
  color: white;
  border-radius: 8px;
  cursor: pointer;
`;
