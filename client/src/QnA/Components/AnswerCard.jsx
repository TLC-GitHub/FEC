import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import styled from 'styled-components';
import {Button, Wrapper, AnswerCardContainer, Answer, AnswerInfo, AnswerStatus, ImageWrapper, Images} from './styles.jsx';

function AnswerCard({answer, setHelpfulCount}) {
  console.log(answer, 'answer');
  const [helpfulCountA, setHelpfulCountA] = useState(answer.helpfulness)
  const [helpfulClicked, setHelpfulClicked] = useState(false)
  const [reportStatus, setReportStatus] = useState(false)


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

    let requestBody = {
      widget: 'qa/questions',
      pathVariable: answer.answer_id,
      subCategory: 'report'
    }

    return axios.put('/put', requestBody)
      .then((success) => {
        setReportStatus(true);
        console.log('successfully reported answer');
      })
      .catch((err) => {
        console.log('error, could not report answer');
      })
  }



  return (
    <AnswerCardContainer>
      <Answer> {answer.body} </Answer>
      <ImageWrapper>
        {answer.photos
          ? answer.photos.map(photo => {
            return <Images src={photo.url} key={photo.id}></Images>})
          : null
        }
      </ImageWrapper>
      <Wrapper>
        <AnswerInfo> by
          {answer.answerer_name.toLowerCase() === 'seller'
            ? <b> {answer.answerer_name} </b>
            : answer.answerer_name}, {date}
        </AnswerInfo>
        <AnswerStatus>
            <Button onClick={handleAnswerReport}>
              <u>
                {!reportStatus
                  ? "Report Answer"
                  : "Reported"
                }
              </u>
            </Button>
            | ({helpfulCountA}) |
            <Button onClick={handleAnswerHelpful}><u> Yes </u></Button>
            Helpful? |
        </AnswerStatus>
      </Wrapper>
    </AnswerCardContainer>
  )
}


export default AnswerCard;