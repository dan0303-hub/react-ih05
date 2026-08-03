// 로그인 후 이동과 전달받은 위치 확인에 필요한 도구를 가져옴
import { Navigate, useLocation, useNavigate } from "react-router-dom";

function Login({ isLoggedIn, setIsLoggedIn }) {
  // 로그인 성공 후 페이지를 이동하기 위한 함수를 만듦
  const navigate = useNavigate();

  // 로그인 페이지로 전달된 위치 정보를 가져옴
  const location = useLocation();

  // 원래 접근하려던 주소가 있다면 해당 주소를 저장함
  // 로그인 주소를 직접 입력했다면 홈 주소를 기본값으로 사용함
  const from = location.state?.from?.pathname || "/";

  // 로그인 버튼을 눌렀을 때 실행할 함수임
  function handleLogin() {
    // 로그인 상태를 true로 변경함
    setIsLoggedIn(true);

    // 원래 접근하려던 페이지 또는 홈으로 이동함
    navigate(from, { replace: true });
  }

  // 이미 로그인한 사용자가 로그인 페이지에 접근한 경우 실행함
  if (isLoggedIn) {
    // 로그인 페이지 대신 홈으로 이동함
    return <Navigate to="/" replace />;
  }

  return (
    // 로그인 페이지 전체를 감싸는 영역임
    <section className="login-page">
      {/* 로그인 내용을 담는 카드임 */}
      <div className="login-card">
        {/* 로그인 티켓을 나타내는 이모지임 */}
        <span className="login-icon">🎟️</span>

        {/* 작은 영어 제목임 */}
        <p className="eyebrow">MEMBER LOGIN</p>

        {/* 로그인 페이지의 큰 제목임 */}
        <h1>로그인</h1>

        {/* 로그인해야 하는 이유를 안내함 */}
        <p className="login-description">
          즐겨찾기 페이지를 확인하려면 로그인해야 함.
        </p>

        {/* 클릭하면 handleLogin 함수가 실행됨 */}
        <button
          type="button"
          className="primary-button login-button"
          onClick={handleLogin}
        >
          로그인하기
        </button>

        {/* 원래 접근하려던 주소가 있을 때만 표시함 */}
        {location.state?.from && (
          <p className="redirect-message">
            로그인하면 원래 보려던 페이지로 이동함.
          </p>
        )}
      </div>
    </section>
  );
}

// 다른 파일에서 Login 컴포넌트를 사용할 수 있도록 내보냄
export default Login;
