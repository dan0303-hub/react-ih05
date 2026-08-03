// CourseCard 컴포넌트 생성
// App.jsx에서 전달받은 props를 이용해서
// 강의 카드 1개를 화면에 출력하는 역할
function CourseCard(props) {
  // ===== 도전 과제 3. 카테고리마다 다른 배경색 적용 =====
  // category 값에 따라 사용할 클래스 이름을 저장
  let categoryClass = "";

  if (props.category === "Frontend") {
    categoryClass = "frontend";
  } else if (props.category === "Backend") {
    categoryClass = "backend";
  } else if (props.category === "AI") {
    categoryClass = "ai";
  }

  return (
    // ===== 기본 과제 1. 강의 카드 전체 영역 =====
    <div className="course-card">
      {/* ===== 기본 과제 2. 강의 이미지 출력 ===== */}
      <img src={props.image} alt={props.title} className="course-image" />

      {/* 강의 정보 전체 영역 */}
      <div className="course-content">
        {/* ===== 도전 과제 2. 평점이 4.8 이상이면 BEST 표시 ===== */}
        {Number(props.rating) >= 4.8 && (
          <span className="best-badge">BEST</span>
        )}

        {/* ===== 기본 과제 3. 카테고리 출력 ===== */}
        {/* ===== 도전 과제 3. 카테고리에 따라 클래스 추가 ===== */}
        <p className={`course-category ${categoryClass}`}>{props.category}</p>

        {/* ===== 기본 과제 4. 강의명과 강사명 출력 ===== */}
        <h2 className="course-title">{props.title}</h2>

        <p className="course-instructor">강사 : {props.instructor}</p>

        {/* ===== 기본 과제 5. 평점과 가격 출력 ===== */}
        <p className="course-rating">⭐ {props.rating}</p>

        {/* ===== 도전 과제 1. 50,000원 이상이면 가격 빨간색 ===== */}
        <p
          className={
            Number(props.price) >= 50000
              ? "course-price expensive"
              : "course-price"
          }
        >
          {Number(props.price).toLocaleString()}원
        </p>

        {/* ===== 기본 과제 6. 수강신청 버튼 출력 ===== */}
        <button className="course-button">수강신청</button>
      </div>
    </div>
  );
}

// 다른 파일에서 CourseCard를 사용할 수 있도록 export
export default CourseCard;
