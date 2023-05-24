import styled from 'styled-components'

export const ProductCartOverlayContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .7);
  z-index: 1000;

  opacity: 0;
  transition: all 0.6s ease;
  &.active {
    opacity: 1;
  }
`

export const ProductCartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  transform: translate(0%, 0%);
  background-color: white;
  padding: 10px;
  z-index: 1000;
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  opacity: 0;
  transform: translateX(100%);
  transition: all 1s ease;

  &.active {
    opacity: 1;
    transform: translateY(0);
  }
`