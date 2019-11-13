import React from 'react'
import {Card} from 'react-bootstrap'

function Article(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.article.image_url}/>
      <Card.Body>
        <Card.Title><a href={props.article.url}>{props.article.title}</a></Card.Title>
        <Card.Text>
          <span>{props.article.author}</span><br/>
          <span>{props.article.publication_date}</span><br/>
          <br/>
          {props.article.description}
        </Card.Text>
        <form onSubmit={(event) => props.addToCollection(event, props.article.id)}>
          <select name='collection-name'>
            {props.collections.sort((a, b) => a.name.localeCompare(b.name)).map(c =>
              <option key={c.id} value={c.id}>{c.name}</option>
            )}
          </select>
          <input type='submit' value='Add to Collection'/>
        </form>
      </Card.Body>
    </Card>
  )
}

export default Article

// {/* <Dropdown>
//     <Dropdown.Toggle variant="success" id="dropdown-basic">
//         Add to a Collection
//     </Dropdown.Toggle>

//     <Dropdown.Menu>
//         {/* {props.collections.map(c => c.name)} */}
//         {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//         <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
//     </Dropdown.Menu>
// </Dropdown> */}