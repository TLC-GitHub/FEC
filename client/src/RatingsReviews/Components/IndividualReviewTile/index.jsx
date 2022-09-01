import React, { useState } from 'react';
import Moment from 'moment';
import  { Tile, User, U, Img, Response, Star } from '../styles.jsx';
import Modal from './Modal.jsx';
import useModal from './useModal.jsx';
import Images from './Images.jsx'


function IndividualReviewTile ({ body, date, helpfulness, photos, rating, recommend, response, reviewer_name, review_id, summary }) {
  let [helpful, setHelpful] = useState(false);
  let [wholeBody, setWholeBody] = useState(false);


  let time = Moment(date).format("MMMM D, YYYY");

  // create a function to update the helpfullness into the database

  // Modal for pictures

  return(
    <Tile>

      <div>
        <Star percentage={((rating/5) * 100) + '%'}>&#9733;&#9733;&#9733;&#9733;&#9733;</Star>
        <User>🗿{reviewer_name}, {time}</User>
      </div>
      <h2>
        {summary.length <= 60 ? <div>{summary}</div> :
        <div>{summary.split('').slice(0,60).join('')}...</div>
        }
      </h2>

      <div>{body.length <= 250 ? <div>{body}</div> : !wholeBody ?
        <div>
          {body.split('').slice(0, 250).join('')}... &nbsp; &nbsp;
          <U onClick={() => setWholeBody(!wholeBody)}>Show More</U>
        </div> :
        <div>
          {body}  &nbsp; &nbsp;
          <U onClick={() => setWholeBody(!wholeBody)}>Show Less</U>
        </div>}
      </div>




      <div>{recommend ? <b>&#10003; &nbsp;{' I recommend this product'}
</b> : null}</div>

      <div>
        {response ? <Response><b>Response from seller: </b><div>{response}</div></Response> : null}
      </div>
      <div>
        {photos.map((el, i) => {
          return <Images src={el.url} key={i} id={el.id}/>
        })}
      </div>
      <div>Was this review helpful?
        <> <U onClick={() => setHelpful(true)}>Yes</U> </>
        ({helpful ? helpfulness + 1 : helpfulness}) │
        <U onClick={() => alert('Thank you for reporting')}>Report</U>
      </div>
      <hr />
    </Tile>
  )
}

export default IndividualReviewTile;