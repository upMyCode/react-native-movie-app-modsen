const generateSeats = (rows: number, seatsPerRow: number) => {
  const seats = [];
  for (let row = 1; row <= rows; row += 1) {
    for (let seatNumber = 1; seatNumber <= seatsPerRow; seatNumber += 1) {
      seats.push({
        isAvailable: true,
        row,
        ticketId: '',
        seatNumber,
      });
    }
  }
  return seats;
};

export default generateSeats;
