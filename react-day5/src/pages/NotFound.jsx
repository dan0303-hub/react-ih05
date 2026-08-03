// 홈으로 이동하는 링크를 만들기 위해 Link를 가져옴
import { Link } from "react-router-dom";

function NotFound() {
  return (
    // 존재하지 않는 주소에서 보여줄 404 페이지임
    <section className="message-page">
      {/* 오류 안내 내용을 담는 상자임 */}
      <div className="message-box">
        {/* 404 오류 번호임 */}
        <span className="error-number">404</span>

        {/* 오류 페이지의 제목임 */}
        <h1>페이지를 찾을 수 없습니다.</h1>

        {/* 사용자에게 주소 확인을 안내함 */}
        <p>입력한 주소가 올바른지 확인하세요.</p>

        {/* 클릭하면 홈으로 이동하는 링크임 */}
        <Link to="/" className="primary-button link-button">
          홈으로 이동
        </Link>
      </div>
    </section>
  );
}

// 다른 파일에서 NotFound 컴포넌트를 사용할 수 있도록 내보냄
export default NotFound;
