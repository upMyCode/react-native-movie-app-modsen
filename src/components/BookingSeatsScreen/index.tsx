import {
  RootRouteProps,
  StackNavigation,
} from '@components/HomeStackScreen/types';
import { BookingSeatsScreenDimensions } from '@constants/dimensions';
import { mockFilmSessions } from '@constants/mockData';
import TextStrings, { SEAT_BUTTONS } from '@constants/strings';
import { Arrow, Calendar } from '@helpers/images';
import { formatDateToMMMDDDYYY } from '@helpers/workWithDate';
import {
  divideSeatsBySeatNumber,
  getFilmSessionsByDate,
  getId,
  isSeatInArray,
  updateSeatsInFilmSessions,
} from '@helpers/workWithSeats';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Button,
  CustomCalendar,
  ModalContainer,
  SeatInfo,
  SessionButton,
} from '@root';
import {
  getFilmSessions,
  handleBuyTicket,
  handleCreateSession,
} from '@src/api/filmAPI/filmApi';
import { FilmSession, Seat } from '@src/api/types';
import { BookingSeatsScreenDarkTheme } from '@theme/allThemes';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, StatusBar, View } from 'react-native';

import {
  ArrowIMG,
  BookButtonTitle,
  BookingContainer,
  BookingContainerSeatInfoText,
  BookingContainerSeatPriceInfoText,
  CalendarButtonContainer,
  DateContainer,
  DateInfo,
  inlineStyles,
  RedirectBackContainer,
  RedirectionArrowButton,
  RedirectionDescription,
  ScheduleContainer,
  ScheduleContainerTitle,
  SeatInfoContainer,
  SeatItem,
  SeatsContainer,
  SeatsInfo,
  SeatsTitle,
  Wrapper,
} from './styles';

