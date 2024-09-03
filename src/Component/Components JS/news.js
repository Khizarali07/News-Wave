import React, { Component } from "react";
import Newsbox from "./newsbox";
import propTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class news extends Component {
  static defaultProps = {
    category: "Top Headlines",
    category_type:
      "top%20live-breaking%20news%20from%20all%20over%20the%20world",
  };
  static propTypes = {
    category: propTypes.string,
    category_type: propTypes.string,
    api_key: propTypes.string,
    setProgress:propTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    
    this.state = {
      mydata: "",
      articles: [],
      page: 0,
      pageHistory: [],
      loading: false,
      totalresult:0,
    };
  }

  async componentDidMount() {
    this.props.setProgress(0);
    let url = `https://newsdata.io/api/1/news?apikey=${this.props.api_key}&q=${this.props.category_type}&size=9`;
    this.setState({ loading: true });
    let response = await fetch(url);
  
    let data = await response.json();
    this.setState({
      mydata:data.nextPage,
      articles: data.results,
      loading: false,
      totalresult:data.totalResults,
    });
    console.log(this.state.mydata);
    this.props.setProgress(100);
  }

     fetchMoreData = async () =>{
      let url = await `https://newsdata.io/api/1/news?apikey=${this.props.api_key}&q=${this.props.category_type}&page=${this.state.mydata}&size=9`;
      
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);
      
      this.setState({
        mydata: data.nextPage,
        articles: this.state.articles.concat(data.results),
        totalresult:data.totalResults
    })
    console.log(this.state.mydata);
  }
  
  render() {
    // const handlePrev = async () => {
    //   let url = "";
    //   if (this.state.pageHistory.length - 2 <= -1) {
    //     url = `https://newsdata.io/api/1/news?apikey=${this.props.api_key}&q=${this.props.category_type}&size=9`;
    //   } else {
    //     url = `https://newsdata.io/api/1/news?apikey=${this.props.api_key}&q=${
    //       this.props.category_type
    //     }&page=${
    //       this.state.pageHistory[this.state.pageHistory.length - 2]
    //     }&size=9`;
    //   }
    //   this.setState({ loading: true });
    //   let response = await fetch(url);
    //   let data = await response.json();

    //   this.setState({
    //     articles: data.results,
    //     page: this.state.page - 1,
    //     loading: false,
    //   });
    //   this.setState((prevState) => ({
    //     pageHistory: prevState.pageHistory.slice(0, -1), // Remove the last element
    //   }));
    // };

    // const handleNext = async () => {
    //   let url = `https://newsdata.io/api/1/news?apikey=${this.props.api_key}=${this.props.category_type}&page=${this.state.mydata}&size=9`;
    //   this.setState({ loading: true });
    //   this.setState((prevState) => ({
    //     pageHistory: [...prevState.pageHistory, this.state.mydata],
    //   }));
    //   let response = await fetch(url);
    //   let data = await response.json();
    //   this.setState({
    //     mydata: data.nextPage,
    //     articles: data.results,
    //     page: this.state.page + 1,
    //     loading: false,
    //   });
    // };


    return (
      <>
          <h2 className="text-center margin">{this.props.category}</h2>
          {this.state.loading === true ? (
            <div className="d-flex justify-content-center align-items-center">
              <div className="spinner-border text-danger"></div>Loading ...
            </div>
          ) : (
            ""
          )}

          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalresult}
            loader={<div className="d-flex justify-content-center align-items-center">
              <div className="spinner-border text-danger"></div>Loading ...
            </div>}
          >
            <div className="container">
            <div className="row">
              {this.state.articles.map((elements) => {
                return (
                  <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <Newsbox
                      name={elements.source_name}
                      imgurl={elements.image_url}
                      title={elements.title}
                      description={
                        window.innerWidth <= 1000
                          ? elements.description === null ||
                            elements.description.length <= 150
                            ? elements.description
                            : elements.description.slice(0, 150)
                          : elements.description === null ||
                            elements.description.length <= 128
                          ? elements.description
                          : elements.description.slice(0, 128)
                      }
                      newsurl={elements.source_url}
                      date={elements.pubDate}
                    />
                  </div>
                );
              })}
            </div>
            </div>
          </InfiniteScroll>

        {/*<div className="container mt-3 d-flex justify-content-between">
          <button
            disabled={this.state.page <= 0}
            type="button"
            className="btn btn-dark"
            onClick={handlePrev}
          >
            &larr; Previous
          </button>
          <button 
          disabled={this.state.page === Math.floor(this.state.totalresult/9)}
          type="button" className="btn btn-dark" onClick={handleNext}>
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  }
}