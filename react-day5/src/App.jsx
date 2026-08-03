// 로그인 상태를 관리하기 위해 useState를 가져옴
import { useState } from "react";

// 주소와 페이지를 연결하기 위한 React Router 도구를 가져옴
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 모든 페이지에 공통으로 표시할 Layout 컴포넌트를 가져옴
import Layout from "./components/Layout.jsx";

// 로그인 여부를 검사할 PrivateRoute 컴포넌트를 가져옴
import PrivateRoute from "./components/PrivateRoute.jsx";

// 각 주소에서 보여줄 페이지 컴포넌트를 가져옴
import Home from "./pages/Home.jsx";
import MovieDetail from "./pages/MovieDetail.jsx";
import Favorites from "./pages/Favorites.jsx";
import Login from "./pages/Login.jsx";
import NotFound from "./pages/NotFound.jsx";

// 앱 전체 스타일을 적용하기 위해 CSS 파일을 가져옴
import "./App.css";

function App() {
  // 현재 로그인 여부를 저장하는 state임
  // 처음에는 로그인하지 않은 상태이므로 false로 설정함
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    // BrowserRouter가 앱 전체의 주소 변화를 관리함
    <BrowserRouter>
      {/* 현재 주소와 일치하는 Route를 찾는 영역임 */}
      <Routes>
        {/* Layout을 부모 라우트로 설정함 */}
        <Route
          path="/"
          element={
            <Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        >
          {/* "/" 주소에서 Home 페이지를 보여줌 */}
          <Route index element={<Home />} />

          {/* :id는 영화마다 달라지는 URL 파라미터임 */}
          <Route path="movie/:id" element={<MovieDetail />} />

          {/* 즐겨찾기 페이지는 로그인 여부를 먼저 검사함 */}
          <Route
            path="favorites"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <Favorites />
              </PrivateRoute>
            }
          />

          {/* 로그인 페이지에 로그인 관련 값을 props로 전달함 */}
          <Route
            path="login"
            element={
              <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            }
          />

          {/* 존재하지 않는 모든 주소에서 404 페이지를 보여줌 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// 다른 파일에서 App 컴포넌트를 사용할 수 있도록 내보냄
export default App;
