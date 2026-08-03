// 영화 상세 페이지로 이동하기 위해 Link를 가져옴
import { Link } from "react-router-dom";

function Home() {
  // 홈 화면에 표시할 영화 정보를 저장한 배열임
  // 별도의 data 파일을 만들지 않고 이 컴포넌트에 직접 작성함
  const movies = [
    {
      id: 1,
      title: "인터스텔라",
      year: 2014,
      genre: "SF · 드라마",
      emoji: "🚀",
    },
    {
      id: 2,
      title: "라라랜드",
      year: 2016,
      genre: "뮤지컬 · 로맨스",
      emoji: "🎹",
    },
    {
      id: 3,
      title: "기생충",
      year: 2019,
      genre: "드라마 · 스릴러",
      emoji: "🏠",
    },
    {
      id: 4,
      title: "인사이드 아웃",
      year: 2015,
      genre: "애니메이션",
      emoji: "🧠",
    },
  ];

  return (
    // 홈 페이지 전체를 감싸는 영역임
    <section>
      {/* 페이지 제목과 설명을 보여주는 영역임 */}
      <div className="page-heading">
        {/* 작은 영어 제목임 */}
        <p className="eyebrow">NOW SHOWING</p>

        {/* 페이지의 큰 제목임 */}
        <h1>영화 목록</h1>

        {/* 페이지 설명임 */}
        <p>영화를 선택하면 상세 정보를 확인할 수 있음.</p>
      </div>

      {/* 영화 카드를 격자 형태로 배치하는 영역임 */}
      <div className="movie-grid">
        {/* map을 사용하여 영화 개수만큼 카드를 반복 생성함 */}
        {movies.map((movie) => {
          return (
            // 영화 카드 전체를 클릭하면 상세 페이지로 이동함
            <Link
              key={movie.id}
              to={`/movie/${movie.id}`}
              className="movie-card"
            >
              {/* 실제 포스터 대신 영화별 이모지를 표시함 */}
              <div className="movie-poster">
                <span>{movie.emoji}</span>
              </div>

              {/* 영화 제목과 기본 정보를 보여주는 영역임 */}
              <div className="movie-card-content">
                {/* 영화 제목을 표시함 */}
                <h2>{movie.title}</h2>

                {/* 영화 장르를 표시함 */}
                <p>{movie.genre}</p>

                {/* 영화 개봉 연도를 표시함 */}
                <span>{movie.year}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

// 다른 파일에서 Home 컴포넌트를 사용할 수 있도록 내보냄
export default Home;
