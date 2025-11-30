
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

const NumberSelectorContainer=styled.div`
display:flex;
flex-direction:column;
align-items:end;

.error{
  color:red;
}
.flex{
  display:flex;
  gap:24px;
}
p{
  font-size:24px;
  font-weight:700px;
}
`;



const Box=styled.div`
height:72px;
width:72px;
border:1px solid black;
display:grid;
place-items:center;
font-weight:700;
font-size:24px;
cursor: pointer;
background-color:${(props) => (props.isSelected ? "black" : "white")};
color:${(props) => (!props.isSelected ? "black" : "white")};
`;