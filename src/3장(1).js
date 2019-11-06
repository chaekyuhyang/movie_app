import React from 'react';
import PropTypes from "prop-types"

class App extends React.Component{
  
  // state : Object 이고 componet의 data를 넣을 공간이있다(내가 바꿀 데이터, 데이터는 변할수있음)
  state = {
    count : 0 
  }

  add = () => {
    console.log("add");
    //this.state.count++; count의 숫자는 변하지만 화면은 갱신되지 않는다. render()를 다시 호출하지 않는다
    //this.setState({count: this.state.count + 1});  // setState : state의 객체를 변경하고 변경한 부분만 render해준다
                                                     // this.state.count + 1 는 좋은 코드는 아니다 state에 의존하기 때문 몇가지 성능 문제 발생
    this.setState(current => ({count: current.count +1}))

  };
  minus = () => {
    console.log("minus")
    //this.state.count--;
    //this.setState({count: this.state.count -1});
    this.setState(current => ({count: current.count - 1}))
  }

  // react는 자동으로 class component의 render() 를 실행한다
  render(){
    return <div>
       <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus </button>
       </div>  
  }

}

export default App;
