import styled from "styled-components";


const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to play dice game</h2>
        <div className="text">
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
            <p>if you get wrong guess then  2 point will be dedcuted </p>
        </div>
    </RulesContainer>
  );
};

export default Rules;



const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-top: 40px;
  border-radius: 10px;
  background-color: rgba(251, 241, 241, 1);
  padding: 20px;

  h2 {
    font-size: 24px;
    font-weight: 700;
  }

  .text {
    margin-top: 24px;
    font-size: 18px;
    line-height: 1.5;
  }

  /* -------------------------------
        📱 Tablet (max-width: 1024px)
  --------------------------------*/
  @media (max-width: 1024px) {
    max-width: 700px;

    h2 {
      font-size: 22px;
    }

    .text {
      font-size: 17px;
    }
  }

  /* -------------------------------
        📱 Mobile (max-width: 768px)
  --------------------------------*/
  @media (max-width: 768px) {
    max-width: 90%;
    padding: 16px;

    h2 {
      font-size: 20px;
      text-align: center;
    }

    .text {
      font-size: 16px;
      text-align: center;
    }
  }

  /* -------------------------------
        📱 Small Mobile (max-width: 480px)
  --------------------------------*/
  @media (max-width: 480px) {
    padding: 14px;
    margin-top: 30px;

    h2 {
      font-size: 18px;
    }

    .text {
      font-size: 15px;
    }
  }

  /* -------------------------------
        📱 Extra Small Mobile (max-width: 360px)
  --------------------------------*/
  @media (max-width: 360px) {
    padding: 12px;

    h2 {
      font-size: 17px;
    }

    .text {
      font-size: 14px;
    }
  }
`;
