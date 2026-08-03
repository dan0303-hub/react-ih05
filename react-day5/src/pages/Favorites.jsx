// 영화 상세 페이지로 이동하기 위해 Link를 가져옴
import { Link } from "react-router-dom";

function Favorites() {
  // 즐겨찾기 화면에 표시할 예시 영화 배열임
  // 실제 저장 기능은 과제 요구사항이 아니므로 고정된 값을 사용함
  const favoriteMovies = [
    {
      id: 1,
      title: "인터스텔라",
      genre: "SF · 드라마",
      emoji: "🚀",
    },
    {
      id: 3,
      title: "기생충",
      genre: "드라마 · 스릴러",
      emoji: "🏠",
    },
  ];

  return (
    // 즐겨찾기 페이지 전체를 감싸는 영역임
    <section>
      {/* 페이지 제목과 설명을 보여주는 영역임 */}
      <div className="page-heading">
        {/* 작은 영어 제목임 */}
        <p className="eyebrow">MY FAVORITES</p>

        {/* 페이지의 큰 제목임 */}
        <h1>즐겨찾기</h1>

        {/* 로그인 전용 페이지라는 설명임 */}
        <p>로그인한 사용자만 볼 수 있는 페이지임.</p>
      </div>

      {/* 즐겨찾기 영화 카드를 배치하는 영역임 */}
      <div className="movie-grid">
        {/* map을 사용해 영화 개수만큼 카드를 반복 생성함 */}
        {favoriteMovies.map((movie) => {
          return (
            // 카드를 클릭하면 해당 영화 상세 페이지로 이동함
            <Link
              key={movie.id}
              to={`/movie/${movie.id}`}
              className="movie-card"
            >
              {/* 실제 포스터 대신 이모지를 표시함 */}
              <div className="movie-poster">
                <span>{movie.emoji}</span>
              </div>

              {/* 영화 기본 정보를 표시하는 영역임 */}
              <div className="movie-card-content">
                {/* 영화 제목임 */}
                <h2>{movie.title}</h2>

                {/* 영화 장르임 */}
                <p>{movie.genre}</p>

                {/* 즐겨찾기 영화임을 표시함 */}
                <span>★ 즐겨찾기</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

// 다른 파일에서 Favorites 컴포넌트를 사용할 수 있도록 내보냄
export default Favorites;
