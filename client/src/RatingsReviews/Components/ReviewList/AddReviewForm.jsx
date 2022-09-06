import React, { useState } from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import '../styles.css';
import CloudinaryUpload from './CloudinaryUpload.jsx';
import axios from 'axios';
import Auth from '../../../../../config.js'
const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp'

function AddReviewForm () {

  // Info
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');

  // Star
  let [starRate, setStarRate] = useState(null);
  let [starHover, setStarHover] = useState(null); // No Need ❌

  // Body
  let [reviewBody, setReviewBody] = useState('');
  let [bodyCount, setBodyCount] = useState(''); // No Need ❌

  // summary
  let [reviewSummary, setReviewSummary] = useState('');  // Optional

  // characteristics
  let [sizeChar, setSizeChar] = useState('');
  let [widthChar, setWidthChar] = useState('');
  let [comfortChar, setComfortChar] = useState('');
  let [qualityChar, setQualityChar] = useState('');
  let [lengthChar, setLengthChar] = useState('');
  let [fitChar, setFitChar] = useState('');

  // recommend
  let [recommend, setRecommend] = useState('');

  // photos
  let [photos, setPhotos] = useState([]); // Optional


  var axiosPost = () => {
    axios.post(`${API_URL}/reviews`,
      {
        product_id: 65651, // CHANGE, HARDCODE FOR NOW
        rating: starRate,
        summary: reviewSummary,
        body: reviewBody,
        recommend: recommend,
        name: name,
        email: email,
        photos: photos,
        characteristics: {},
      },
      {headers: Auth}
    )

  }


  let addFromCloud = (image) => {
    var copyArr = photos.slice()
    var add = copyArr.push(image)
    setPhotos(copyArr)
  }


  var bodyChange = (val, count) => {
    setReviewBody(val);
    setBodyCount(count);
  };

  var handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <ReviewForm>
      <MainHeader>Write Your Review</MainHeader>
      <ProductName>About Your {'{Product Name Here}'}</ProductName>
      <form>
        <Info>
          <Name>
            <InfoTitle>Name<Required> *</Required></InfoTitle>

            <input name="name" type="text" value={name} minlength="3" maxlength="60"
            onChange={(e) => setName(e.target.value)} required/>
          </Name>

          <Email>
            <InfoTitle>E-Mail<Required> *</Required></InfoTitle>
            <input name="email" type="email" value={email} minlength="3" maxlength="60"
            onChange={(e) => setEmail(e.target.value)} required/>
          </Email>
        </Info>

        <InfoTitle>Stars<Required> *</Required></InfoTitle>
        <Review>
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;

            return (
              <label key={i}>
                <input
                  className="add-star-rate"
                  type="radio"
                  // name="star-rating"
                  value={ratingValue}
                  onClick={() => setStarRate(ratingValue)}
                  required
                />

                <FaStar
                  className="add-star-rev"
                  color={ratingValue <= (starHover || starRate) ? "#ffc107" : "#e4e5e9"}
                  size={30}
                  onMouseEnter={() => setStarHover(ratingValue)}
                  onMouseLeave={() => setStarHover(null)}
                  required
                />
              </label>
            )
          })}
        </Review>
        <InfoTitle>Summary</InfoTitle>
        <Review>
          <input
            type="text"
            value={reviewSummary}
            minlength="10"
            maxlength="60"
            size="65"
            onChange={(e) => setReviewSummary(e.target.value)}
          />
        </Review>

        <InfoTitle>Review Body<Required> *</Required></InfoTitle>
        <Body>
          <textarea
            minlength="51"
            maxlength="1000"
            rows="10"
            cols="100"
            onChange={(e) => bodyChange(e.target.value, e.target.value.length)} required></textarea>
        </Body>
        {bodyCount <= 50 ? <Review>{50 - bodyCount} characters remaining</Review> :
        <Review>{bodyCount} / 1000</Review>}



        <Rec>
          <legend>Do you recommend this product?<Required> *</Required></legend>
          <div>
            <input type="radio" value="Yes" name="rec" required/>
            <label for="Yes">Yes</label>
          </div>
          <div>
            <input type="radio" value="No" name="rec" required/>
            <label for="No">No</label>
          </div>
        </Rec>


        <Characteristics>
          <div>
            <div>Size<Required> *</Required></div>
            <select value={sizeChar} onChange={(e) => setSizeChar(e.target.value)} required>
              <option value="">--Choose an option--</option>
              <option value="1">A size too small</option>
              <option value="2">½ a size too small</option>
              <option value="3">Perfect</option>
              <option value="4">½ a size too big</option>
              <option value="5">A size too wide</option>
            </select>
          </div>
          <div>
            <div>Width<Required> *</Required></div>
            <select value={widthChar} onChange={(e) => setWidthChar(e.target.value)} required>
              <option value="">--Choose an option--</option>
              <option value="1">Too Narrow</option>
              <option value="2">Slightly narrow</option>
              <option value="3">Perfect</option>
              <option value="4">Slightly wide</option>
              <option value="5">Too wide</option>
            </select>
          </div>
          <div>
            <div>Comfort<Required> *</Required></div>
            <select value={comfortChar} onChange={(e) => setComfortChar(e.target.value)} required>
              <option value="">--Choose an option--</option>
              <option value="1">Uncomfortable</option>
              <option value="2">Slightly uncomfortable</option>
              <option value="3">Ok</option>
              <option value="4">Comfortable</option>
              <option value="5">Perfect</option>
            </select>
          </div>
          <div>
            <div>Quality<Required> *</Required></div>
            <select value={qualityChar} onChange={(e) => setQualityChar(e.target.value)} required>
              <option value="">--Choose an option--</option>
              <option value="1">Poor</option>
              <option value="2">Below average</option>
              <option value="3">What I expected</option>
              <option value="4">Pretty great</option>
              <option value="5">Perfect</option>
            </select>
          </div>
          <div>
            <div>Length<Required> *</Required></div>
            <select value={lengthChar} onChange={(e) => setLengthChar(e.target.value)} required>
              <option value="">--Choose an option--</option>
              <option value="1">Runs Short</option>
              <option value="2">Runs slightly short</option>
              <option value="3">Perfect</option>
              <option value="4">Runs slightly long</option>
              <option value="5">Runs long</option>
            </select>
          </div>
          <div>
            <div>Fit<Required> *</Required></div>
            <select value={fitChar} onChange={(e) => setFitChar(e.target.value)} required>
              <option value="">--Choose an option--</option>
              <option value="1">Runs tight</option>
              <option value="2">Runs slightly tight</option>
              <option value="3">Perfect</option>
              <option value="4">Runs slightly long</option>
              <option value="5">Runs long</option>
            </select>
          </div>
        </Characteristics>


        <Photo>
          {/* {console.log('TEST IN FORM', photos)} */}
          <CloudinaryUpload addFromCloud={addFromCloud}/>
        </Photo>

        <SubButtWrap>
          <SubButt type="submit" value="Add Review!"/>
        </SubButtWrap>
      </form>
    </ReviewForm>
  )
}

