// import Macaron from "./Macaron"; //import Macaron 자동으로 안뜨면 적어줘야한다
// import cake from "./cake.json";


// function App() {
//   return (
//     <>
//     <div className="App">"안녕하세요!"</div> 
//     {cake.map(cake=>(
//       <Macaron
//       propsid={cake.id} //propsid라는 택배회사에 {cake.id}를 넣어 보낸다
//       propsname={cake.name} //props 형태로 보낸다
//       propsimages={cake.images}
//       />
//     ))}
  
    
//     </>
//   );
// }

export default App; 


import Macaron from "./Macaron";
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
export default App; //만든것을 내보내줘야 다른 곳에서 import하여 사용할 수 있다