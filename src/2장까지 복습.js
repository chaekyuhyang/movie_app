import React from 'react';
import PropTypes from "prop-types"

const foodILike=[
  {
    id : 1,
    name: "kimbbap",
    image: "http://recipe1.ezmember.co.kr/cache/recipe/2016/04/08/1d26c0444e724bca8ed271b24da0057a1.jpg",
    rating : 3
  },

  {
    id : 2,
    name: "samsam",
    image:"http://recipe1.ezmember.co.kr/cache/recipe/2015/06/04/4afe9ba373636ae9cc23dcae66bde6971.jpg",
    rating :1

  },

  {
    id : 3,
    name: "apple",
    image:"https://post-phinf.pstatic.net/MjAxNzAyMTRfMjgy/MDAxNDg3MDQ5MzU3MjE2.lfNsDH8cOcSOAt2tfIk2WJ0SI2KuDQHoKZglXQ3RKFIg.7ohLKNNPFPPWb8_XOuA5QFgmhZ3dfCi_XqgIVX3xXL4g.JPEG/%EC%82%AC%EA%B3%BC_%281%29.jpg?type=w1200"
    ,rating : 2
  }

]

function Food({name, picture, rating}){
  return <div> 
            <h1>I like {name} </h1>
            <h4>{rating}/5.0</h4>
            <img src={picture} alt={name}></img>
        </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
  // tate : ProTypes.string.isRequired 에러 발생... 없는거니깐

}

function renderFood(dish){
  return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />

}
function App() {
  return (
    <div>
      <h1>hello2</h1>
      <div>{foodILike.map(renderFood)}</div>
      <h2> 위와 아래는 같은거다! 위의방식 추천 </h2>
      <div>{foodILike.map(dish => (
            // key는 react내부에서 사용하는 거임.. 에러방지
            <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
           ))}
      </div>

    </div>
  );
}

export default App;
