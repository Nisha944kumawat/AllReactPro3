import dice1 from "../assets/diceImage/dice1.png";
import dice2 from "../assets/diceImage/dice2.png";
import dice3 from "../assets/diceImage/dice3.png";
import dice4 from "../assets/diceImage/dice4.png";
import dice5 from "../assets/diceImage/dice5.png";
import dice6 from "../assets/diceImage/dice6.png";
import styled from "styled-components";

const RoleDice = ({currentDice,roleDice}) => {

    const diceImages = {
    1: dice1,
    2: dice2,
    3: dice3,
    4: dice4,
    5: dice5,
    6: dice6,
  };


  return (
    <DiceContainer>
        <div className="dice" onClick={roleDice}>
              <img src={diceImages[currentDice]} alt="diceImages" />
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;




const DiceContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 48px;

  p {
    font-size: 24px;
    font-weight: 600;
  }

  .dice {
    cursor: pointer;
    width: 150px;  /* default desktop size */
  }

  /* -------------------------------
        📱 Tablet (max-width: 1024px)
  --------------------------------*/
  @media (max-width: 1024px) {
    p {
      font-size: 22px;
    }

    .dice {
      width: 130px;
    }
  }

  /* -------------------------------
        📱 Mobile (max-width: 768px)
  --------------------------------*/
  @media (max-width: 768px) {
    margin-top: 32px;

    p {
      font-size: 20px;
      text-align: center;
    }

    .dice {
      width: 110px;
    }
  }

  /* -------------------------------
        📱 Small Mobile (max-width: 480px)
  --------------------------------*/
  @media (max-width: 480px) {
    p {
      font-size: 18px;
    }

    .dice {
      width: 90px;
    }
  }

  /* -------------------------------
        📱 Extra Small Mobile (max-width: 360px)
  --------------------------------*/
  @media (max-width: 360px) {
    p {
      font-size: 16px;
    }

    .dice {
      width: 75px;
    }
  }
`;