export default function BookingSeatsScreen() {
  const [isVisibleCalendar, setVisibleCalendar] = useState<boolean>(false);
  const [pickedDate, setPickedDate] = useState<Date>(new Date());
  const [sessions, setSessions] = useState<FilmSession[]>([]);
  const [todaySessions, setTodaySessions] = useState<FilmSession[]>([]);
  const [chosenSession, setChosenSession] = useState<string>('');
  const [chosenSeats, setChosenSeats] = useState<Seat[]>([]);
  const navigation = useNavigation<StackNavigation>();
  const route = useRoute<RootRouteProps<'ChooseSeatsScreen'>>();
  const [seats, setSeats] = useState<[Seat[], Seat[]]>([[], []]);
  const chosenSeatsCount = chosenSeats ? chosenSeats.length : 0;
  const chosenSessionObject = sessions.find((session) => {
    return session.id === chosenSession;
  });
  const totalPrice = chosenSessionObject
    ? chosenSeatsCount * chosenSessionObject.coast
    : 0;
  const { movie } = route.params;

  const handleChooseSession = (sessionId: string) => {
    setChosenSession(sessionId);
  };

  const handleSetSessions = () => {
    getFilmSessions(movie.imdbid).then((result) => {
      if (result === null) {
        handleCreateSession(movie.imdbid, mockFilmSessions);
      } else {
        const currentSessions = getFilmSessionsByDate(result, pickedDate);
        if (currentSessions.length !== 0) {
          setSessions(result);
          handleChooseSession(currentSessions[0].id);
          setTodaySessions(currentSessions);
          setSeats(divideSeatsBySeatNumber(currentSessions[0].seats));
        }
      }
    });
  };

  const handleRedirectionToPreviusScreen = () => {
    navigation.goBack();
  };

  const handleCloseCalendar = () => {
    setVisibleCalendar(false);
  };

  const handleOpenCalendar = () => {
    setVisibleCalendar(true);
  };

  const handleSelectedDate = (date: string) => {
    setPickedDate(new Date(date));
  };

  useEffect(() => {
    handleSetSessions();
  }, []);

  useEffect(() => {
    if (sessions.length !== 0) {
      setTodaySessions(getFilmSessionsByDate(sessions, pickedDate));
    }

    if (todaySessions.length !== 0) {
      setSeats(
        divideSeatsBySeatNumber(
          todaySessions.find((session) => {
            return session.id === chosenSession;
          })!.seats
        )
      );
      setChosenSeats([]);
    } else {
      setSeats([[], []]);
    }
  }, [chosenSession, pickedDate]);

  const handlePressSeat = (inputSeat: Seat) => {
    if (chosenSeats && isSeatInArray(inputSeat, chosenSeats)) {
      const sortedSeats = chosenSeats.filter((seat) => {
        return !(
          seat.row === inputSeat.row && seat.seatNumber === inputSeat.seatNumber
        );
      });

      setChosenSeats(sortedSeats);
    } else if (inputSeat.isAvailable) {
      if (chosenSeats) {
        setChosenSeats([...chosenSeats, inputSeat]);
      } else {
        setChosenSeats([inputSeat]);
      }
    }
  };

  const renderSessionItem = ({ item }: { item: FilmSession }) => {
    return (
      <SessionButton
        handleChooseSession={handleChooseSession}
        session={item}
        chosenSessions={chosenSession}
      />
    );
  };

  const handleSetSeatColor = (seat: Seat): string => {
    if (chosenSeats && isSeatInArray(seat, chosenSeats)) {
      return BookingSeatsScreenDarkTheme.selected;
    }
    if (seat.isAvailable) {
      return BookingSeatsScreenDarkTheme.available;
    }

    return BookingSeatsScreenDarkTheme.reserved;
  };

  const renderSeatItem = ({ item }: { item: Seat }) => {
    return (
      <SeatItem
        onPress={() => {
          handlePressSeat(item);
        }}
        bgColor={() => {
          return handleSetSeatColor(item);
        }}
        bWidth={item.isAvailable ? 2 : 1}
        bColor={BookingSeatsScreenDarkTheme.borderColor}
      />
    );
  };

  const renderSeatInfoItem = ({ item }: { item: string }) => {
    return <SeatInfo text={item} />;
  };

  const onSubmitBuy = () => {
    if (chosenSeats.length !== 0) {
      const ticketId = getId();
      const updatedSessions = updateSeatsInFilmSessions(
        ticketId,
        sessions,
        chosenSession,
        chosenSeats
      );
      // For notification
      // const session = sessions.find((session) => {
      //   return session.id === chosenSession;
      // });
      handleCreateSession(movie.imdbid, updatedSessions);
      handleBuyTicket(
        ticketId,
        movie.imdbid,
        chosenSession,
        chosenSeats.length
      );
      setChosenSeats([]);
      handleSetSessions();
    }
  };

  return (
    <Wrapper>
      <StatusBar hidden={false} />
      <ModalContainer
        title={TextStrings.BookingSeatsScreenModalTitle}
        modalVisible={isVisibleCalendar}
        handleModalOnClose={handleCloseCalendar}
        width={BookingSeatsScreenDimensions.modalWidth}
        fSize={BookingSeatsScreenDimensions.modalFSize}
        fLineHeight={BookingSeatsScreenDimensions.modalFLineHeight}
      >
        <CustomCalendar
          selectedDate={pickedDate}
          onSelectDate={handleSelectedDate}
        />
      </ModalContainer>
      <RedirectBackContainer>
        <RedirectionArrowButton onPress={handleRedirectionToPreviusScreen}>
          <ArrowIMG source={{ uri: Arrow }} />
        </RedirectionArrowButton>
        <RedirectionDescription>
          {TextStrings.BookingSeatsScreenModalRedirections}
        </RedirectionDescription>
      </RedirectBackContainer>
      <ScheduleContainer>
        <DateContainer>
          <ScheduleContainerTitle>
            {TextStrings.BookingSeatsScreenSchedule}
          </ScheduleContainerTitle>
          <DateInfo>{formatDateToMMMDDDYYY(pickedDate)}</DateInfo>
        </DateContainer>
        <CalendarButtonContainer>
          <Button
            width={BookingSeatsScreenDimensions.imageWidth}
            height={BookingSeatsScreenDimensions.imageHeight}
            onPress={handleOpenCalendar}
          >
            <Image
              source={{ uri: Calendar }}
              width={BookingSeatsScreenDimensions.imageWidth}
              height={BookingSeatsScreenDimensions.imageHeight}
            />
          </Button>
        </CalendarButtonContainer>
      </ScheduleContainer>
      <FlatList
        contentContainerStyle={inlineStyles.todaySessionsFlatList}
        style={inlineStyles.flatList}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={todaySessions}
        renderItem={renderSessionItem}
        keyExtractor={(_item, index) => {
          return index.toString();
        }}
      />
      <SeatsTitle>{TextStrings.BookingSeatsScreenSeats}</SeatsTitle>
      <SeatsInfo>{TextStrings.BookingSeatsScreenScreen}</SeatsInfo>
      <SeatsContainer>
        <FlatList
          contentContainerStyle={inlineStyles.lFlatList}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          numColumns={4}
          data={seats[0]}
          renderItem={renderSeatItem}
          keyExtractor={(_item, index) => {
            return index.toString();
          }}
        />
        <FlatList
          contentContainerStyle={inlineStyles.rFlatList}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          numColumns={4}
          data={seats[1]}
          renderItem={renderSeatItem}
          keyExtractor={(_item, index) => {
            return index.toString();
          }}
        />
      </SeatsContainer>
      <SeatInfoContainer>
        <FlatList
          contentContainerStyle={inlineStyles.bottomFlatList}
          horizontal
          renderItem={renderSeatInfoItem}
          data={SEAT_BUTTONS}
          keyExtractor={(item) => {
            return item;
          }}
        />
      </SeatInfoContainer>
      <BookingContainer>
        <View>
          <BookingContainerSeatInfoText>
            {chosenSeats?.length} {TextStrings.BookingSeatsScreenSeats}
          </BookingContainerSeatInfoText>
          <BookingContainerSeatPriceInfoText>
            {totalPrice} $
          </BookingContainerSeatPriceInfoText>
        </View>
        <Button
          width={BookingSeatsScreenDimensions.buttonWidth}
          height={BookingSeatsScreenDimensions.buttonHeight}
          bRadius={BookingSeatsScreenDimensions.buttonBRadius}
          bgColor={BookingSeatsScreenDarkTheme.button}
          onPress={onSubmitBuy}
        >
          <BookButtonTitle>
            {TextStrings.BookingSeatsScreenModalBookNow}
          </BookButtonTitle>
        </Button>
      </BookingContainer>
    </Wrapper>
  );
}
