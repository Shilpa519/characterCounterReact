import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  min-height: 100vh;
  max-height: 100%;
`
export const LeftContainer = styled.div`
  background-color: #ffc533;
  display: flex;
  flex-direction: column;
  width: 50%;
`

export const LeftPara = styled.h1`
  font-size: 28px;
  margin: 50px;
  font-weight: 600;
  color: #334155;
`
export const Image = styled.img`
  background-color: #ffbf1f;
  height: 80vh;
  width: 110vh;
`

export const SecondContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #0f172a;
  width: 50%;
  padding: 15px;
`

export const SecondHeading = styled.h1`
  font-weight: 600;
  font-size: 35px;
  color: #ffc533;
  text-align: center;
`
export const AdditionContainer = styled.div`
  display: flex;
`

export const Input = styled.input`
  padding: 10px;
  width: 450px;
  border-radius: 6px;
`

export const AddButton = styled.button`
  background-color: #ffbf1f;
  border-color: transparent;
  border-radius: 5px;
  margin-left: 15px;
  padding: 5px;
  width: 80px;
  cursor: pointer;
`

export const ValuesContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`

export const ValuePara = styled.p`
  color: #1e293b;
  font-size: 20px;
`
export const ValueCount = styled.p`
  color: #1e293b;
  font-size: 20px;
`

export const ListContainer = styled.li`
  display: flex;
`
