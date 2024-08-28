import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import AboutUsPage from './pages/AboutUsPage';
import AllPostsPage from './pages/AllPostsPage';
import MainPage from './pages/MainPage';
import Contact from './pages/Contact';
import PostPage from './pages/PostPage';

function App() {
  return (
    <>
      {/* <Header></Header> */}
      {/* <MainPage></MainPage>    
      <AboutUsPage></AboutUsPage>
      <AllPostsPage></AllPostsPage> */}
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<MainPage></MainPage>} />
          <Route path='/aboutus' element={<AboutUsPage></AboutUsPage>}>
            <Route path='contact' element={<Contact/>} />
          </Route>
          <Route path='/posts' element={<AllPostsPage></AllPostsPage>} />
          <Route path='/posts/:id' element={<PostPage></PostPage>} />
          <Route path='*' element={<h1>Not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
