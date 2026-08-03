// 로그인 페이지 이동과 현재 위치 확인에 필요한 도구를 가져옴
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ isLoggedIn, children }) {
  // 사용자가 원래 접근하려던 현재 주소 정보를 가져옴
  const location = useLocation();

  // 로그인하지 않은 상태라면 실행함
  if (!isLoggedIn) {
    return (
      // 로그인 페이지로 이동함
      // state 안에 원래 접근하려던 위치를 함께 전달함
      <Navigate to="/login" state={{ from: location }} replace />
    );
  }

  // 로그인한 상태라면 감싸고 있던 페이지를 그대로 보여줌
  return children;
}

// 다른 파일에서 PrivateRoute를 사용할 수 있도록 내보냄
export default PrivateRoute;
