
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
  align-items: end;

  .error {
    color: red;
    font-size: 14px;
  }

  .flex {
    display: flex;
    gap: 24px;
  }

  p {
    font-size: 24px;
    font-weight: 700;
  }

  /* -------------------------------
        📱 Tablet View (max-width: 1024px)
  --------------------------------*/
  @media (max-width: 1024px) {
    .flex {
      gap: 18px;
    }

    p {
      font-size: 22px;
    }
  }

  /* -------------------------------
        📱 Mobile View (max-width: 768px)
  --------------------------------*/
  @media (max-width: 768px) {
    align-items: center;
    text-align: center;

    .flex {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 16px;
    }

    p {
      font-size: 20px;
    }
  }

  /* -------------------------------
        📱 Small Mobile View (max-width: 480px)
  --------------------------------*/
  @media (max-width: 480px) {
    .flex {
      gap: 12px;
    }

    p {
      font-size: 18px;
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

  /* -------------------------------
        📱 Tablet (max-width: 1024px)
  --------------------------------*/
  @media (max-width: 1024px) {
    height: 65px;
    width: 65px;
    font-size: 22px;
  }

  /* -------------------------------
        📱 Mobile (max-width: 768px)
  --------------------------------*/
  @media (max-width: 768px) {
    height: 60px;
    width: 60px;
    font-size: 20px;
  }

  /* -------------------------------
        📱 Small Mobile (max-width: 480px)
  --------------------------------*/
  @media (max-width: 480px) {
    height: 52px;
    width: 52px;
    font-size: 18px;
  }

  /* -------------------------------
        📱 Extra Small Phones (max-width: 360px)
  --------------------------------*/
  @media (max-width: 360px) {
    height: 45px;
    width: 45px;
    font-size: 16px;
  }
`;