export default AddReviewForm;


const MainHeader = styled.h1`
  display: flex;
  justify-content: center;
`;

const ProductName = styled.h4`
  display: flex;
  justify-content: center;
`;

const Characteristics = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0em 0em 1em 0em;
`;

const Rec = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: .5em 0em 1em 0em;
`;

const Required = styled.b`
  color: red;
`;

const Summary = styled.div`
  display: flex;
  margin: 0em 0em 1em 0em;
  //
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  line-height: 140%;
  // margin: 0em 0em 1em 0em;
`;

const Review = styled.div`
  display: flex;
  justify-content: center;
  margin: 0em 0em 1em 0em;
`;

const Name = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  // margin: 0px 10px 0px 10px;
  margin: .5em .5em .5em .5em;
`;

const Email = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  margin: .5em .5em .5em .5em;
  // margin: 0px 10px 0px 10px;
`;

const InfoTitle = styled.div`
  display: flex;
  justify-content: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0em 0em 1em 0em;
`;

const ReviewForm = styled.div`
  // display: flex;
  // place-content: center;
`;

const Photo = styled.div`
  display: flex;
  place-content: center;
  margin: 0em 0em 1em 0em;
`;

const SubButtWrap = styled.div`
  display: flex;
  place-content: center;
  margin: 1em 0em 1em 0em;
`;

const SubButt = styled.input`
  appearance: none;
  background-color: transparent;
  border: 2px solid #1A1A1A;
  border-radius: 15px;
  box-sizing: border-box;
  color: #3B3B3B;
  cursor: pointer;
  display: inline-block;
  // font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 5px 15px 5px 15px;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 20%;
  will-change: transform;
  &:disabled {
    pointer-events: none;
  }
  &:hover {
    color: #fff;
    background-color: #1A1A1A;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }
  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;