import { Routes, Route, Navigate } from "react-router-dom";
import CreateLink from "./components/CreateLink";
import Header from "./components/Header";
import LinkList from "./components/LinkList";
import Login from "./components/Login";
import Search from "./components/Search";
import Top from "./components/Top";
import "./styles/App.css";

function App() {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route
            path="/"
            element={<LinkList />}
            render={() => <Navigate to="/new/1" />}
          />
          <Route path="create" element={<CreateLink />} />
          <Route path="login" element={<Login />} />
          <Route path="search" element={<Search />} />
          <Route path="top" element={<LinkList />} />
          <Route path="new/:page" element={<LinkList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
