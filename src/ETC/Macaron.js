//Macaron.js

//클래스형 컴포넌트 rce
// import React, { Component } from 'react'

// class Macaron extends Component {
//   render() {
//     return (
//       <div>Macaron</div>
//     )
//   }
// }

// export default Macaron

//함수형 컴포넌트(더 많이 씀) rfce

import React from 'react'

/*function Macaron(props){
  console.log(props);
  const {propsname,propsid,propsimage}=props; //구조분해할당:속성들을 쭉 나열하며 속성별로 할당해주는 것
  return (
    <div>
      <h1>No. {props.propsid}</h1>
      <h2>Name: {props.propsname}</h2>
      <img src={props.propsimage} alt={props.propsname} width={200} height={200} />
    </div>
  )
}*/
//위에 것 더 단순하게 처리하기
function Macaron({propsname,propsid,propsimage}) { //구조분해할당:속성들을 쭉 나열하며 속성별로 할당해주는 것){
  return (
    <div>
      <h1>No. {props.propsid}</h1>
      <h2>Name: {props.propsname}</h2>
      <img src={props.propsimage} alt={props.propsname} width={200} height={200} />
    </div>
  )
}

export default Macaron