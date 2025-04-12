import wedding from '../assets/images/wedding_title.jpg'
import styled from '@emotion/styled'
import {useEffect} from 'react'

const HeaderSection = styled.main`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 100%;
    flex-grow: 1;
    height: 100%;
    object-fit: cover;
    display: block;
    user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
  }
`

const Bottom = styled.div`
  padding: 30px 20px;
  text-align: center;
  font-family: 'Gowun Dodum', sans-serif;
`

const NameWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`

const Divider = styled.div`
  text-align: center;
  font-weight: bold;
  color: #555;
`

const Name = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: #555;
`

const DateTimeSection = styled.div`
  margin-top: 20px;
  font-size: 14px;
  line-height: 1.6;
  word-spacing: 10px;
  color: #555;
`

const PlaceSection = styled.div`
  margin-top: 10px;
  font-size: 20px;
  line-height: 1.6;
  color: #555;
`
export default function HeaderIndex() {
  useEffect(() => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }, [])

  return (
    <HeaderSection>
      <img src={wedding} alt={'이미지'} onContextMenu={(e) => e.preventDefault()} />
      <Bottom>
        <NameWrap>
          <div>
            <Name>임재민</Name>
          </div>
          <Divider>
            <div>/</div>
          </Divider>
          <div>
            <Name>전주현</Name>
          </div>
        </NameWrap>
        <DateTimeSection>
          <div>2025.9.20 SAT. 5:30 PM</div>
        </DateTimeSection>
        <PlaceSection>
          <div>세종대왕 기념관</div>
        </PlaceSection>
      </Bottom>
    </HeaderSection>
  )
}
