import React, { useState } from 'react';
import styled from 'styled-components';


function AddReviewForm () {
  // create a bunch of state
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [starRate, setStarRate] = useState('');
  let [reviewSummary, setReviewSummary] = useState('');
  let [bodySummary, setBodySummary] = useState('');
  let [sizeChar, setSizeChar] = useState('');
  let [widthChar, setWidthChar] = useState('');
  let [comfortChar, setComfortChar] = useState('');
  let [qualityChar, setQualityChar] = useState('');
  let [lengthChar, setLengthChar] = useState('');
  let [fitChar, setFitChar] = useState('');
  let [recommend, setRecommend] = useState('');


  // handleChange ()

  // handle submit



  return (
    <div>
      <MainHeader>Write Your Review 🧑🏻‍🦲</MainHeader>
      <ProductName>About Your {'{Product Name Here}'}</ProductName>
      <form>
        <div>
          <div><label for="name">Name<Required> *</Required></label></div>
          <input name="name" type="text" value="" minlength="3" maxlength="60" />
        </div>

        <div>
          <div><label for="email">E-Mail<Required> *</Required></label></div>
          <input name="email" type="email" value="" minlength="3" maxlength="60" />
        </div>
        <div>Stars<Required> *</Required></div>

        <Review>Summary</Review>
        <Review>
          <input type="text" value="" minlength="10" maxlength="60" size="60"/>
        </Review>

        <Review>Review Body<Required> *</Required></Review>
        <Body>
          {/* include a counter */}
          <input type="text" value="" minlength="51" maxlength="1000" size="100"/>
        </Body>

        <Characteristics>
          <div>
            <div>Size<Required> *</Required></div>
            <select>
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
            <select>
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
            <select>
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
            <select>
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
            <select>
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
            <select>
              <option value="">--Choose an option--</option>
              <option value="1">Runs tight</option>
              <option value="2">Runs slightly tight</option>
              <option value="3">Perfect</option>
              <option value="4">Runs slightly long</option>
              <option value="5">Runs long</option>
            </select>
          </div>
        </Characteristics>

        <div>
          <Rec>
            <legend>Do you recommend this product?<Required> *</Required></legend>
            <div>
              <input type="radio" value="Yes" name="rec"/>
              <label for="Yes">Yes</label>
            </div>
            <div>
              <input type="radio" value="No" name="rec"/>
              <label for="No">No</label>
            </div>
          </Rec>
        </div>

        <div>
          📷 Upload Photo
        </div>

        <input type="submit" value="Add Review!"/>
      </form>
    </div>
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
`;

const Rec = styled.div`
  display: flex;
  flex-direction: row;
`;

const Required = styled.b`
  color: red;
`;

const Summary = styled.div`
  display: flex;
  // justify-content: center;
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  line-height: 140%;
`;

const Review = styled.div`
  display: flex;
  justify-content: center;
`;
// New Star