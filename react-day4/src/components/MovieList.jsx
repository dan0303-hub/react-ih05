// React에서 상태를 만들기 위해 useState를 가져옵니다.
import { useState } from "react";

// MovieList 컴포넌트 전용 CSS 파일을 가져옵니다.
import "./MovieList.css";

function MovieList() {
  // movies는 영화 객체들을 저장하는 배열 state입니다.
  //
  // 영화 하나의 형태:
  // {
  //   id: 1,
  //   title: "인터스텔라",
  //   watched: false
  // }
  //
  // watched가 true이면 시청 완료,
  // false이면 시청 예정이라는 의미입니다.
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "인터스텔라",
      watched: false,
    },
    {
      id: 2,
      title: "라라랜드",
      watched: true,
    },
    {
      id: 3,
      title: "기생충",
      watched: false,
    },
  ]);

  // inputText는 영화 제목 입력창의 값을 저장하는 state입니다.
  //
  // 입력창에 사용자가 글자를 입력할 때마다
  // inputText의 값이 변경됩니다.
  const [inputText, setInputText] = useState("");

  // filter는 현재 선택한 필터 조건을 저장하는 state입니다.
  //
  // "all"       : 전체 영화
  // "watched"   : 시청 완료 영화
  // "unwatched" : 시청 예정 영화
  const [filter, setFilter] = useState("all");

  // 입력창의 값이 변경될 때 실행되는 함수입니다.
  const handleInputChange = (event) => {
    // event.target은 현재 입력 중인 input 태그를 의미합니다.
    // event.target.value에는 사용자가 입력한 값이 들어 있습니다.
    setInputText(event.target.value);
  };

  // 추가 버튼을 클릭하거나 form을 제출했을 때 실행되는 함수입니다.
  const handleAddMovie = (event) => {
    // form은 기본적으로 제출되면 페이지를 새로고침합니다.
    // preventDefault()를 사용해 새로고침을 막습니다.
    event.preventDefault();

    // trim()은 문자열 앞뒤의 공백을 제거합니다.
    //
    // 예:
    // "   기생충   " → "기생충"
    const trimmedTitle = inputText.trim();

    // 아무것도 입력하지 않았거나 공백만 입력했다면
    // 영화를 추가하지 않고 함수를 종료합니다.
    if (trimmedTitle === "") {
      alert("영화 제목을 입력해주세요.");
      return;
    }

    // movies 배열에 추가할 새로운 영화 객체를 만듭니다.
    const newMovie = {
      // Date.now()는 현재 시간을 숫자로 반환합니다.
      // 여기서는 각 영화를 구분하기 위한 임시 id로 사용합니다.
      id: Date.now(),

      // 입력창에 작성한 내용을 영화 제목으로 저장합니다.
      title: trimmedTitle,

      // 새로 추가한 영화는 아직 보지 않은 상태로 시작합니다.
      watched: false,
    };

    // 기존 movies 배열을 직접 수정하면 안 됩니다.
    //
    // 잘못된 방법:
    // movies.push(newMovie);
    //
    // 올바른 방법:
    // 스프레드 연산자 ...movies로 기존 배열의 항목을 복사한 뒤
    // 마지막에 newMovie를 추가하여 새로운 배열을 만듭니다.
    setMovies([...movies, newMovie]);

    // 영화 추가가 끝나면 입력창을 다시 비웁니다.
    setInputText("");
  };

  // 체크박스를 클릭했을 때 실행되는 함수입니다.
  //
  // 매개변수 movieId에는 체크한 영화의 id가 들어옵니다.
  const handleToggleWatched = (movieId) => {
    // map을 사용해 movies 배열의 모든 영화를 하나씩 확인합니다.
    const updatedMovies = movies.map((movie) => {
      // 현재 확인 중인 영화의 id와
      // 체크한 영화의 id가 같다면 해당 영화를 변경합니다.
      if (movie.id === movieId) {
        return {
          // 기존 영화 객체의 내용을 그대로 복사합니다.
          ...movie,

          // watched 값을 현재 값의 반대로 변경합니다.
          //
          // false → true
          // true → false
          watched: !movie.watched,
        };
      }

      // id가 다른 영화는 변경하지 않고 그대로 반환합니다.
      return movie;
    });

    // map으로 만든 새로운 배열을 movies state에 저장합니다.
    setMovies(updatedMovies);
  };

  // 삭제 버튼을 클릭했을 때 실행되는 함수입니다.
  //
  // 매개변수 movieId에는 삭제할 영화의 id가 들어옵니다.
  const handleDeleteMovie = (movieId) => {
    // filter는 조건이 true인 항목만 남긴 새로운 배열을 만듭니다.
    //
    // 현재 영화의 id가 삭제할 id와 다르면 남기고,
    // 같으면 새로운 배열에서 제외합니다.
    const remainingMovies = movies.filter((movie) => {
      return movie.id !== movieId;
    });

    // 삭제할 영화를 제외한 새로운 배열로 state를 교체합니다.
    setMovies(remainingMovies);
  };

  // 화면에 보여줄 영화 목록을 저장할 변수입니다.
  let filteredMovies = movies;

  // 시청 완료 버튼을 선택한 경우입니다.
  if (filter === "watched") {
    // watched가 true인 영화만 남깁니다.
    filteredMovies = movies.filter((movie) => {
      return movie.watched === true;
    });
  }

  // 시청 예정 버튼을 선택한 경우입니다.
  if (filter === "unwatched") {
    // watched가 false인 영화만 남깁니다.
    filteredMovies = movies.filter((movie) => {
      return movie.watched === false;
    });
  }

  return (
    <section className="movie-manager">
      {/* 앱의 제목입니다. */}
      <h1 className="movie-manager__title">나의 영화 리스트</h1>

      {/* 영화 제목을 입력하고 추가하는 영역입니다. */}
      <form className="movie-form" onSubmit={handleAddMovie}>
        <input
          className="movie-form__input"
          type="text"
          placeholder="영화 제목을 입력하세요"
          // input의 화면 값을 inputText state와 연결합니다.
          value={inputText}
          // 입력할 때마다 inputText state를 변경합니다.
          onChange={handleInputChange}
        />

        {/* form 안의 submit 버튼을 누르면 onSubmit이 실행됩니다. */}
        <button className="movie-form__button" type="submit">
          추가
        </button>
      </form>

      {/* 영화 목록을 출력하는 영역입니다. */}
      <ul className="movie-list">
        {/*
          filteredMovies 배열의 영화 객체를 하나씩 꺼내
          li 태그로 변환합니다.

          map을 사용해 JSX 목록을 만들 때는
          가장 바깥쪽 태그에 반드시 key를 지정해야 합니다.
        */}
        {filteredMovies.map((movie) => {
          return (
            <li className="movie-item" key={movie.id}>
              <label className="movie-item__label">
                <input
                  className="movie-item__checkbox"
                  type="checkbox"
                  // watched가 true이면 체크되고,
                  // false이면 체크되지 않습니다.
                  checked={movie.watched}
                  // 체크박스 상태가 바뀌면 해당 영화의 id를 전달합니다.
                  onChange={() => handleToggleWatched(movie.id)}
                />

                <span
                  // 시청 완료 영화에는 watched 클래스를 추가합니다.
                  // 시청 예정 영화에는 빈 문자열을 넣습니다.
                  className={
                    movie.watched
                      ? "movie-item__title movie-item__title--watched"
                      : "movie-item__title"
                  }
                >
                  {movie.title}
                </span>
              </label>

              <button
                className="movie-item__delete-button"
                type="button"
                // 클릭한 영화의 id를 삭제 함수에 전달합니다.
                onClick={() => handleDeleteMovie(movie.id)}
              >
                삭제
              </button>
            </li>
          );
        })}
      </ul>

      {/* 전체 / 시청 완료 / 시청 예정 필터 버튼 영역입니다. */}
      <div className="filter-buttons">
        <button
          type="button"
          // 현재 선택된 필터라면 active 클래스를 추가합니다.
          className={
            filter === "all"
              ? "filter-buttons__button filter-buttons__button--active"
              : "filter-buttons__button"
          }
          // 전체 버튼을 누르면 모든 영화를 보여줍니다.
          onClick={() => setFilter("all")}
        >
          전체
        </button>

        <button
          type="button"
          className={
            filter === "watched"
              ? "filter-buttons__button filter-buttons__button--active"
              : "filter-buttons__button"
          }
          // 시청 완료 버튼을 누르면 watched가 true인 영화만 보여줍니다.
          onClick={() => setFilter("watched")}
        >
          시청완료
        </button>

        <button
          type="button"
          className={
            filter === "unwatched"
              ? "filter-buttons__button filter-buttons__button--active"
              : "filter-buttons__button"
          }
          // 시청 예정 버튼을 누르면 watched가 false인 영화만 보여줍니다.
          onClick={() => setFilter("unwatched")}
        >
          시청예정
        </button>
      </div>
    </section>
  );
}

export default MovieList;
