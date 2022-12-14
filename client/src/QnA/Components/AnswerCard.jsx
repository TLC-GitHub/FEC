import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import styled from 'styled-components';
import {Button, AnswerDetails, AnswerCardContainer, Answer, AnswerInfo, AnswerStatus, ImageWrapper, Images} from './styles.jsx';
import ExpandImageModal from './Modals/ExpandImageModal.jsx';





function AnswerCard({answer, setHelpfulCount}) {
  const [helpfulCountA, setHelpfulCountA] = useState(answer.helpfulness)
  const [helpfulClicked, setHelpfulClicked] = useState(false)
  const [reportStatus, setReportStatus] = useState(false)
  const [clickedImage, setClickedImage] = useState(null)

  useEffect(() => {
  }, [reportStatus, helpfulClicked])

  let date = moment(answer.date).format('MMMM Do YYYY')

  const handleAnswerHelpful = () => {
    if (!helpfulClicked) {

      let requestBody = {
        widget: 'qa/questions',
        pathVariable: answer.answer_id,
        subCategory: 'helpful'
      }

      return axios.put('/put', requestBody)
        .then((success) => {
          console.log('succesfully voted answer helpful');
          incrementHelpful();
        })
        .catch((err) => {
          console.log('error, could not vote on answer');
        })
    }
  }

  const incrementHelpful = () => {
    setHelpfulClicked(true);
    setHelpfulCountA(helpfulCountA + 1);
  }

  const handleAnswerReport = () => {
    if (!reportStatus) {
      let requestBody = {
        widget: 'qa/answers',
        pathVariable: answer.answer_id,
        subCategory: 'report'
      }

      return axios.put('/put', requestBody)
        .then((success) => {
          setReportStatus(!reportStatus);
          console.log('successfully reported answer');
          // console.log(answer);
        })
        .catch((err) => {
          console.log('error, could not report answer');
        })
    }
  }

  const expandImage = (e) => {
    setClickedImage(e.target.src);
  }


  return (
    <AnswerCardContainer>
      <Answer> {answer.body} </Answer>
      <ImageWrapper>
        {clickedImage
        ? <ExpandImageModal setClickedImage={setClickedImage} clickedImage={clickedImage}/>
        : null}
        {answer.photos
          ? answer.photos.map(photo => {
            return <Images src={photo.url} value={photo.url} key={photo.id} onClick={expandImage}></Images>})
          : null
        }
      </ImageWrapper>
        <AnswerInfo>
          <AnswerDetails>
            by &nbsp;
          {answer.answerer_name.toLowerCase() === 'seller'
            ? <b style={{fontSize: 18}}> {answer.answerer_name} </b>
            : answer.answerer_name}, {date}
          </AnswerDetails>
          <AnswerStatus>
              <Button onClick={handleAnswerHelpful}> | &nbsp; &nbsp; Helpful? <u> Yes </u> ({helpfulCountA})  &nbsp; |</Button>
              <Button onClick={handleAnswerReport}>
                &nbsp;
                &nbsp;
                <u>
                  {!reportStatus
                    ? "Report"
                    : "Reported"
                  }
                </u>
              </Button>
          </AnswerStatus>
        </AnswerInfo>
        <hr/>
    </AnswerCardContainer>
  )
}


export default AnswerCard;