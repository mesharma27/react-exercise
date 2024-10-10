import styled from 'styled-components';

export const EmojiRow = ({emoji}) => {
  const {character, name, code} = emoji;
  return (
    <EmojiRowContainer>
      <EmojiAndName>
        <EmojiCharacter>{character}</EmojiCharacter>
        {name}
      </EmojiAndName>
      <div>{code}</div>
    </EmojiRowContainer>
  )
};

const EmojiRowContainer = styled.div`
    margin: 0 10px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
`
const EmojiAndName = styled.div`
    display: flex;
`

const EmojiCharacter = styled.div`
  padding: 0 5px;
    font-size: 20px;
`