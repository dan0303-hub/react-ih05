// React에서 state를 사용하기 위해 useState를 불러옵니다.
// 특정 값이 변경될 때 실행할 코드를 만들기 위해 useEffect도 불러옵니다.
import { useEffect, useState } from "react";

// 자식 컴포넌트 LikeBadge를 불러옵니다.
import LikeBadge from "./LikeBadge";

// App.jsx에서 title, instructor, image를 props로 전달받습니다.
const LikeCard = ({ title, instructor, image }) => {
  // 좋아요가 눌렸는지 저장합니다.
  // 처음에는 좋아요가 눌리지 않았으므로 false입니다.
  const [liked, setLiked] = useState(false);

  // 좋아요 개수를 저장합니다.
  // 처음에는 0개이므로 0으로 시작합니다.
  const [count, setCount] = useState(0);

  // 좋아요 버튼을 클릭했을 때 실행되는 함수입니다.
  const handleLike = () => {
    // 도전 1
    // 현재 liked가 true라면 좋아요를 취소하는 것이므로 1을 줄입니다.
    // 현재 liked가 false라면 좋아요를 누르는 것이므로 1을 늘립니다.
    if (liked === true) {
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }

    // 현재 liked 값을 반대로 변경합니다.
    // false → true
    // true → false
    setLiked(!liked);
  };

  // count 값이 변경될 때마다 실행됩니다.
  useEffect(() => {
    // 브라우저 탭의 제목을 변경합니다.
    document.title = `좋아요 ${count}개`;
  }, [count]);

  // 도전 4
  // 빈 배열 []을 넣으면 컴포넌트가 처음 화면에 나타날 때 실행됩니다.
  useEffect(() => {
    console.log("카드가 나타났습니다");
  }, []);

  return (
    <div className="like-card">
      {/* App.jsx에서 전달받은 강의 이미지를 보여줍니다. */}
      <img className="course-image" src={image} alt={title} />

      <div className="card-content">
        {/* App.jsx에서 전달받은 강의 제목 */}
        <h2>{title}</h2>

        {/* App.jsx에서 전달받은 강사 이름 */}
        <p className="instructor">{instructor}</p>

        <div className="like-info">
          {/* liked 값에 따라 하트 모양이 달라집니다. */}
          <span>
            {liked ? "❤️" : "🤍"} 좋아요 {count}
          </span>

          {/* liked state를 LikeBadge에게 props로 전달합니다. */}
          <LikeBadge liked={liked} />
        </div>

        {/* 도전 2 */}
        {/* count가 5 이상일 때만 인기 급상승 문구를 보여줍니다. */}
        {count >= 5 && <p className="popular">🔥 인기 급상승</p>}

        {/* 좋아요 버튼 */}
        <button className="like-button" onClick={handleLike}>
          {/* 도전 3 */}
          {/* liked 값에 따라 버튼의 글자를 변경합니다. */}
          {liked ? "좋아요 완료" : "좋아요"}
        </button>
      </div>
    </div>
  );
};

export default LikeCard;
