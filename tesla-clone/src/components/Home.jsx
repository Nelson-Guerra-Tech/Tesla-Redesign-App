import React from 'react';
import styled from 'styled-components';
import Section from './Section';

import { MdSpeed } from 'react-icons/md';

// styled component
const Container = styled.div`
  height: 100vh;
`;

const Speedometer = styled(MdSpeed)`
  font-size: 1.8rem;
  vertical-align: middle;
  padding-bottom: 0.2rem;
  margin-right: 0.2rem;
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
        icon={<Speedometer />}
        speed='3.1s'
        range='358 mi'
        topSpeed='162 mph'
        driveTrain='AWD'
        mph='0 - 60 mph'
        epa='Range'
        motor='Dual Motor'
        top='Top Speed'
        power=''
      />
      <Section
        title='Model S'
        description='Order Online for Touchless Delivery'
        backgroundImg='tesla-model-s.jpeg'
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory'
        id='modelS'
        icon={<Speedometer />}
        speed='1.99s'
        range='396 mi'
        topSpeed='200 mph'
        horsePower='1,020 hp'
        mph='0 - 60 mph'
        epa='Range'
        driveTrain='AWD'
        motor='Dual Motor'
        top='Top Speed'
        power='Peak Power'
      />
      <Section
        title='Model X'
        description='Order Online for Touchless Delivery'
        backgroundImg='tesla-model-x.jpeg'
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory'
        id='modelX'
        icon={<Speedometer />}
        speed='2.5s'
        range='333 mi'
        topSpeed='155 mph'
        horsePower='1,020 hp'
        mph='0 - 60 mph'
        epa='Range'
        driveTrain='AWD'
        motor='Dual Motor'
        top='Top Speed'
        power='Peak Power'
      />
      <Section
        title='Model Y'
        description='Order Online for Touchless Delivery'
        backgroundImg='tesla-model-y.jpeg'
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory'
        id='modelY'
        icon={<Speedometer />}
        speed='2.5s'
        range='330 mi'
        driveTrain='AWD'
        topSpeed='155 mph'
        mph='0 - 60 mph'
        epa='Range'
        motor='Dual Motor'
        top='Top Speed'
      />
      <Section
        title='Roadster'
        description='Order Online for Touchless Delivery'
        backgroundImg='tesla-roadster.jpeg'
        leftBtnText='Custom Order'
        rightBtnText='Reserve Now'
        id='roadster'
        icon={<Speedometer />}
        speed='1.9s'
        range='620 mi'
        topSpeed='+250 mph'
        mph='0 - 60 mph'
        epa='Range'
        driveTrain='AWD'
        motor='Dual Motor'
        top='Top Speed'
      />
      <Section
        title='Cybertruck'
        description='Order Online for Touchless Delivery'
        backgroundImg='tesla-cybertruck.jpeg'
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory'
        id='cybertruck'
        icon={<Speedometer />}
        speed='6.5s'
        range='+500 mi'
        topSpeed='120 mph'
        horsePower='800 hp'
        mph='0 - 60 mph'
        epa='Range'
        driveTrain='AWD'
        motor='Dual Motor'
        top='Top Speed'
        power='Peak Power'
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
