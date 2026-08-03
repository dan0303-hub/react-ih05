// src/components 폴더에 있는 MovieList 컴포넌트를 가져옵니다.
import MovieList from "./components/MovieList";

// App 컴포넌트의 스타일 파일을 가져옵니다.
import "./App.css";

function App() {
  return (
    // 전체 페이지를 감싸는 영역입니다.
    <main className="app">
      {/* 영화 목록 기능을 담당하는 컴포넌트를 화면에 보여줍니다. */}
      <MovieList />
    </main>
  );
}

export default App;
