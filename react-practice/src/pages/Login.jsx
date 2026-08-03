import styles from "./Login.module.css";

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();

    alert("지금은 스타일링 실습입니다.");
  };

  return (
    <section className={styles.loginSection}>
      <div className={styles.info}>
        <p className={styles.eyebrow}>MEMBER LOGIN</p>
        <h2 className={styles.heading}>
          다시 만나서
          <br />
          반갑습니다
        </h2>

        <p className={styles.explanation}>
          이메일과 비밀번호를 입력해 로그인하는 화면입니다.
          이번 실습에서는 CSS Module을 이용해 화면을 꾸밉니다.
        </p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.formTitle}>로그인</h2>

        <label className={styles.label} htmlFor="email">
          이메일
        </label>

        <input
          className={styles.input}
          id="email"
          name="email"
          type="email"
          placeholder="example@email.com"
          required
        />

        <label className={styles.label} htmlFor="password">
          비밀번호
        </label>

        <input
          className={styles.input}
          id="password"
          name="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
          required
        />

        <button className={styles.loginButton} type="submit">
          로그인
        </button>
      </form>
    </section>
  );
}

export default Login;