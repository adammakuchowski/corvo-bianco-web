import styled from 'styled-components'

export const ModalOverlayContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .7);
  z-index: 1000;
  opacity: 0;
  transition: opacity 0.6s ease;
  &.active {
    opacity: 1;
  }
`

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 10px;
  z-index: 1000;
  width: 60%;
  height: 90%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  opacity: 0;
  transition: opacity 0.6s ease;
  &.active {
    opacity: 1;
  }

  @media (max-width: 1773px) {
    width: 80%;
  }
`

export const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 30px;

  position: relative;
  right: 10px;
  top: 10px;
`

export const CloseButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: 670px) {
    justify-content: center;
    align-items: center;
  }
`

export const ModalImgContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 827px) {
    align-items: center;
  }

  @media (max-width: 670px) {
    display: none;
  }
`

export const ImgWrapper = styled.div`
  width: 250px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 827px) {
    width: 200px;
    height: 75%;
  }
`

export const ModalDataContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const DataHeaderWrapper = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 10px;

  opacity: 0;
  transform: translateY(50%);
  transition: all 1s ease;

  &.active {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 670px) {
    justify-content: center;
  }
`

export const DataHeader = styled.div`
  font-weight: 500;
  font-size: 40px;

  @media (max-width: 827px) {
    font-size: 30px;
    align-self: center;
  }
`

export const DataContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: start;
  margin-top: 40px;

  opacity: 0;
  transform: translateY(40%);
  transition: all 1s ease;

  &.active {
    opacity: 1;
    transform: translateY(0);
  }


  @media (max-width: 670px) {
    width: 240px;
    align-self: center;
  }
`

export const CounterContainer = styled.div`
  width: 100%;
  height: 18%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  opacity: 1;
  transform: translateY(40%);
  transition: all 1s ease;

  &.active {
    opacity: 1;
    transform: translateY(0);
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 670px) {
    width: 227px;
  }
`
