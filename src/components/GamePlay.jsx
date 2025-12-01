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
  padding-top: 70px;

  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
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
      justify-content: space-between;
      padding: 0 20px;
    }
  }

  /* -------------------------------
      📱 Mobile View (<768px)
  --------------------------------*/
  @media (max-width: 768px) {
    .top_section {
      flex-direction: column;
      justify-content: center;
      align-items: center;
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
