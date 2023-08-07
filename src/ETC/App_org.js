/*import Macaron from "./Macaron";
import cakes from "./cakes.json";

function App() {
  return (
    <>
      <div className="App">"안녕하세요"</div>
      {cakes.map(cake => (
        <Macaron
          propsid={cake.id}
          propsname={cake.name}
          propsimage={cake.images}
        />
      ))}
    </>
  );
}

export default App;*/

import React{Component}Macaron from "react";
import cakes from "./cakes.json";

function App() {
  return (
    <>
      <div className="App">"안녕하세요"</div>
      {cakes.map(cake => (
        <Macaron
          propsid={cake.id}
          propsname={cake.name}
          propsimage={cake.images}
        />
      ))}
    </>
  );
}

export default App;





class App extends Component {
  constructor(props) {
    super(props);
    console.log("construction 함수는 클래스형 컴포넌트가 생성할때 호출됨")
  }
//class 함수에서 사용되는 3가지의 life cycle 함수(생명주기함수)
  ComponentDidMount(){ //DidMount 컴포넌트가 화면에 잘 부착되었다
    console.log("함수는 컴포넌트가 처음 화면에 그려지면 실행되는 함수")//영화 api 불러오기
  }

  ComponentDidUpdate(){
    console.log("함수는 화면이 새로 그려지면 즉 업데이트 되면 실행되는 함수")
  }

  ComponentWillUnmount(){ //컴포넌트 제거할때
    console.log("함수는 컴포넌트가 죽을때 실행되는 함수")
  }

render

}
