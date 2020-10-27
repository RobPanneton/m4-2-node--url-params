import React from "react";
import styled from "styled-components";

const SongListItem = (prop) => {
  const { song } = prop;

  return (
    <SongWrapper>
      <RankPlayDiv>
        <Rank>#{song.rank}</Rank>
        <Streams>({song.streams} streams)</Streams>
      </RankPlayDiv>
      <SongInfoDiv>
        <SongName>{song.title}</SongName>
        <ArtistName>
          <span>by {song.artist}</span>
        </ArtistName>
      </SongInfoDiv>
      <PublicationDiv>
        <PublicatoinDate>
          publication date: {song.publicationDate}
        </PublicatoinDate>
      </PublicationDiv>
    </SongWrapper>
  );
};

const SongWrapper = styled.li`
  height: 80px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid gray;
  margin: 10px 0;
  padding-bottom: 6px;
`;

const RankPlayDiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  max-width: 200px;
  width: 130px;
`;

const Rank = styled.h1``;

const Streams = styled.span`
  color: gray;
  font-size: 12px;
`;

const SongInfoDiv = styled.div`
  width: 500px;
`;

const SongName = styled.h4``;

const ArtistName = styled.h4`
  font-style: italic;
  opacity: 0.5;
`;

const PublicationDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  left: 500px;
`;

const PublicatoinDate = styled.span`
  font-family: "Roboto", sans-serif;
  opacity: 0.5;
`;

export default SongListItem;
