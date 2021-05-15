import React from 'react'
import './style.css';


function UserCard(props) {
console.log(props.deleteUser)
    return(
                <div className="card">
  <div className="additional">
    
    <div className="user-card">
      <div className="level center">
        {props.user.username}
      </div>
      <img src="https://cdn3.iconfinder.com/data/icons/network-communication-vol-3-1/48/111-512.png" alt='user'/>
      <div className="points center">
        <button onClick={props.deleteUser}>Delete</button>
      </div>
    </div>
    <div className="more-info">
      <h1>{props.user.name}</h1>
      <h2>Company: {props.user.company.name}</h2>
      <p>{props.user.company.catchPhrase}.</p>
      
      {/* <div className="stats">
        <div>

          <div className="title">Awards</div>
          <i className="fa fa-trophy" />
          <div className="value">2</div>
        </div>
        <div>
          <div className="title">Matches</div>
          <i className="fa fa-gamepad" />
          <div className="value">27</div>
        </div>
        <div>
          <div className="title">Pals</div>
          <i className="fa fa-group" />
          <div className="value">123</div>
        </div>
        <div>
          <div className="title">Coffee</div>
          <i className="fa fa-coffee" />
          <div className="value infinity">∞</div>
        </div>
      </div> */}
      
      
    </div>
  </div>
  <div className="general">
    <h1>{props.user.name}</h1>
    <div className="coords">
        <span>User Name: {props.user.username}</span>
      </div>
    <div className="coords">
        <span>E-mail: {props.user.email}</span>
        
      </div>

      <div className="coords">
        <span>Address: {props.user.address.suite},{props.user.address.street}</span>  
      </div>
      <div className="coords">
        <span>{props.user.address.zipcode}</span>
      </div>

      <div className="coords">
        <span>{props.user.address.city}</span>
      </div>

      <div className="coords">
        <span>Phone: {props.user.phone}</span>
      </div>
      
    <span className="more">Mouse over the card for more info</span>
    
  </div>
</div>

    )
    
}

export default UserCard