import styled from 'styled-components';
import dices from "../assets/dices.png";
import { Button } from '../styled/Button';

const StartGame = ({toggle}) => {
  return (
    <Container>
    <div>
      <img src={dices} alt="dices-image" />
    </div>
        <div className='content'>
            <h1>DICE GAME</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  );
};

export default StartGame;



const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;
  justify-content: center; /* better centering */

  .content {
    text-align: center;

    h1 {
      font-size: 96px;
      white-space: nowrap;
      font-weight: 800;
    }
  }

  /* ---------------------------------------
        📱 Large Tablet (max-width: 1024px)
  ----------------------------------------*/
  @media (max-width: 1024px) {
    .content h1 {
      font-size: 72px;
    }
  }

  /* ---------------------------------------
        📱 Mobile (max-width: 768px)
  ----------------------------------------*/
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 40px 0;

    .content h1 {
      font-size: 48px;
      white-space: normal;
      line-height: 1.1;
    }
  }

  /* ---------------------------------------
        📱 Small Mobile (max-width: 480px)
  ----------------------------------------*/
  @media (max-width: 480px) {
    .content h1 {
      font-size: 38px;
    }
  }

  /* ---------------------------------------
        📱 Extra Small Mobile (max-width: 360px)
  ----------------------------------------*/
  @media (max-width: 360px) {
    .content h1 {
      font-size: 32px;
    }
  }
`;



