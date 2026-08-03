// URL 파라미터 확인과 페이지 이동에 필요한 도구를 가져옴
import { useNavigate, useParams } from "react-router-dom";

function MovieDetail() {
  // 코드로 페이지를 이동하기 위한 함수를 만듦
  const navigate = useNavigate();

  // 주소의 :id 부분을 가져옴
  // /movie/1에서는 id가 문자열 "1"이 됨
  const { id } = useParams();

  // 상세 페이지에 사용할 영화 정보 배열임
  // Home.jsx와 같은 정보를 별도로 다시 작성함
  const movies = [
    {
      id: 1,
      title: "인터스텔라",
      year: 2014,
      genre: "SF · 드라마",
      director: "크리스토퍼 놀란",
      description:
        "인류의 새로운 보금자리를 찾기 위해 우주로 떠나는 탐사대의 이야기를 그린 영화임.",
      emoji: "🚀",
    },
    {
      id: 2,
      title: "라라랜드",
      year: 2016,
      genre: "뮤지컬 · 로맨스",
      director: "데이미언 셔젤",
      description:
        "꿈을 향해 달려가는 두 청춘의 사랑과 선택을 그린 뮤지컬 영화임.",
      emoji: "🎹",
    },
    {
      id: 3,
      title: "기생충",
      year: 2019,
      genre: "드라마 · 스릴러",
      director: "봉준호",
      description:
        "서로 다른 두 가족이 만나면서 벌어지는 예측할 수 없는 사건을 그린 영화임.",
      emoji: "🏠",
    },
    {
      id: 4,
      title: "인사이드 아웃",
      year: 2015,
      genre: "애니메이션",
      director: "피트 닥터",
      description:
        "한 소녀의 머릿속 감정들이 펼치는 모험을 통해 성장과 감정을 보여주는 영화임.",
      emoji: "🧠",
    },
  ];

  // URL에서 가져온 id와 일치하는 영화를 배열에서 찾음
  const movie = movies.find((item) => {
    // URL 파라미터는 문자열이므로 Number를 사용해 숫자로 변환함
    return item.id === Number(id);
  });

  // 일치하는 영화를 찾지 못한 경우 실행함
  if (!movie) {
    return (
      // 영화가 없다는 안내 화면임
      <section className="message-page">
        {/* 안내 내용을 담는 상자임 */}
        <div className="message-box">
          {/* 검색 실패를 나타내는 이모지임 */}
          <span className="message-icon">🔍</span>

          {/* 영화가 없다는 안내 제목임 */}
          <h1>해당 영화를 찾을 수 없음.</h1>

          {/* 주소를 다시 확인하라는 설명임 */}
          <p>영화 번호를 다시 확인해야 함.</p>

          {/* 클릭하면 홈으로 이동하는 버튼임 */}
          <button
            type="button"
            className="primary-button"
            onClick={() => navigate("/")}
          >
            홈으로 이동
          </button>
        </div>
      </section>
    );
  }

  return (
    // 영화 상세 페이지 전체를 감싸는 영역임
    <section className="detail-page">
      {/* 바로 전에 보고 있던 페이지로 이동함 */}
      <button
        type="button"
        className="back-button"
        onClick={() => navigate(-1)}
      >
        ← 뒤로가기
      </button>

      {/* 영화 상세 정보를 담는 카드임 */}
      <article className="movie-detail-card">
        {/* 영화 포스터를 대신하는 영역임 */}
        <div className="detail-poster">
          {/* 현재 영화의 이모지를 표시함 */}
          <span>{movie.emoji}</span>
        </div>

        {/* 영화 상세 내용을 표시하는 영역임 */}
        <div className="detail-content">
          {/* 작은 영어 제목임 */}
          <p className="eyebrow">MOVIE DETAIL</p>

          {/* 영화 제목임 */}
          <h1>{movie.title}</h1>

          {/* 영화의 연도, 장르, 감독 정보를 모아둔 영역임 */}
          <div className="movie-information">
            {/* 영화 개봉 연도를 표시함 */}
            <p>
              <strong>개봉 연도</strong>
              <span>{movie.year}</span>
            </p>

            {/* 영화 장르를 표시함 */}
            <p>
              <strong>장르</strong>
              <span>{movie.genre}</span>
            </p>

            {/* 영화 감독을 표시함 */}
            <p>
              <strong>감독</strong>
              <span>{movie.director}</span>
            </p>
          </div>

          {/* 영화 설명을 표시함 */}
          <p className="description">{movie.description}</p>
        </div>
      </article>
    </section>
  );
}

// 다른 파일에서 MovieDetail 컴포넌트를 사용할 수 있도록 내보냄
export default MovieDetail;
