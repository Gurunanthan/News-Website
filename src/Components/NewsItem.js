import React, { Component } from 'react';
// import loading from './Spinner.js';
export class NewsItem extends Component {
  render() {
    const { title, description, URL, newsURL ,publishedAt,Author} = this.props;
    return (
      
      description && (
        <div className="card my-5" >
          <img
            src={
              !URL ? 'https://img.etimg.com/thumb/msid-101102496,width-1070,height-580,imgsize-91161,overlay-etmarkets/photo.jpg': URL
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
      
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className='card-text'><small>-By {!Author?'Unkown':Author} on {new Date(publishedAt).toGMTString()}</small> </p>
          
            <a
              href={newsURL === null ? 'Details not found' : newsURL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      )
    );
  }
}

export default NewsItem;
