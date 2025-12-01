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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  /* 🔥 Fixes center alignment on all devices */
  margin-top: 20px;
  text-align: center;

  p {
    font-size: 24px;
    font-weight: 600;
  }

  .dice {
    cursor: pointer;
    justify-content: center;/* 🔥 Force center even if parent shifts */
    display: flex;
    align-items: center;
  }
  .dice img {
  width: 150px;
  display: block;
}
  /* Tablet */
  @media (max-width: 1024px) {
    p {
      font-size: 22px;
    }
    .dice {
      width: 130px;
    }
  }

  /* Mobile */
  @media (max-width: 768px) {
    margin-top: 32px;

    p {
      font-size: 20px;
    }

    .dice {
      width: 110px;
    }
  }

  /* Small Mobile */
  @media (max-width: 480px) {
    p {
      font-size: 18px;
    }
    .dice {
      width: 90px;
    }
  }

  /* Extra Small */
  @media (max-width: 360px) {
    p {
      font-size: 16px;
    }
    .dice {
      width: 75px;
    }
  }
`;
