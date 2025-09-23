function compareTime(arrivalTime, departureTime) {
    const arrival = new Date(arrivalTime);
    const departure = new Date(departureTime);

    if (isNaN(arrival) || isNaN(departure)) return false; // Check if parsing failed
    return arrival > departure; // true if arrival is later
}

module.exports = { compareTime };
