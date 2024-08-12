import './App.css';
import Propschild from './components/Propschild/Propschild';
import State from './components/State/State';
import Map from './components/Map/Map';
import Form from './components/Form/Form';
import Conditional from './components/Conditional/Conditional';
import Input from './components/Input/Input';
import Textarea from './components/Textarea/Textarea';

function App() {
  return (
    <>
      {/* <State></State>
      <Propschild>AAAAAA</Propschild>
      <Map></Map>
      <Form></Form>
      <Conditional></Conditional> */}
      <Input compound="email" inputType="email" title="Title" placeholderText="Placeholder" isAtive={false} errorText="Error text" isError={false}></Input>
      <Textarea compound="text"></Textarea>
    </>
    
  );
}

export default App;
