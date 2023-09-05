import React from 'react'
import './ResumeCard.css'

function ResumeCard(props) {
  return (
    <div className="image-text-layout">
      <div className="image-container">
        <div className="row">
          <img src={props.image} alt={(props.company || props.school) + " Logo"}/>
        </div>
      </div>
      <div className="text-container">
        <p>
          <strong>{props.company || props.school}</strong> {props.company || props.school ? <br/>: null}
          {props.degree}{props.degree ? <br/>: null}
          {props.position}{props.position ? <br/>: null}
          {props.specialization}{props.specialization ? <br/>: null}
          {props.duration}{props.duration ? <br/>: null}
          {props.location}
        </p>
        <p>
          {props.description}
        </p>
      </div>
    </div>
  );
}

export default ResumeCard;