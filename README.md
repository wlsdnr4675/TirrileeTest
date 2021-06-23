# TirrileeTest

1. 계획
 - 코딩 보실 분들은 DB에 데이터를 넣어놔도 못보기 때문에 리액트에서 데이터 관리를 해서 데이터베이스에 저장만 하는 서버 설계를 하자
 - 리액트 상태 관리는 리덕스 툴킷을 사용하고 서버와의 통신은 비동기 처리를 위해 리덕스 썬크를 사용하자.


2. 설계
 - DB : Mysql을 사용하였습니다. 
 - Server : Spring Boot를 사용하였고 JPA를 통해 DB와 ORM 하였습니다.
 - Client : 리액트 훅과 리덕스를 사용하여 상태관리를 하였습니다. 



3. 작업하면서 느낀점 및 개선 사항

 리액트 훅과 리덕스만 사용하여 상태를 관리하여 무상태를 유지 할려고 하였으나, 마지막 부분에서 전체 금액을 더하는 과정에서 함수형 컴포넌트 안에 배열의 리듀스 함수를 사용하였습니다. 이로 인해 무상태 컴포넌트가 깨져서 아쉽습니다.  시간이 조금 더 있었으면 고치고 싶습니다. 그리고 작성하다보니 컴포넌트들의 재사용성을 고려하지 못했습니다.맵함수를 통해 비슷한 jsx들을 최대한으로 줄이긴 하였지만  컴포넌트는 같고 데이터만 다른 컴포넌트들이 많이 있습니다. 이 부분을 고치고 싶습니다. 상태를 관리할때 리덕스와 훅만 가지고 관리해보니 상당히 지저분한 코드가 된것 같습니다. 라우터와 리덕스를 같이 사용하니 다른 컴포넌트로 렌더링 할때 마다 useSelector를 사용하여 리덕스의 상태를 가져와야했습니다. 작은 단위의 서비스를 작성할때는 리덕스가 상당히 불편하다는 것을 느꼈습니다.여러가지 옵션을 선택하는 컴포넌트에서 여러개를 체크하여 데이터를 디스패치하는 부분을 해결하는 데 상당한 시간을 소비했습니다. 이 문제의 해결방안은 useState에 값들을 넣어 놓고 체크 박스 클릭시 data-*,getAttribute 기능을 이용하여 리덕스스토어에 보내는 방안을 선택했습니다. 하지만 아직 뒤로가기를 눌렀을때나 체크박스 취소 시 상태를 지우는 로직은 만들지 못했습니다. 이부분은 추후에 다시 해볼 생각입니다. 마지막으로 아쉬운점은 디자인 입니다. 최대한 비슷하게 만들기 위해 노력했지만 몇가지 작동하지 않는 기능이 있습니다. 체크박스 입니다. 클릭하면 체크가 됬다는것을 표시해 주는 것을 해결 못했습니다. 아직 해결하지 못한 기능들과 디자인은  혹시 면접으로 불러주신다면 현직자로 어케 해결할 것인지 물어보고 싶습니다. 감사합니다.
