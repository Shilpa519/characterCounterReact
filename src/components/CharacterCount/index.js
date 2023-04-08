import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import {
  MainContainer,
  LeftContainer,
  LeftPara,
  Image,
  SecondContainer,
  SecondHeading,
  AdditionContainer,
  Input,
  AddButton,
  ValuesContainer,
  ValuePara,
  ValueCount,
  ListContainer,
} from './styledComponents'

class CharacterCount extends Component {
  state = {input: '', isTrue: false, addedList: []}

  onChangeInput = e => {
    this.setState({input: e.target.value})
  }

  onAddition = e => {
    e.preventDefault()
    const {input} = this.state
    if (input.length !== 0) {
      const p = {
        id: uuidv4(),
        name: input,
        len: input.length,
      }
      this.setState({isTrue: true, input: ''})
      this.setState(prevState => ({
        addedList: [...prevState.addedList, p],
      }))
    }
  }

  render() {
    const {input, isTrue, addedList} = this.state
    return (
      <MainContainer>
        <LeftContainer>
          <LeftPara>Count the characters like a Boss...</LeftPara>
          {isTrue ? (
            <ValuesContainer>
              {addedList.map(eachItem => (
                <ListContainer key={eachItem.id}>
                  <ValuePara>{eachItem.name}</ValuePara>

                  <ValueCount>: {eachItem.len}</ValueCount>
                </ListContainer>
              ))}
            </ValuesContainer>
          ) : (
            <Image
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png "
              alt="no user inputs"
            />
          )}
        </LeftContainer>
        <SecondContainer onSubmit={this.onAddition}>
          <SecondHeading>Character Counter</SecondHeading>
          <AdditionContainer>
            <Input
              type="text"
              placeholder="Enter the Characters here"
              value={input}
              onChange={this.onChangeInput}
            />
            <AddButton type="submit">Add</AddButton>
          </AdditionContainer>
        </SecondContainer>
      </MainContainer>
    )
  }
}

export default CharacterCount
