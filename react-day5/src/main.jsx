// React의 개발 확인 기능인 StrictMode를 가져옴 import { StrictMode } from "react"; // React 앱을 HTML 화면에 연결하기 위해 createRoot를 가져옴 import { createRoot } from "react-dom/client"; // 전체 페이지에 공통으로 적용할 CSS 파일을 가져옴 import "./index.css"; // 가장 상위 컴포넌트인 App을 가져옴 import App from "./App.jsx"; // index.html 안에 있는 id가 root인 요소를 찾아 React 앱을 연결함 createRoot(document.getElementById("root")).render( // 개발 중 잘못된 코드 사용을 확인하기 위해 StrictMode로 감쌈 <StrictMode> {/* App 컴포넌트를 화면에 표시함 */} <App /> </StrictMode>, );// React의 개발 확인 기능인 StrictMode를 가져옴
import { StrictMode } from "react";

// React 앱을 HTML 화면에 연결하기 위해 createRoot를 가져옴
import { createRoot } from "react-dom/client";

// 전체 페이지에 공통으로 적용할 CSS 파일을 가져옴
import "./index.css";

// 가장 상위 컴포넌트인 App을 가져옴
import App from "./App.jsx";

// index.html 안에 있는 id가 root인 요소에 React 앱을 연결함
createRoot(document.getElementById("root")).render(
  // 개발 중 잘못된 코드 사용을 확인하기 위해 StrictMode로 감쌈
  <StrictMode>
    {/* App 컴포넌트를 화면에 표시함 */}
    <App />
  </StrictMode>,
);
