// CourseCard 컴포넌트 가져오기
import CourseCard from "./components/CourseCard";

// CSS 파일 가져오기
import "./App.css";

function App() {
  return (
    <div className="course-list">
      {/* ===== 기본 과제 1. CourseCard 컴포넌트 사용 ===== */}
      {/* ===== 기본 과제 2. 서로 다른 Props 전달 ===== */}
      {/* ===== 기본 과제 3. 최소 6개의 강의 작성 ===== */}

      {/* 강의 카드 1 */}
      <CourseCard
        title="React 입문"
        category="Frontend"
        instructor="김동규"
        price="59000"
        rating="4.9"
        image="/images/react.png"
      />

      {/* 강의 카드 2 */}
      <CourseCard
        title="JavaScript 기초"
        category="Frontend"
        instructor="이수진"
        price="29000"
        rating="4.7"
        image="/images/javascript.png"
      />

      {/* 강의 카드 3 */}
      <CourseCard
        title="HTML & CSS 마스터"
        category="Frontend"
        instructor="박민준"
        price="25000"
        rating="4.6"
        image="/images/html-css.png"
      />

      {/* 강의 카드 4 */}
      <CourseCard
        title="Node.js 백엔드 입문"
        category="Backend"
        instructor="최유진"
        price="55000"
        rating="4.9"
        image="/images/node.png"
      />

      {/* 강의 카드 5 */}
      <CourseCard
        title="Python 백엔드 기초"
        category="Backend"
        instructor="정하늘"
        price="35000"
        rating="4.8"
        image="/images/python.png"
      />

      {/* 강의 카드 6 */}
      <CourseCard
        title="AI 서비스 만들기"
        category="AI"
        instructor="한지훈"
        price="69000"
        rating="5.0"
        image="/images/ai.png"
      />
    </div>
  );
}

// App 컴포넌트를 다른 파일에서 사용할 수 있도록 export
export default App;
