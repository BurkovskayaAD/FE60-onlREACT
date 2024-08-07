import './App.css';
import Button from './components/Button/Button';
import UserName from './components/UserName/UserName';

function App() {

  function handleClick1(): void {
    alert("hi");
}

function handleClick2(): void {
  alert("bue")
}


  return (
    <>
      <Button 
          functionClick={handleClick1} 
          typeButton="secondary" 
          buttonState={false} 
          content="11111111">
      </Button>
      <Button functionClick={handleClick2} typeButton="primary" buttonState={false} content="22222222"></Button>
      <UserName fullName="Artem Malkin"></UserName>
      <UserName fullName="Hanna Burkovskaya"></UserName>

    </>
    
  );
}

export default App;
