import React, { useState } from 'react';
import styled from 'styled-components';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';
import { SiTesla } from 'react-icons/si';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

// styled components
const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px;
  // expand header to full width
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  flex: 1;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 99;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transition: all 0.3s ease-in-out;

  // useState to show burger menu
  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CloseBtn = styled(IoMdClose)`
  font-size: 2rem;
  cursor: pointer;
`;

export default function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <a>
        <SiTesla className='tesla-logo' />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a href='#' key={index}>
              {car}
            </a>
          ))}
      </Menu>

      <RightMenu>
        <a className='right-menu' href='#'>
          Shop
        </a>
        <a className='right-menu' href='#'>
          Tesla Account
        </a>
        <GiHamburgerMenu
          className='burger-menu'
          onClick={() => setBurgerStatus(true)}
        />
      </RightMenu>

      {/* side menu for burger */}
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CloseBtn onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>

        {cars &&
          cars.map((car, index) => (
            <li>
              <a href='#' key={index}>
                {car}
              </a>
            </li>
          ))}

        <li>
          <a href='#'>Existing Inventory</a>
        </li>

        <li>
          <a href='#'>Used Inventory</a>
        </li>

        <li>
          <a href='#'>Trade-in Inventory</a>
        </li>

        <li>
          <a href='#'>Cybertruck</a>
        </li>

        <li>
          <a href='#'>Roadster</a>
        </li>
      </BurgerNav>
    </Container>
  );
}
