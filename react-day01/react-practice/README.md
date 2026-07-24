# React Practice

Vite를 이용하여 React 개발 환경을 구성하고 프로젝트 구조와 GitHub 연결 과정을 연습하는 프로젝트입니다.

---

## ① 새로운 React 프로젝트 생성

Vite를 이용하여 새로운 React 프로젝트를 생성했습니다.

### 프로젝트 설정

- Project name: `react-practice`
- Framework: `React`
- Variant: `JavaScript`

### 프로젝트 생성

```bash
npm create vite@latest
```

프로젝트 생성 과정에서 다음과 같이 선택했습니다.

```text
Project name: react-practice
Framework: React
Variant: JavaScript
```

---

## ② 개발 서버 실행

프로젝트 폴더로 이동했습니다.

```bash
cd react-practice
```

프로젝트에 필요한 패키지를 설치했습니다.

```bash
npm install
```

개발 서버를 실행했습니다.

```bash
npm run dev
```

브라우저에서 React 기본 화면이 정상적으로 표시되는 것을 확인했습니다.

---

## ③ 프로젝트 구조 확인

React 프로젝트에서 다음 폴더와 파일의 역할을 확인했습니다.

- `src`: 앞으로 React 코드를 주로 작성하는 폴더
- `public`: 이미지 등 정적 파일을 저장하는 폴더
- `package.json`: 프로젝트 정보, 실행 명령어, 사용하는 패키지 등을 기록하는 파일
- `node_modules`: npm을 통해 실제로 설치된 패키지들이 저장되는 폴더
- `.gitignore`: Git이 추적하지 않을 파일이나 폴더를 지정하는 파일

---

## ④ package.json 확인

`package.json`의 코드를 수정하지 않고 다음 항목을 확인했습니다.

### 프로젝트 이름

```text
react-practice
```

### scripts의 dev

```text
vite
```

`npm run dev`를 실행하면 `scripts`에 등록된 `vite` 명령어가 실행됩니다.

### dependencies

```text
package.json에서 확인 후 작성
```

`dependencies`에는 프로젝트 실행에 필요한 주요 패키지가 기록됩니다.

### devDependencies

```text
package.json에서 확인 후 작성
```

`devDependencies`에는 개발 과정에서 필요한 패키지가 기록됩니다.

---

## ⑤ GitHub 저장소 연결

새로운 GitHub Repository를 생성하고 `react-practice` 프로젝트를 연결했습니다.

### Git 저장소 생성

```bash
git init
```

### 파일 추가

```bash
git add .
```

### Commit

```bash
git commit -m "Initial React project"
```

### 기본 브랜치를 main으로 설정

```bash
git branch -M main
```

### GitHub Repository 연결

```bash
git remote add origin GitHub-Repository-주소
```

### GitHub Push

```bash
git push -u origin main
```

### GitHub에서 확인

- [Y] `src` 폴더가 보이는가?
- [Y] `public` 폴더가 보이는가?
- [Y] `package.json`이 보이는가?
- [Y] `node_modules` 폴더가 보이지 않는가?

### node_modules가 보이지 않는 이유

`node_modules`는 설치된 패키지들이 저장되는 폴더입니다.

`.gitignore`에 `node_modules`가 등록되어 있기 때문에 Git이 추적하지 않으며 GitHub에도 Push되지 않습니다.

필요한 패키지는 `package.json`과 `package-lock.json`을 기반으로 다음 명령어를 실행하여 다시 설치할 수 있습니다.

```bash
npm install
```

---

## 전체 개발 환경 흐름

```text
Vite React 프로젝트 생성
        ↓
프로젝트 폴더 이동
        ↓
npm install
        ↓
필요한 패키지 설치
        ↓
npm run dev
        ↓
브라우저에서 localhost 확인
        ↓
GitHub Push
```