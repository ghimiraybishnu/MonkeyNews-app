import React, { Component } from 'react'

export class NewsItem extends Component {

 
  render() {
   let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card">

  <img src={!imageUrl?"https://s.yimg.com/ny/api/res/1.2/0c4IwUJxjm7.FqjSWn.YIw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04NDc-/https://s.yimg.com/os/creatr-images/2019-09/37e4a6c0-d8db-11e9-bf7e-936f15a4e6a3":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">


    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>

    <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
  </div>

      </div>
    )
  }
}

export default NewsItem
