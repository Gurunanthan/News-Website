import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
export class NewsComponents extends Component {

  static defaultProps={
    country:"in",
    pageSize: 8,
    category:'general',
    
  }
  PropTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category:PropTypes.string
  }
  constructor() {
    super();
    this.state = {
      articles:[],
      loading: false,
      page:1
    };
  }

  async componentDidMount() {
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.newsApi}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
      let data = await fetch(url);
      this.props.setProgress(33.33);
      let parsedData = await data.json();
      this.props.setProgress(66.66);
      this.props.setProgress(100);
      this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults ,
        loading: true});
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle the error state if necessary
    }
  }
  
  
  handlePrevious = async () => {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.newsApi}&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
        this.setState({loading:false})
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        if(this.state.page <=1){
          this.setState({page:1});
        }
        else{

          this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: true
          });
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error state if necessary
      }
  }
  
  handleNext = async () => {
      try {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {
          // Handle the case when there are no more pages
          this.setState({page:Math.ceil(this.state.totalResults / this.props.pageSize)});
          return;
        }
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.newsApi}&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
        this.setState({loading:false})
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
          page: this.state.page + 1,
          articles: parsedData.articles,
          loading: true
        });
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error state if necessary
      }
    }
    // handlePagesize=(event)=>{
    //   this.props.pageSize=event.target.value;
    //   this.componentDidMount();
    // }
  
  render() {
    return (
      <>
        <div className={`container`}>
        {/* <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
          <option selected>Open this select menu</option>
          <option value="4" onClick={this.handlePagesize}>6</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select> */}


          <h1 className="text-center">News Guru -  <span style={{textTransform:'uppercase'}}>{this.props.category}</span></h1>
            {!(this.state.loading) &&<Spinner />}
          <div className="row mt-5 p-2" >
            {this.state.loading && this.state.articles.map((element) => {
              return (
                <div key={element.url} className="col-md-4">
                  <NewsItem
                    title={element.title}
                    Author={element.author}
                    description={!element.description?"Click the below button to find more":element.description + '...'}
                    newsURL={element.url}
                    URL={element.urlToImage}
                    publishedAt={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="container d-flex justify-content-between mb-5">
          <div className="btn btn-dark" disabled={this.state.page <=1 }onClick={this.handlePrevious}>&larr; Previous</div>
          <p className='text-muted'>Showing {this.state.page} out of {Math.ceil(this.state.totalResults / this.props.pageSize)}</p>
          <div className="btn btn-dark" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.handleNext}>Next &rarr;</div>
        </div>
        
      </>
    );
  }
}

export default NewsComponents;
