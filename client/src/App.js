import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './page/Main';
import Questions from './page/Questions';
import Tags from './page/Tags';
import Companies from './page/Companies';
import Login from './page/Login';
import MyPage from './page/MyPage';
import Signup from './page/Sign_up';
import QuestionRegister from './page/QuestionRegister';
import QuestionDetail from './page/QuestionDetail';
import SearchList from './page/Search_list';
import QuestionEdit from './page/QuestionEdit';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [isData, setIsData] = useState([]);

  // json-server --watch db.json --port 5000
  const getData = () => {
    return axios
      .get(
        'https://18d6-59-8-197-35.ngrok-free.app/question/?page=1&size=10&tag',
        {
          headers: {
            'Content-Type': `application/json`,
            'ngrok-skip-browser-warning': true,
          },
        },
      )
      .then((res) => {
        setIsData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="app__body">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign_up" element={<Signup />} />
          <Route path="/questions" element={<Questions data={isData} />} />
          <Route path="/question/:id" element={<QuestionDetail />} />
          <Route path="/question_register" element={<QuestionRegister />} />
          <Route path="/search" element={<SearchList data={isData} />} />
          <Route path="/question_register/:id" element={<QuestionEdit />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
