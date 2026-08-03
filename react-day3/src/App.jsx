// 강의 카드 컴포넌트를 불러옵니다.
import LikeCard from "./components/LikeCard";

// CSS 파일을 불러옵니다.
import "./App.css";

function App() {
  return (
    <main className="app">
      <header className="header">
        <h1>오늘의 인기 강의</h1>
        <p>관심 있는 강의에 좋아요를 눌러보세요!</p>
      </header>

      <section className="card-container">
        {/* 첫 번째 강의 카드 */}
        <LikeCard
          title="React 기초"
          instructor="이동규"
          image="/images/react.png"
        />

        {/* 두 번째 강의 카드 */}
        <LikeCard
          title="JavaScript 입문"
          instructor="김코딩"
          image="/images/javascript.png"
        />

        {/* 세 번째 강의 카드 */}
        <LikeCard
          title="HTML & CSS"
          instructor="박디자인"
          image="/images/html-css.png"
        />
      </section>
    </main>
  );
}

export default App;
