import React from 'react';
import styled from 'styled-components';
import Section from './Section';

// styled component
const Container = styled.div`
  height: 100vh;
`;

export default function Home() {
  return (
    <Container>
      <Section
        title='Model 3'
        description='Order Online for Touchless Delivery'
        backgroundImg='tesla-model-3.jpeg'
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory'
        id='model3'
      />
      <Section
        title='Model S'
        description='Order Online for Touchless Delivery'
        backgroundImg='tesla-model-s.jpeg'
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory'
        id='modelS'
      />
      <Section
        title='Model X'
        description='Order Online for Touchless Delivery'
        backgroundImg='tesla-model-x.jpeg'
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory'
        id='modelX'
      />
      <Section
        title='Model Y'
        description='Order Online for Touchless Delivery'
        backgroundImg='tesla-model-y.jpeg'
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory'
        id='modelY'
      />
      <Section
        title='Roadster'
        description='Order Online for Touchless Delivery'
        backgroundImg='tesla-roadster.jpeg'
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory'
        id='roadster'
      />
      <Section
        title='Cybertruck'
        description='Order Online for Touchless Delivery'
        backgroundImg='tesla-cybertruck.jpeg'
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory'
        id='cybertruck'
      />
      <Section
        title='Lowest Cost Solar Panels in America'
        description='Money-Back Guarantee'
        backgroundImg='solar-panel.jpg'
        leftBtnText='Order Now'
        rightBtnText='Learn More'
      />
      <Section
        title='Solar Roof'
        description='Produce Clean Energy From Your Roof'
        backgroundImg='solar-roof.jpg'
        leftBtnText='Order Now'
        rightBtnText='Learn More'
      />
      <Section
        title='Accessories'
        description=''
        backgroundImg='accessories.jpg'
        leftBtnText='Shop Now'
      />
    </Container>
  );
}
