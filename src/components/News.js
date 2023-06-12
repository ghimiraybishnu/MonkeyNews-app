import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {

  static defaultProps = {
    country: 'us',
    pageSize: 5,
    category: 'General'
  }

    static propTypes = {
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string
    }


   
articles = [
    {
      "source": { "id": "reuters", "name": "Reuters" },
      "author": null,
      "title": "France stabbing: Four children wounded in Annecy knife attack - Reuters",
      "description": "Four toddlers and two pensioners were stabbed in a knife attack in the tranquil French mountain town of Annecy on Thursday and the government said the suspected assailant was a Syrian refugee.",
      "url": "https://www.reuters.com/world/europe/some-children-injured-by-knife-attack-french-town-annecy-minister-2023-06-08/",
      "urlToImage": "https://www.reuters.com/resizer/jJxV9KHf8FG79Ka7sDYmtV7SJhI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/OFTAQXWAJFNSJD5OYALG2YJ26A.jpg",
      "publishedAt": "2023-06-09T06:36:00Z",
      "content": "ANNECY, France, June 8 (Reuters) - Four toddlers and two pensioners were stabbed in a knife attack in the tranquil French mountain town of Annecy on Thursday and the government said the suspected ass… [+4146 chars]"
    },
    {
      "source": { "id": "the-washington-post", "name": "The Washington Post" },
      "author": "Hannah Knowles",
      "title": "Trump defiant, some 2024 presidential candidates silent after DOJ charges - The Washington Post",
      "description": "“It’s election interference at the highest level,” Trump said without evidence on Thursday night, echoing his response to his first indictment earlier this year in New York.",
      "url": "https://www.washingtonpost.com/politics/2023/06/08/trump-charges-reaction-2024/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/IAMBHCNWKVH5HBKSLZ2KJXQNPA.jpg&w=1440",
      "publishedAt": "2023-06-09T05:55:00Z",
      "content": "Comment on this story\r\nComment\r\nDonald Trump and his allies were defiant Thursday night in response to the Justice Departments decision to charge him in connection with classified documents found at … [+6872 chars]"
    },
    {
      "source": { "id": null, "name": "Fox Business" },
      "author": "Ken Martin",
      "title": "Binance.US suspends USD deposits after regulators crackdown - Fox Business",
      "description": "Binance.US, an arm of the world's largest crypto exchange, announced on Thursday in a tweet, that it would be suspending U.S. dollar deposits.",
      "url": "https://www.foxbusiness.com/markets/binance-us-suspends-usd-deposits-after-regulators-crackdown",
      "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/04/0/0/Binance-A.jpg?ve=1&tl=1",
      "publishedAt": "2023-06-09T05:41:19Z",
      "content": "The U.S. arm of the world's largest crypto exchange is suspending U.S. dollar deposits.\r\nBinance.US says its banking partners are preparing to pause fiat dollar withdrawal channels as early as June 1… [+1868 chars]"
    },
    {
      "source": { "id": null, "name": "CBS Sports" },
      "author": "",
      "title": "Belmont Stakes 2023: Odds, post positions, horses, draw for the 155th running of the Triple Crown finale - CBS Sports",
      "description": "Forte opened as the favorite among a field with contenders such as Preakness winner National Treasure and Tapit Trice",
      "url": "https://www.cbssports.com/general/news/belmont-stakes-2023-odds-post-positions-horses-draw-for-the-155th-running-of-the-triple-crown-finale/",
      "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/06/08/7c0169f0-75a5-4772-99d5-3e9a3941db7c/thumbnail/1200x675/d13057ca4e434f63a9c73f84dcef3e06/gettyimages-1402341090-1.jpg",
      "publishedAt": "2023-06-09T05:00:00Z",
      "content": "Despite concerns over air quality in New York, the 2023 Triple Crown is set to conclude Saturday with the 155th running of the Belmont Stakes. Forte, the Kentucky Derby favorite before being scratche… [+1779 chars]"
    }
  ]


  constructor(){
    super();
    console.log("i am a constructor from news component");
    this.state = {
      articles: this.articles,
      loading: false,
      page:1

    }
  }

 async componentDidMount(){
let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&s&category=${this.props.category}&apiKey=bb2801289fb54dbc8c3df1e8142f18fb&page=1&pageSize=${this.props.pageSize}`;
this.setState({loading: true});
let data = await fetch(url);  
let parsedData = await data.json()
console.log(parsedData);
this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false})
}

  
  handlePrevClick = async ()=>{
    console.log("previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&s&category=${this.props.category}&apiKey=bb2801289fb54dbc8c3df1e8142f18fb&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);  
    let parsedData = await data.json()
    console.log(parsedData);

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    })
    }
  
  
handleNextClick = async ()=>{
  console.log("Next");
 if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&s&category=${this.props.category}&apiKey=bb2801289fb54dbc8c3df1e8142f18fb&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
  let data = await fetch(url);  
    let parsedData = await data.json()
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false
    })
  }
}
    
  render() {
    return (
      <div className='container my-3'>
        <h1 className="text-center" style={{margin: '35px 0px'}} >NewsMonkey - Top Headlines!</h1>
        {this.state.loading && <Spinner/>}
         <div className='row'>
         {!this.state.loading && this.state.articles.map((element)=>{
         return <div className='col-md-4' key={element.url}>
        <NewsItem title={element.title} description={element.description} imageUrl= {element.urlToImage} newsUrl={element.url}/>
        </div>
         })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>


        </div>
      </div>
    )
  }
}

export default News
