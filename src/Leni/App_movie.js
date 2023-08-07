import React, { Component } from 'react'
import Movie from './Movie'
export class App extends Component {
  state={
    isLoading:true,
    movies:[],
  }

  getMovies = () => {}
    const movies=axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count')


  componentDidMount(){
    this.getMovies();
    // setTimeout(()=>{
    //   this.setState({isLoading:false});
    // },6000);
  }
  render() {
    const{isLoading,movies} = this.state; //구조분해할당
    return (
      <section>
        {isLoading ?
        <div className='loader'>
          <span className='loader_text'>'Loading...'</span>
        </div> 
        :
        <div className='movies'>
          <Movie />
        </div>
        }
      </section>
    )
  }
}
export default App

import React from 'react'
function Movie() {
  return (
    <div className='movie'>
      <img src="" alt="" title="" />
      <div className='movie_data'>
        <h3 className='movie_title'>Movie</h3>
        <h4 className='movie_year'></h4>
        <ul className='movie_genres'>
          <li className='movie_genre'></li>
        </ul>
        <p className='movie_summary'></p>
      </div>
    </div>
  )
}
export default Movie