import React, {Component} from 'react'
import Article from '../components/Article'

export class ArticleFeed extends Component {

  render() {
    return (
      <div>
        <h4>Article Feed</h4>
        {this.props.articles.map(a =>  
          <Article
            key={a.id} 
            article={a}
            collections={this.props.collections}
            addToCollection={this.props.addToCollection}
          /> 
        )}
      </div>
    )
  }

}

export default ArticleFeed
