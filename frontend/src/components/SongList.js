import React from "react";
import styled from "styled-components";
import SongListItem from "./SongListItem";

const SongList = (props) => {
  const { allSongs } = props;
  console.log(allSongs);

  return (
    <SongListWrapper>
      <SongListUl>
        {allSongs.map((song) => {
          return <SongListItem song={song} />;
        })}
      </SongListUl>
    </SongListWrapper>
  );
};

const SongListUl = styled.ul``;

const SongListWrapper = styled.div`
  margin: 40px 16px 20px 24px;
  height: 1000px;
  width: 1000px;
`;

export default SongList;

// return <SongListItem song={song} />;
