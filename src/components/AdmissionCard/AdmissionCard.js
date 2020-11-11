import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Card } from 'components/shared'

import Heart from 'assets/svg/heart.svg'
import Score from 'assets/svg/score.svg'
import Badge from 'assets/svg/badge.svg'

const CardHeaderWrapper = styled.div`
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
`

const OpenRoundWrapper = styled.div`
  display: flex;
`

const RoundWrapper = styled.div`
  display: flex;
  margin: 16px 0;
`

const OpenRound = styled.div`
  margin-right: 4px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? '#2ecc71' : '#d8d8d8')};
  color: white;
  width: 30px;
  height: 30px;
  line-height: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const RoundTitle = styled.div`
  font-size: 20px;
  font-weight: 300;
  color: #5f5f5f;
  margin-right: 16px;
`
const IconWrapper = styled.div`
  margin-right: 20px;
`

const HeaderContent = styled.div`
  flex: 1;
`

const HeaderTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #ff5a5a;
  line-height: 16px;
`

const HeaderSubTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #9b9b9b;
  margin-top: 8px;
`

const HeaderDesc = styled.div`
  font-size: 20px;
  font-weight: 300;
  color: #9b9b9b;
  margin-top: 10px;
`

const CurrentRoundTitleWrapper = styled.div`
  display: flex;
  margin: 16px 0;
`

const CurrentRoundTitle = styled.div`
  font-size: 16px;
  flex: 1;
  font-weight: 600;
  color: #ff5a5a;
`

const Button = styled.div`
  display: flex;
  padding: 8px 16px;
  border-radius: 16px;
  border: 1px solid #ff5a5a;
`

const ScoreWrapper = styled.div`
  display: flex;
  margin: 16px;
`

const YourScoreWrapper = styled.div``

const AllScoreWrapper = styled.div`
  display: flex;
  margin: 16px;
`

const AllScoreColumn = styled.div`
  flex: 1;
  text-align: center;
`

const ScoreTitle = styled.div`
  font-size: 12px;
  font-weight: 300;
`

const YourScore = styled.div`
  font-size: 42px;
  font-weight: 300;
`

const ScoreTab = styled.div`
  padding: 20px 0;
  font-size: 16px;
  color: #48b6a3;
  border-top: 1px solid #ccc;
`

const InterestWrapper = styled.div`
  padding: 20px 0;
  font-size: 12px;
  color: #9b9b9b;
  border-top: 1px solid #ccc;
`

function AdmissionCard(props) {
  const { width, data } = props
  return (
    <Card width={width}>
      <CardHeaderWrapper>
        <IconWrapper>{data?.icon}</IconWrapper>
        <HeaderContent>
          <HeaderTitle>{data?.faculty}</HeaderTitle>
          <HeaderSubTitle>{data?.major}</HeaderSubTitle>
          <HeaderDesc>{data?.university}</HeaderDesc>
        </HeaderContent>
        <Heart />
      </CardHeaderWrapper>
      <RoundWrapper>
        <RoundTitle>รอบที่เปิด</RoundTitle>
        <OpenRoundWrapper>
          <OpenRound active>1</OpenRound>
          <OpenRound active>2</OpenRound>
          <OpenRound>3</OpenRound>
          <OpenRound active>4</OpenRound>
          <OpenRound>5</OpenRound>
        </OpenRoundWrapper>
      </RoundWrapper>
      <div>
        <CurrentRoundTitleWrapper>
          <CurrentRoundTitle>รอบที่ 4 : Admission</CurrentRoundTitle>
          <Button>
            <div>แก้ไขคะแนน</div>
            <Score />
          </Button>
        </CurrentRoundTitleWrapper>
        <ScoreWrapper>
          <div style={{ flex: '1' }}>
            <Badge />
          </div>
          <YourScoreWrapper>
            <ScoreTitle>คะแนนของคุณคือ</ScoreTitle>
            <YourScore>{data?.yourScore}</YourScore>
          </YourScoreWrapper>
        </ScoreWrapper>
        <AllScoreWrapper>
          <AllScoreColumn>
            <YourScore>20,845</YourScore>
            <ScoreTitle>คะแนนต่ำสุด 60</ScoreTitle>
          </AllScoreColumn>
          <AllScoreColumn>
            <YourScore>21,345</YourScore>
            <ScoreTitle>คะแนนเฉลี่ย 60</ScoreTitle>
          </AllScoreColumn>
          <AllScoreColumn>
            <YourScore>23,415</YourScore>
            <ScoreTitle>คะแนนสูงสุด 60</ScoreTitle>
          </AllScoreColumn>
        </AllScoreWrapper>
        <ScoreTab>ดูสัดส่วนคะแนน</ScoreTab>
        <InterestWrapper>10 คนที่สนใจ</InterestWrapper>
      </div>
    </Card>
  )
}

AdmissionCard.propTypes = {
  data: PropTypes.object,
}

export default AdmissionCard
