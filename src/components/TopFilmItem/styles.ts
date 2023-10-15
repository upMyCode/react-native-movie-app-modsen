import styled from 'styled-components/native';

import {
  FilmInfoAuthorsProps,
  FilmInfoDescriptionProps,
  FilmInfoTitleProps,
  MoreButtonTitleProps,
  RankTitleProps,
} from './types';

export const Wrapper = styled.View`
  gap: 15px;
  flex-direction: row;
  min-height: 200px;
  margin: 15px 0;
`;

export const PosterContainer = styled.View`
  flex: 1;
`;

export const PosterImage = styled.Image`
  border-radius: 10px;
  flex: 1;
`;

export const FilmInfoContainer = styled.View`
  justify-content: space-between;
  padding: 5px 0;
  flex: 2;
`;

export const FilmInfoTitle = styled.Text<FilmInfoTitleProps>`
  font-size: 18px;
  font-family: 'Poppins-Bold';
  color: ${({ color }) => {
    return color;
  }};
`;

export const FilmInfoDescription = styled.Text<FilmInfoDescriptionProps>`
  font-size: 16px;
  font-family: 'Poppins-Light';
  color: ${({ color }) => {
    return color;
  }};
`;

export const FilmInfoAuthors = styled.Text<FilmInfoAuthorsProps>`
  font-size: 16px;
  font-family: 'Poppins-Light';
  color: ${({ color }) => {
    return color;
  }};
`;

export const RankContainer = styled.View`
  flex-direction: row;
  gap: 3px;
  align-items: center;
`;

export const RankTitle = styled.Text<RankTitleProps>`
  font-size: 18px;
  font-family: 'Poppins-Bold';
  color: ${({ color }) => {
    return color;
  }};
`;

export const MoreButtonTitle = styled.Text<MoreButtonTitleProps>`
  font-size: 11px;
  font-family: 'Poppins-Regular';
  color: ${({ color }) => {
    return color;
  }};
  line-height: 17px;
  margin-right: 4px;
`;
