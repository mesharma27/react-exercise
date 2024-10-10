import styled from 'styled-components';
import {Input} from 'semantic-ui-react';
import allEmojis from "./resources/emojis.json";
import { useState } from 'react';
import { EmojiRow } from './EmojiRow';
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
    <SearchContainer>
    <Input
      fluid
    icon={"search"}
    placeholder="Search"
    onChange={(ab)=> {
      handleFilteredEmojis(ab.target.value)
    }}
    />
    <EmojiContainer>{
      filteredEmojis.map((emoji, index) => {
      return (
          <EmojiRow emoji={ emoji} key={index}/>
      )
      })}
    </EmojiContainer>
    </SearchContainer>
  </AppContainer>;
};

const AppContainer = styled.div`
margin-top: 200px;
    display: flex;
    justify-content: center
`;
const SearchContainer = styled.div`
  width: 50%;
`;
const EmojiContainer = styled.div`
    margin: 10px 0 0 0;
    padding:0 10px 0 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
border: 1px solid lightgrey;
    div:last-child {
        border-bottom: 0;
    }
`;


