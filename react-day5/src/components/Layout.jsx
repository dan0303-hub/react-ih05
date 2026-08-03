// 공통 레이아웃에 필요한 React Router 도구를 가져옴
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";

function Layout({ isLoggedIn, setIsLoggedIn }) {
  // 코드 실행으로 페이지를 이동하기 위한 함수를 만듦
  const navigate = useNavigate();

  // 현재 사용자가 보고 있는 주소 정보를 가져옴
  const location = useLocation();

  // 로그아웃 버튼을 클릭했을 때 실행할 함수임
  function handleLogout() {
    // 로그인 상태를 false로 변경함
    setIsLoggedIn(false);

    // 즐겨찾기 페이지에서 로그아웃했다면 홈으로 이동함
    if (location.pathname === "/favorites") {
      navigate("/");
    }
  }

  return (
    // 앱 전체를 감싸는 요소임
    <div className="app">
      {/* 모든 페이지에 공통으로 보이는 상단 영역임 */}
      <header className="header">
        {/* 로고를 클릭하면 홈으로 이동함 */}
        <Link to="/" className="logo">
          🎬 Movie Box
        </Link>

        {/* 페이지 이동 메뉴를 모아둔 영역임 */}
        <nav className="navigation">
          {/* 홈으로 이동하는 링크임 */}
          {/* end를 작성하여 정확히 "/"일 때만 active가 적용됨 */}
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            홈
          </NavLink>

          {/* 즐겨찾기 페이지로 이동하는 링크임 */}
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            즐겨찾기
          </NavLink>

          {/* 로그인 여부에 따라 다른 메뉴를 보여줌 */}
          {isLoggedIn ? (
            // 로그인한 상태에서는 로그아웃 버튼을 보여줌
            <button
              type="button"
              className="logout-button"
              onClick={handleLogout}
            >
              로그아웃
            </button>
          ) : (
            // 로그인하지 않은 상태에서는 로그인 링크를 보여줌
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              로그인
            </NavLink>
          )}
        </nav>
      </header>

      {/* 주소에 따라 바뀌는 페이지 내용이 들어가는 영역임 */}
      <main className="main">
        {/* 자식 Route의 컴포넌트가 이 위치에 표시됨 */}
        <Outlet />
      </main>
    </div>
  );
}

// 다른 파일에서 Layout 컴포넌트를 사용할 수 있도록 내보냄
export default Layout;
