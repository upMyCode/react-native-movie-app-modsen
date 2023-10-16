import { SessionButtonDimensions } from '@constants/dimensions';
import TextStrings from '@constants/strings';
import { Recliner } from '@helpers/images';
import { countAvailableSeatsInSession } from '@helpers/workWithSeats';
import { SessionButtonDarkTheme } from '@theme/allThemes';
import { Image } from 'react-native';

import {
  AvailableSeatsContainer,
  AvailableSeatsDescription,
  CinemaText,
  SessionButtonContainer,
  TimeText,
  Wrapper,
} from './styles';
import { SessionButtonProps } from './types';

export default function SessionButton({
  chosenSessions,
  session,
  handleChooseSession,
}: SessionButtonProps) {
  return (
    <Wrapper>
      <SessionButtonContainer
        bgColor={SessionButtonDarkTheme.sessionButtonColor}
        bColor={SessionButtonDarkTheme.borderColor}
        bWidth={session.id === chosenSessions ? 3 : 0}
        onPress={() => {
          handleChooseSession(session.id);
        }}
      >
        <TimeText color={SessionButtonDarkTheme.color}>
          {`${session.timeStart} - ${session.timeEnd}`}
        </TimeText>
        <CinemaText color={SessionButtonDarkTheme.color}>
          {`CINEMA: ${session.cinema}`}
        </CinemaText>
        <AvailableSeatsContainer>
          <Image
            source={{ uri: Recliner }}
            width={SessionButtonDimensions.reclinerImageWidth}
            height={SessionButtonDimensions.reclinerImageHeight}
          />
          <AvailableSeatsDescription color={SessionButtonDarkTheme.color}>
            {countAvailableSeatsInSession(session)}
            {TextStrings.SessionButtonAvailableSeatsDescription}
          </AvailableSeatsDescription>
        </AvailableSeatsContainer>
      </SessionButtonContainer>
    </Wrapper>
  );
}
