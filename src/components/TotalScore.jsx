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
  width: 100%;         /* 🔥 full width so it stays centered */
  display: flex;       /* 🔥 center the content */
  flex-direction: column;
  justify-content: center;
  align-items: center; /* 🔥 EXACT fix */
  text-align: center;
  margin-bottom: 20px;

  h1 {
    font-size: 100px;
    line-height: 100px;
    font-weight: 800;
  }

  p {
    font-size: 24px;
    font-weight: 500;
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: 80px;
      line-height: 85px;
    }
    p {
      font-size: 22px;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 60px;
      line-height: 65px;
    }
    p {
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 48px;
      line-height: 52px;
    }
    p {
      font-size: 18px;
    }
  }

  @media (max-width: 360px) {
    h1 {
      font-size: 40px;
      line-height: 44px;
    }
    p {
      font-size: 16px;
    }
  }
`;
