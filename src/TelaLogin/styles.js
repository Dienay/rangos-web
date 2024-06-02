import styled, {keyframes} from 'styled-components'  

const fade = keyframes`
from{
    opacity: 0;
    transform: scale(0.9);
  } to {
    opacity: 1;
    transform: scale(1);
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`

export const Login = styled.div`
  font-family: Roboto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 94vw;
  max-width: 350px;
  animation-name: ${fade};
  animation-duration: 1s;
`
export const LogoIcon = styled.img`
  width: 104px;
  height: 58px;
  object-fit: contain;
`
export const TitleEnter = styled.div`
  width: 360px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Title = styled.div`
  width: 360px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Text = styled.p`
  width: 296px;
  height: 18px;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: var(--black);
`

export const ViewPasswordIcon = styled.img`
  height: 24px;
  object-fit: contain;
  position: absolute;
  right: 24px;
  bottom: 32px;
  width: 24px;
`
