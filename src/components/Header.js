import React from 'react'
import {Button} from 'react-bootstrap'

function Header(props) {
  return (
    <div style={{
      padding: '10px', 
      display: 'flex', 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      color: '#a9bad6',
      textShadow: '2px 2px 6px #becde6',
      backgroundColor: '#4f5661',
      backgroundSize: 'cover', 
      backgroundAttachment: 'fixed'
      }}>
      <h1>Topical</h1>
      {props.token ?
        <span>
          <pre style={{color: '#a9bad6'}}>Welcome to Topical, {props.userName}!</pre>
          <Button variant='info' style={{float: 'right'}} onClick={props.logOutClicked}>Log Out</Button>
        </span> :
          null
      }
      
    </div>
  )
}

export default Header

