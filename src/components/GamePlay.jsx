import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import { Button } from '../styled/Button';
import TotalScore from "./TotalScore";
import styled from "styled-components";
import { useState } from 'react';
import { OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score,setScore]=useState(0);
  const [selectedNumber,setSelectedNumber]=useState();
  const [currentDice,setCurrentDice]=useState(1);
  const [error,setError]=useState("");
  const [showRules,setShowRules]=useState(false);

       const generateRandomNumber= (min,max)=>{
        return Math.floor(Math.random() * (max-min)+min);
    };

  const roleDice=()=>{
    if(!selectedNumber){
    setError("You have not selected any number");
      return;
    }
  

    const randomNumber=generateRandomNumber(1,7);
    setCurrentDice((prev)=>randomNumber);

    if(selectedNumber === randomNumber){
      setScore((prev)=>prev+randomNumber);
    }else{
      setScore(prev => prev-2);
    }
    setSelectedNumber(undefined);
  };

const resetScore=()=>{
  setScore(0);
}

  return (
    <MainContainer>
      <div className="top_section">
    <TotalScore score={score}/>
    <NumberSelector error={error} 
    setError={setError}
    selectedNumber={selectedNumber} 
    setSelectedNumber={setSelectedNumber}/>
      </div>
    <RoleDice currentDice={currentDice} roleDice={roleDice}/>
    <div className="btns">
      <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
      <Button onClick={()=>setShowRules((prev)=>!prev)}>
      {showRules ? "Hide" :"Show"} Rules</Button>
    </div>

     {showRules&&  <Rules/>}
    </MainContainer>
  )
}

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 10px;

  /* 🔥 Most Important fix */
  display: flex;
  flex-direction: column;
  align-items: center;   /* centers everything */
  width: 100%;
  max-width: 800px;
  margin: 0 auto;


.top_section {
  display: flex;
  flex-direction: column;   /* 🔥 Score + Number selector VERTICAL */
  align-items: center;      /* 🔥 Perfect center */
  justify-content: center;
  gap: 20px;
  width: 100%;
  min-height: 200px;
}


  .btns {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  /* -------------------------------
      📱 Tablet View (768px - 1024px)
  --------------------------------*/
  @media (max-width: 1024px) {
    .top_section {
      justify-content: center;
      padding: 0 20px;
      gap: 30px;
    }
  }

  /* -------------------------------
      📱 Mobile View (<768px)
  --------------------------------*/
  @media (max-width: 768px) {
    .top_section {
      flex-direction: column;
      gap: 20px;
      text-align: center;
    }

    .btns {
      margin-top: 20px;
      gap: 12px;
      width: 100%;
    }
  }

  /* -------------------------------
      📱 Small Mobile (<480px)
  --------------------------------*/
  @media (max-width: 480px) {
    padding-top: 50px;

    .btns {
      gap: 15px;
    }
  }
`;
