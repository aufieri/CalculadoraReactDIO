import { useState } from "react";
import Button from "./Components/Button";
import Input from "./Components/Input";
import { Container, Content, Row } from "./styles";



const App =() => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState ('0');
  const [Operation, setOperation] = useState ('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };
  
  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleSumNumbers = () => {

    if (firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+')
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('+')
    }
  }

  const handleMinusNumber = () => {

    if (firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-')
    }else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleMultpNumber = () => {
    if (firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber ('0');
      setOperation('X')
    }else{
      const mult = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mult));
      setOperation('');
    }
  }

  const handleDVDNumber = () => {

    if (firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/')
    }else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleEquals = () => {
    if (firstNumber !== '0' && Operation !== '' && currentNumber !== '0'){
      switch (Operation){
        case '+':
          handleSumNumbers();
          break;
          case '-':
            handleMinusNumber();
            break;
            case 'X':
            handleMultpNumber();
            break;
            case '/':
              handleDVDNumber();
              break;
            default: break;
      }
    }
  }


  return (
    <Container>
      <Content>
        <Input value={currentNumber}></Input>
        <Row>
        <Button label="X" onClick={handleMultpNumber}></Button>
        <Button label="/" onClick={handleDVDNumber}></Button>
        <Button label="C" onClick={() => handleOnClear('0')}></Button>     
        <Button label="." onClick={() => handleAddNumber('X')}></Button>        
        </Row>
        <Row>
        <Button label="7" onClick={() => handleAddNumber('7')}></Button>
        <Button label="8" onClick={() => handleAddNumber('8')}></Button>
        <Button label="9" onClick={() => handleAddNumber('9')}></Button>     
        <Button label="-" onClick={handleMinusNumber}></Button>        
        </Row>
        <Row>
        <Button label="4" onClick={() => handleAddNumber('4')}></Button>
        <Button label="5" onClick={() => handleAddNumber('5')}></Button>
        <Button label="6" onClick={() => handleAddNumber('6')}></Button>
        <Button label="+" onClick={handleSumNumbers}></Button>             
        </Row>
        <Row>
        <Button label="1" onClick={() => handleAddNumber('1')}></Button>
        <Button label="2" onClick={() => handleAddNumber('2')}></Button>
        <Button label="3" onClick={() => handleAddNumber('3')}></Button>
        <Button label="=" onClick={() => handleEquals()}></Button>             
        </Row>

      </Content>
    </Container>
  );
}

export default App;
