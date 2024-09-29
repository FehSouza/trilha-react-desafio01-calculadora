import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #cacaca;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Result = styled.div`
  width: 100%;
  height: 80px;
  background-color: #1e90ff;
  border: 1px solid #cdcdcd;
  box-sizing: border-box;
`

export const OldValue = styled.span`
  min-height: 30px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 0 16px;
  color: #ffffff;
  font-size: 14px;
`

export const Content = styled.div`
  width: 50%;
  max-width: 300px;
  background-color: #ffffff;
  border: 1px solid #cdcdcd;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
