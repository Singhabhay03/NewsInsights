import React from 'react'
import ImageSpinner from "../ImageSpinner.gif"
const Spinner = () => {
  return (
    <div className='text-center'>
      <img src={ImageSpinner} alt = "loading"/>
    </div>
  )
}

export default Spinner

// import React, { Component } from 'react'
// import NewsItems from './NewsItems'
// import Spinner from './Spinner';
// import PropTypes from 'prop-types';
// import InfiniteScroll from 'react-infinite-scroll-component'

// export class News extends Component {

//   static defaultProps = {
//     page: 15,
//     country: 'in',
//     category: "general"
//   }
//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//   }

//   constructor() {
//     super();
//     this.state = {
//       articles: [],
//       loading: false,
//       page: 1,
//       totalResults: 0

//     }
//   }
//   async updateNews() {
//     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dd1a8845f1a3481a984a01c6ba710aeb&page=${this.state.page}&pageSize=${this.props.pageSize}`
//     this.setState({ loading: true })
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     this.setState({
//       articles: parsedData.articles,
//       totalResults: parsedData.totalResults,
//       loading: false
//     });
//   }

//   async componentDidMount() {

//     this.updateNews()
//   }

//   // handlePrevClick = async () => {

//   //   this.setState({ page: this.state.page - 1 })
//   //   this.updateNews()
//   // }
//   // handleNextClick = async () => {

//   //   this.setState({ page: this.state.page + 1 })
//   //   this.updateNews()
//   // }
  
//   fetchMoreData = async ()=>{
// this.setState({ page: this.state.page + 1 })
// const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dd1a8845f1a3481a984a01c6ba710aeb&page=${this.state.page}&pageSize=${this.props.pageSize}`
//     this.setState({ loading: true })
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     this.setState({
//       articles: this.state.articles.concat(parsedData.articles),
//       totalResults: parsedData.totalResults,
//       loading: false
//     });

//   }

//   render() {

//     return (
//       <div className='container my-3'>
//         <h1 className='text-center'>Top Headlines</h1>
//         {/* {this.state.loading && <Spinner />} */}
//         <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length !== this.state.totalResults}
//           loader={<Spinner />}
//           >
//           <div className='row'>
//             {this.state.articles.map((element) => {
//               return <div className='col-md-4' key={element.url}>
//                 <NewsItems title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} />
//               </div>
//             })}

//           </div>
//         </InfiniteScroll>
        
//       </div>

//     )
//   }
// }

// export default News
