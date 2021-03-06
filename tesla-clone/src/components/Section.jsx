import React from 'react';
import styled from 'styled-components';
import { FiChevronDown } from 'react-icons/fi';
import { MdSpeed } from 'react-icons/md';

// styled components
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('/images/model-s.jpg');
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url('/images/${props.bgImage}')`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

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
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
`;
const RightButton = styled(LeftButton)`
  background-color: white;
  color: #393c41;
  opacity: 0.7;
`;

const Button = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
  padding-top: 0.5rem;
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 0.8rem;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 0.8rem;
    }
    p {
      font-size: 0.5rem;
    }
  }
`;

export default function Section({
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
  id,
  speed,
  range,
  driveTrain,
  topSpeed,
  horsePower,
  mph,
  epa,
  motor,
  top,
  power,
  icon,
}) {
  const arrow = <FiChevronDown className='down-arrow' />;

  return (
    <Wrap bgImage={backgroundImg} id={id}>
      <ItemText data-aos='fade-up'>
        <h1>{title}</h1>
        <p>{description}</p>

        <Info>
          <InfoContainer>
            <h2>
              {icon}
              {speed}
            </h2>
            <p>{mph}</p>
          </InfoContainer>

          <InfoContainer>
            <h2>{range}</h2>
            <p>{epa}</p>
          </InfoContainer>

          <InfoContainer>
            <h2>{driveTrain}</h2>
            <p>{motor}</p>
          </InfoContainer>

          <InfoContainer>
            <h2>{topSpeed}</h2>
            <p>{top}</p>
          </InfoContainer>

          <InfoContainer>
            <h2>{horsePower}</h2>
            <p>{power}</p>
          </InfoContainer>
        </Info>
      </ItemText>

      <Button>
        <ButtonGroup data-aos='fade-up' data-aos-delay='100'>
          <LeftButton className='btn'>{leftBtnText}</LeftButton>
          {rightBtnText && (
            <RightButton className='btn'>{rightBtnText}</RightButton>
          )}
        </ButtonGroup>

        {arrow}
      </Button>
    </Wrap>
  );
}
