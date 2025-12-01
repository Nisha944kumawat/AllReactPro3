
import styled from 'styled-components';

const NumberSelector = ({setError,error,selectedNumber,setSelectedNumber}) => {

const arrNumber=[1,2,3,4,5,6];

const NumberSelectorHandler=(Value)=>{
setSelectedNumber(Value);
setError("");
}

  return (
    <NumberSelectorContainer>
    <p className='error'>{error}</p>
    <div className='flex'>
        {arrNumber.map((Value,i)=>(
        <Box isSelected={Value === selectedNumber}
        key={i} onClick={()=>NumberSelectorHandler(Value)} > {Value} </Box>
      ))}
    </div>

    <p>Select Number</p>

    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;   /* 🔥 MOST IMPORTANT FIX */
  margin:0 auto;
  width: 100%;           /* 🔥 Keeps everything centered */
  text-align: center;

  .error {
    color: red;
    font-size: 14px;
  }

  .flex {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;         /* 🔥 Automatically fixes wrapping */
    justify-content: center; /* 🔥 Center numbers ALWAYS */
    width: 100%;
  }

  p {
    font-size: 24px;
    font-weight: 700;
  }

  /* Tablet */
  @media (max-width: 1024px) {
    .flex {
      gap: 18px;
    }
    p {
      font-size: 22px;
    }
  }

  /* Mobile */
  @media (max-width: 768px) {
    p {
      font-size: 20px;
    }
    .flex {
      gap: 16px;
    }
  }

  /* Small Mobile */
  @media (max-width: 480px) {
    p {
      font-size: 18px;
    }
    .flex {
      gap: 12px;
    }
  }
`;


const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 24px;
  cursor: pointer;

  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};

  @media (max-width: 1024px) {
    height: 65px;
    width: 65px;
    font-size: 22px;
  }

  @media (max-width: 768px) {
    height: 60px;
    width: 60px;
    font-size: 20px;
  }

  @media (max-width: 480px) {
    height: 52px;
    width: 52px;
    font-size: 18px;
  }

  @media (max-width: 360px) {
    height: 45px;
    width: 45px;
    font-size: 16px;
  }
`;
