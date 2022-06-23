import React from 'react';
import styled from 'styled-components';

// styled components
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('/images/model-3.jpg');
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div``;

// buttons
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  border-radius: 100px;
  color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.85;
`;
const RightButton = styled(LeftButton)``;

export default function Section() {
  return (
    <Wrap>
      <ItemText>
        <h1>Model 3</h1>
        <p>Order Online for Touchless Delivery</p>
      </ItemText>

      <ButtonGroup>
        <LeftButton>Custom Order</LeftButton>
        <RightButton>Existing Inventory</RightButton>
      </ButtonGroup>
    </Wrap>
  );
}
