## twitter-advertisement-exposure

**배포 사이트**: [배포 사이트](http://115.85.183.32:3000/)

**회고록**: [회고록](https://confirmed-theory-d98.notion.site/a2c7de1f97314f349cd7199782ef5a11)

**개발 기록 노션**: [개발 기록 노션](https://confirmed-theory-d98.notion.site/Next-JS-6215440d928b4de1bd1963ff0fcc66f0)

## 기술스택 및 선택 이유

- Yarn berry
  - 패키지의 빠른 설치
  - 효율적인 디스크 관리
- Nextjs
  - 서버사이드 렌더링을 지원
  - swc를 활용한 짧은 빌드 시간
  - 빌드된 파일을 캐싱하여 빠른 로딩을 지원
- Typescript
  - 정적 타입 검사를 통한 안정성 및 버그 사전 제거
  - 타입을 통한 코드 자동완성 기능을 제공하여 생산성 향상
- TailwindCss
  - 미리 정의된 css 클래스를 활용하여 빠르고 쉽게 css를 적용
- mySql
  - 추후에 추가될 수 있는 기능들 (좋아요, 회원가입) 등이 관계형 데이터베이스에 적합
  - 작은 규모의 앱으로 퍼포먼스보다는 빠르고 쉽게 사용할 수 있는 mySql 선택
- Prisma
  - ORM을 활용하여 비즈니스 로직에만 집중하도록 도와줌
  - 쉽게 데이터베이스 정보를 변경할 수 있다. (테이블 내 새로운 컬럼 추가 및 삭제 등)
- Tanstack/react-query
  - 서버와의 통신 과정의 상태(loading, success 등) 및 서버 데이터 상태를 쉽게 관리
  - 무한스크롤에서 불러온 피드들을 쉽게 캐싱할 수 있음
- React-markdown
  - 피드를 마크다운 문법 파싱 및 렌더링 라이브러리
  - 다양한 플로그인을 쉽게 주입할 수 있어 추가 기능 확장에 용이함
- React-syntax-highlighter
  - react-markdown의 플러그인
  - 코드의 문법 하이라이트 기능을 제공
- Remark-gfm
  - react-markdown의 플로그인
  - 테이블, 태스크리스트 등의 마크다운 문법 파싱 기능 제공

## 구현한 기능

<table>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/62328599/234811145-1c72acdf-5929-4643-b5b6-7b30cf3c2108.gif"  alt="1" width = 360px ></td>
    <td>
      <div><b>메인페이지</b></div>
      <br>
      <div>- 무한스크롤로 피드들을 확인할 수 있다.</div>
      <div>- 첫 8개의 피드들을 넘기면 4개의 피드마다 광고가 나온다.</div>
      <div>- 피드 및 광고의 조회수를 확인할 수 있다.</div>
      <div>- 조회수는 사용자한테 100% 보여야만 증가한다.</div>
    </td>
  </tr> 
  <tr>
    <td><img src="https://user-images.githubusercontent.com/62328599/234810963-cff7f62d-585a-45d2-b0ad-f7375fea14e9.gif"  alt="1" width = 360px ></td>
    <td>
      <div><b>피드 작성 페이지</b></div>
      <br>
      <div>- 마크다운 문법으로 작성할 수 있다.</div>
      <div>- preview 탭을 통해 마크다운이 정상적으로 렌더링하는지 확인할 수 있다.</div>
      <div>- 피드에 글 작성 시 @을 이용하여 특정 username을 작성하면 링크를 통해 해당 사용자 페이지로 이동 가능하다.</div>
      <div>- 아이디, 비밀번호, 글을 작성하면 트윗하기 버튼이 활성화 된다.</div>
    </td>
  </tr>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/62328599/234811050-a0f04bae-1a5c-4114-83a1-88bd93eb52d6.gif"  alt="1" width = 360px ></td>
    <td>
      <div><b>피드 삭제 기능</b></div>
      <br>
      <div>- 피드 삭제 버튼을 누르고 알맞은 비밀번호를 작성하면 피드를 삭제할 수 있다.</div>
      <div>- 잘못된 비밀번호인 경우 비밀번호가 잘못되었음을 알린다.</div>
    </td>
  </tr>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/62328599/234811095-bdae19c0-4a1b-4b57-b5d1-ecad761f7c9d.gif"  alt="1" width = 360px ></td>
    <td>
      <div><b>사용자 찾기</b></div>
      <br>
      <div>- 아이디를 검색하여 해당 사용자의 페이지로 이동할 수 있다.</div>
    </td>
  </tr>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/62328599/234810894-50e65899-dcc4-4d66-a78d-5aaea093f63e.gif"  alt="1" width = 360px ></td>
    <td>
      <div><b>피드 공유</b></div>
      <br>
      <div>- 공유 버튼을 통해 해당 피드의 주소를 클립보드에 저장할 수 있다.</div>
      <div>- 클립보드로 저장한 피드의 주소를 통해 해당 피드의 페이지로 이동할 수 있다.</div>
    </td>
  </tr> 
</table>
