import React from 'react';
import axios from "axios";
import PropTypes from "prop-types";
import Movie from "./Movie";

class App extends React.Component{
  
  // state : Object 이고 componet의 data를 넣을 공간이있다(내가 바꿀 데이터, 데이터는 변할수있음)
  state = {
    isLoading : true, 
    movies: []
  }

  getMovies = async () => { // async : 비동기 -> 기다려야 한다!
    // axios 함수를 이용해서 json 데이터를 받아온다. axios get()은 빠르지 않기 때문에 
    const {
      data: {
        data: {movies}
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");  // await : 기다릴 대상  
    // es6문법 가져온 데이터를 구조분해(movies만 추려냄... data.data.movies)
    console.log(movies);
    
    this.setState({movies, isLoading:false})  // es6문법 구조분해 대입 {movies(state의 movie) : movies(axios.get()의 movie}
  
  }


  // 처음에 render하면 호출되는 life cycle method = componentDidMount()
  // componetDisMount 함수가 끝날 때까지 약간 시간이 걸릴수 있으므로 async
  async componentDidMount(){
      this.getMovies();
  }

  // axios 사용 : faech위에 작은 layer (t설치 : mpm i axios)
  // yts api 사용 : https://yts.lt/api#list_movies // 여기서 json 데이터를 볼건디 가독성을 높이려면 크롬의 jsonview를 설치하기 바람
  // yts api는 불법적인 내용이 있어 자주 url이 바뀌므로 노마드가 개량한 yts proxy url을 사용하길 바람
  // 노마드 yts proxy api : https://yts-proxy.now.sh/list_movies.json 

  // react는 자동으로 class component의 render() 를 실행한다
  render(){
    const { isLoading, movies } = this.state;
    return <div> {isLoading ? "Loading..." : movies.map(movie => {
      return (
        <Movie 
           key={movie.id}
           id={movie.id} 
           year={movie.year} 
           title={movie.title} 
           summary={movie.summary} 
           poster={movie.medium_cover_image} 
        />
       );  
     })}
    </div>  
  }

}

export default App;
