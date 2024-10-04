import styled from 'styled-components';
import {Input} from 'semantic-ui-react';
import allEmojis from "./resources/emojis.json";
import { useState } from 'react';

export const App = () => {


  const[filteredEmojis, setFilteredEmoji] = useState([]);

/*  const filterEmojis =*/
  const handleFilteredEmojis = (filterName) => {
    const filtered =  allEmojis.filter((emoji) => {
      return emoji.name.includes(filterName);
    })
    setFilteredEmoji(filtered);
  }

  return <AppContainer>
    <Input
      fluid
    icon={"search"}
    placeholder="Search"
    onChange={(ab)=> {
      handleFilteredEmojis(ab.target.value)
    }}
    />
    {
      filteredEmojis.map((emoji) => {
      return (
        <div>{emoji.name}{emoji.character}{emoji.code}</div>
      )
    })}
  </AppContainer>;
};
const AppContainer = styled.div`
margin: 100px 25%
`