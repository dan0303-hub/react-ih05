import RestaurantCard from "./components/RestaurantCard";
import SassButton from "./components/SassButton";
import StyledButton from "./components/StyledButton";
import TailwindButton from "./components/TailwindButton";
import Login from "./pages/Login";
import styles from "./App.module.css";

const restaurants = [
  {
    id: 1,
    icon: "🍝",
    name: "오후의 식탁",
    category: "이탈리안",
    description: "생면 파스타와 따뜻한 분위기가 어울리는 식당입니다.",
    rating: 4.8,
  },
  {
    id: 2,
    icon: "🍣",
    name: "바다 한 점",
    category: "일식",
    description: "신선한 재료로 만든 초밥을 맛볼 수 있습니다.",
    rating: 4.7,
  },
  {
    id: 3,
    icon: "🥘",
    name: "서울의 부엌",
    category: "한식",
    description: "제철 식재료를 사용한 정갈한 한식 전문점입니다.",
    rating: 4.9,
  },
];

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <span className={styles.badge}>REACT DAY 31</span>

        <h1 className={styles.mainTitle}>React 스타일링 실습</h1>

        <p className={styles.subtitle}>
          CSS Module, styled-components, Tailwind CSS,
          <br />
          SASS와 반응형 UI를 한 화면에서 비교합니다.
        </p>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>
            1. CSS Module 맛집 카드
          </h2>

          <p className={styles.sectionDescription}>
            같은 RestaurantCard 컴포넌트에 서로 다른 props를 전달합니다.
          </p>

          <div className={styles.cardList}>
            {restaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                icon={restaurant.icon}
                name={restaurant.name}
                category={restaurant.category}
                description={restaurant.description}
                rating={restaurant.rating}
              />
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>
            2. 스타일링 방식 비교
          </h2>

          <p className={styles.sectionDescription}>
            세 버튼의 결과는 비슷하지만 스타일 작성 방식이 다릅니다.
          </p>

          <div className={styles.buttonList}>
            <StyledButton />
            <TailwindButton />
            <SassButton />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>
            3. 반응형 로그인 화면
          </h2>

          <p className={styles.sectionDescription}>
            브라우저 너비를 줄여서 좌우 배치가 위아래 배치로 바뀌는지
            확인합니다.
          </p>

          <Login />
        </section>
      </main>
    </div>
  );
}

export default App;