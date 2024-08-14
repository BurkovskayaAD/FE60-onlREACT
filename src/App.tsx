import './App.css';

import Shrek from './assets/Shrek.png';
import LifeCycle from './components/LifeCycle/LifeCycle';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import DropDown from './components/DropDown/DropDown';
import SelectedPost from './components/SeletedPost/SelectedPost';
import SeletedPage from './pages/SelectedPage/SeletedPage';

function App() {
  return (
    <>
      {/* <img src={Shrek} alt="shrek" /> */}
      {/* <LifeCycle></LifeCycle> */}
      {/* <Container></Container> */}
      {/* <Header></Header> */}
      {/* <SelectedPost></SelectedPost> */}
      <SeletedPage></SeletedPage>
    </>
    
  );
}

export default App;
