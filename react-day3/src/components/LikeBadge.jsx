// liked 값을 부모 LikeCard에게서 props로 전달받습니다.{liked}로 props를 표현
const LikeBadge = ({ liked }) => {
  // liked가 false라면 아무것도 화면에 보여주지 않습니다.
  if (!liked) {
    return null;
  }

  // liked가 true일 때만 BEST 배지를 보여줍니다.
  return <span className="best-badge">❤️ BEST</span>;
};

export default LikeBadge;
