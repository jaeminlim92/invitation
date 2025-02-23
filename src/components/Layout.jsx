import styled from "@emotion/styled";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: 100vh;
  padding-top: 40px;  // ✅ 너무 위로 붙지 않도록 여백 유지
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: clamp(320px, 90vw, 600px);  // ✅ 반응형으로 최대 너비 설정
  padding: 20px;
  background-color: white;  // ✅ 기본 흰 배경 유지
  box-shadow: none;  // ✅ 그림자 제거
  border-radius: 0;  // ✅ 모서리 둥글게 처리 제거
`;


const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <ContentWrapper>{children}</ContentWrapper>
    </LayoutContainer>
  );
};

export default Layout;
