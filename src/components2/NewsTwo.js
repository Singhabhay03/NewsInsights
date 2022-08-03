import React, { useContext, useEffect } from 'react'
import NewsItems from '../components/NewsItems'
import Spinner from '../components/Spinner';
import InfiniteScroll from 'react-infinite-scroll-component'
import myContext from '../context/newsContext';


const NewsTwo = (props) => {

 
  const { articles,  loading, totalResults, updateNews, fetchMoreData } = useContext(myContext)
  
  
  // eslint-disable-next-line
  useEffect(() => {  updateNews(props.category , props.apiKey) }, [])

  const handleNext = () => { fetchMoreData(props.category, props.apiKey) }

  return (
    <>

      <div style={{ backgroundColor: "Beige" }}>
        <h1 className='text-center' style={{ fontFamily: "'McLaren', cursive", fontWeight: "900", fontSize: "40px", color: "red" }}>Top Headlines</h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={handleNext}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className='row mx-3'>
            {articles.map((element) => {
              return <div className='col-md-4 my-1' key={element.url}>
                <NewsItems title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} />
              </div>
            })}

          </div>
        </InfiniteScroll>

      </div>
    </>
  )
}

export default NewsTwo
