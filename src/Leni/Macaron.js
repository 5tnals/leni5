//Macaron.js

import React, { Component } from 'react' //react 모듈에 있는 Component 가져온다

/*export*/ class Macaron extends Component { //내가 만든 class는 최상위의 Component 기능을 상속 받을거야.. Macaron 기능확장
  render() {
    return (
      <div>Macaron</div>
    )
  }
}

export default Macaron //내보내야 사용가능



//함수형 컴포넌트 rfce
import React from 'react'

function Macaron(props) { //props택배도착
  console.log(props)
  return (
    <div>
      <h1>No.</h1>
      <h2>Name</h2>
      <img src="" alt=""/>
    </div>
    
  )
}

export default Macaron
