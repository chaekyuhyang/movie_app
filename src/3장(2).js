import React from 'react';
import PropTypes from "prop-types"


class App extends React.Component{
  
  // state : Object 이고 componet의 data를 넣을 공간이있다(내가 바꿀 데이터, 데이터는 변할수있음)
  state = {
    isLoading : true 
  }
  // 처음에 render하면 호출되는 life cycle method = componentDidMount()
  componentDidMount(){
    setTimeout(()=>{
        this.setState({isLoading: false});
    
    }, 6000);
  }

  // react는 자동으로 class component의 render() 를 실행한다
  render(){
    const { isLoading } = this.state;
    return <div> {isLoading ? "Loading" : "We are ready"} </div>  
  }

}

export default App;
