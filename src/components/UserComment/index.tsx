import { UserCommentDimensions } from '@constants/dimensions';
import getTimeAgo from '@helpers/getTimeAgo';
import { UserProfile } from '@helpers/images';
import React from 'react';
import { Image } from 'react-native';

import {
  CommentDescription,
  Time,
  UserCommentInfoContainer,
  UserInfo,
  UserInfoContainer,
  Wrapper,
} from './styles';
import { CommentProps } from './types';

export default function UserComment({ comment, userData }: CommentProps) {
  return (
    <Wrapper>
      <Image
        source={{ uri: UserProfile }}
        width={UserCommentDimensions.userProfileImageWidth}
        height={UserCommentDimensions.userProfileImageHeight}
      />
      <UserCommentInfoContainer>
        <UserInfoContainer>
          <UserInfo>{`${userData?.username ?? ''} ${
            userData?.usersurname ?? ''
          }`}</UserInfo>
          <Time>{getTimeAgo(comment.currentDate)}</Time>
        </UserInfoContainer>
        <CommentDescription>{comment.comment}</CommentDescription>
      </UserCommentInfoContainer>
    </Wrapper>
  );
}
