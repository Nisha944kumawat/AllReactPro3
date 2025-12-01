import styled from 'styled-components';

const TotalScore = ({score}) => {
  return (
        <ScoreContainer>
            <h1>{score}</h1>
            <p>Total Score</p>
        </ScoreContainer>
  );
};

export default TotalScore;



const ScoreContainer = styled.div`
  max-width: 200px;
  text-align: center;

  h1 {
    font-size: 100px;
    line-height: 100px;
    font-weight: 800;
  }

  p {
    font-size: 24px;
    font-weight: 500;
  }

  /* -------------------------------
        📱 Tablet (max-width: 1024px)
  --------------------------------*/
  @media (max-width: 1024px) {
    h1 {
      font-size: 80px;
      line-height: 85px;
    }
    p {
      font-size: 22px;
    }
  }

  /* -------------------------------
        📱 Mobile (max-width: 768px)
  --------------------------------*/
  @media (max-width: 768px) {
    max-width: 150px;

    h1 {
      font-size: 60px;
      line-height: 65px;
    }

    p {
      font-size: 20px;
    }
  }

  /* -------------------------------
        📱 Small Mobile (max-width: 480px)
  --------------------------------*/
  @media (max-width: 480px) {
    max-width: 120px;

    h1 {
      font-size: 48px;
      line-height: 52px;
    }

    p {
      font-size: 18px;
    }
  }

  /* -------------------------------
        📱 Extra Small Mobile (max-width: 360px)
  --------------------------------*/
  @media (max-width: 360px) {
    max-width: 100px;

    h1 {
      font-size: 40px;
      line-height: 44px;
    }

    p {
      font-size: 16px;
    }
  }
`;
