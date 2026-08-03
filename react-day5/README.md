## 실무 과제 설계 질문

### Q1. 로그인 페이지로 이동할 때 원래 가려던 주소를 어떻게 전달할 것인가?

PrivateRoute에서 useLocation을 사용하여 사용자가 현재 접근하려던 위치를 가져옴.
로그인 페이지로 이동할 때 Navigate의 state에 현재 위치를 함께 담아서 전달할 수 있음.
`<Navigate to="/login" state={{ from: location }} />`처럼 작성함.

### Q2. 로그인에 성공한 후 전달받은 주소로 어떻게 이동할 것인가?

Login 페이지에서 useLocation을 사용하여 전달받은 state를 확인함.
`location.state.from.pathname`에 원래 주소가 있다면 useNavigate로 해당 주소로 이동함.
따라서 즐겨찾기에서 로그인 페이지로 이동한 사용자는 로그인 후 다시 즐겨찾기로 돌아갈 수 있음.

### Q3. 로그인 페이지 주소를 직접 입력한 경우에는 어디로 이동할 것인가?

로그인 페이지를 직접 입력한 경우에는 원래 가려던 주소가 전달되지 않음.
따라서 `location.state?.from?.pathname || "/"`처럼 홈 주소를 기본값으로 설정함.
원래 주소가 없다면 로그인 후 홈 페이지인 `/`로 이동함.