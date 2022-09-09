import React, { useState } from 'react';
import Moment from 'moment';
import  { Tile, User, U, Img, Response, Star, Recommends } from '../styles.jsx';
import { FaUser } from 'react-icons/fa';
import Images from './Images.jsx';
import axios from 'axios';
const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp';
import Auth from '../../../../../config.js'


function IndividualReviewTile ({ elem, body, date, helpfulness, photos, rating, recommend, response, reviewer_name, review_id, summary }) {
  let [helpful, setHelpful] = useState(false);
  let [wholeBody, setWholeBody] = useState(false);


  let time = Moment(date).format("MMMM D, YYYY");

  // create a axios put to update the helpfullness into the database


  // NEED THESE  VV

  // var updatedHelp = {
  //   body: body,
  //   date: date,
  //   helpfulness: helpfulness + 1,
  //   photos: photos,
  //   rating: rating,
  //   recommend: recommend,
  //   response: response,
  //   reviewer_name: reviewer_name,
  //   review_id: review_id,
  //   summary: summary
  // }

  // var updatedHelp = {
    // review_id: review_id,
    // helpfulness: helpfulness + 1
  // }

  // var axiosPut = (data) => {
  //   axios.put(`${API_URL}/reviews/:review_id/helpful?product_id=65651`, data, {headers: Auth})
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err))
  // }

  var updateHelp = () => {
    setHelpful(true)
    // axiosPut(updatedHelp)
    // console.log('updateHelp', updatedHelp)
  }


  return(
    <Tile>
      {/* {console.log('helpfulness, ', recommed)} */}
      {/* {console.log('elem, ', elem)} */}
      <div>
        <Star percentage={((rating/5) * 100) + '%'}>&#9733;&#9733;&#9733;&#9733;&#9733;</Star>
        <User><FaUser />&nbsp;{reviewer_name}, {time}</User>
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

      <Recommends>{recommend ? <b>&#10003; &nbsp;{' I recommend this product'}</b> : null}</Recommends>

      <div>
        {response ? <Response><b>Response from seller: </b><div>{response}</div></Response> : null}
      </div>
      <div>
        {photos.map((el, i) => {
          return <Images src={el.url} key={i} id={el.id}/>
        })}
      </div>
      <div>Was this review helpful?
        <> <U onClick={() => updateHelp()}>Yes</U> </>
        ({helpful ? helpfulness + 1 : helpfulness}) │
        <U onClick={() => alert('Thank you for reporting')}>Report</U>
      </div>
      <hr />
    </Tile>
  )
}

export default IndividualReviewTile;