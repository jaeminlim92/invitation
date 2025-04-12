import styled from '@emotion/styled'

const LayoutWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: dimgray;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContentWrapper = styled.main`
  width: 100%;
  max-width: 430px;
  background-color: #f5f3ed;
`

export default function Layout({children}) {
  return (
    <LayoutWrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </LayoutWrapper>
  )
}
