import './App.css';
import Context from './components/Context/Context';
import Test from './components/Test/Test';
import Ref from './components/Ref/Ref';
import ExampleContext from './providers/ExampleContext';

function App() {
  return (
    <>
    <ExampleContext>
      <Context></Context>
      <Test></Test>
    </ExampleContext>
    <Ref></Ref>
    </>
    
  );
}

export default App;
