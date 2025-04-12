import styled from '@emotion/styled'

const Title = styled.div`
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Gowun Dodum';
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  display: flex;
  width: 100%;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  white-space: pre-line;
`

export default function Greeting() {
  return (
    <Title>
      저희 두 사람, 하나가 되어
      <br />
      평생을 함께 걸어 가고자 합니다.
      <br />
      자리에 오셔서 새로운 시작을
      <br />
      축복해 주세요.
    </Title>
  )
}
