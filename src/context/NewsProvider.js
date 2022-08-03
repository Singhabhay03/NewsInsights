import React from 'react'
import { useReducer } from 'react'
import myContext from './newsContext'
import reducer from './newsReducer'


const NewsProvider = (props) => {

    
    const initialState = {
        articles: [],
        loading: true,
        page: 1,
        totalResults: 0
    }
    const [{ articles, loading, page, totalResults }, dispatch] = useReducer(reducer, initialState)

    //******************Update news data */************************************ */
    const updateNews = async (newsCategory , apiKey) => {
        dispatch({ type: 'send_request', payload: [true,1] })
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${newsCategory}&apiKey=${apiKey}&page=1&pageSize=15`

        let data = await fetch(url);
        let parsedData = await data.json();
         dispatch({ type: 'request_finished', payload: false })
        dispatch({ type: 'set_data', payload: [parsedData.articles, parsedData.totalResults] })
       
    }
    //***************************************************************************************** */
    //*****************Fetch more data */
    const fetchMoreData = async (newsCategory , apiKey) => {
        dispatch({ type: 'update_request', payload: page + 1 })

        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${newsCategory}&apiKey=${apiKey}&page=${page + 1}&pageSize=15`

        let data = await fetch(url);
        let parsedData = await data.json();
        dispatch({ type: 'request_finished', payload: false })
        dispatch({ type: 'set_data', payload: [articles.concat(parsedData.articles), parsedData.totalResults] })

        
    }
    //******************************************************************************************* */
    return (
        <>
            <myContext.Provider value={{ articles, loading, page, totalResults, updateNews, fetchMoreData }}>
                {props.children}
            </myContext.Provider>
        </>
    )
}

export default NewsProvider
