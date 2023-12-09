import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import GlobalStyle from './GlobalStyle';
import CreateMessagePage from './pages/CreateMessagePage';
import CreatePaperPage from './pages/CreatePaperPage';
import HomePage from './pages/HomePage';
import MessageListPage from './pages/MessageListPage';
import PaperListPage from './pages/PaperListPage';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/list" element={<PaperListPage />} />
          <Route path="/post">
            <Route index element={<CreatePaperPage />} />
            <Route path=":id" element={<MessageListPage />} />
            <Route path=":id/edit" element={<MessageListPage />} />
            <Route path=":id/message" element={<CreateMessagePage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
