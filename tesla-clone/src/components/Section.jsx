import React from 'react';
import styled from 'styled-components';
import { FiChevronDown } from 'react-icons/fi';
import { Fade } from 'react-reveal';

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

export default function Section({
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
}) {
  const arrow = <FiChevronDown className='down-arrow' />;

  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>

      <Button>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton className='btn'>{leftBtnText}</LeftButton>
            {rightBtnText && (
              <RightButton className='btn'>{rightBtnText}</RightButton>
            )}
          </ButtonGroup>
        </Fade>

        {arrow}
      </Button>
    </Wrap>
  );
}
