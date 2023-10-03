Create table users(
userID int NOT NULL AUTO_INCREMENT,
LastName varchar(255) NOT NULL,
FirstName varchar(255),
Email varchar(255) NOT NULL,
PhoneNumber varchar(15),
password varchar(255),
PRIMARY KEY (userID));

CREATE TABLE airports(
airportID varchar(30),
country varchar(50),
city varchar (50),
PRIMARY KEY(airportID)
);

CREATE TABLE flightInformation(
flightID int NOT NULL AUTO_INCREMENT,
destinationAirportID varchar(10) NOT NULL,
originAirportID varchar(10) NOT NULL,
aircompany varchar(50),
departureTime DATETIME,
arrivalTime DATETIME,
totalNumbersOfSeats int,
reservedNumbersOfSeats int,
price int,
PRIMARY KEY (flightID),
FOREIGN KEY (destinationAirportID) REFERENCES airports(airportID),
FOREIGN KEY (originAirportID) REFERENCES airports(airportID)
);

CREATE TABLE orders(
orderID int NOT NULL AUTO_INCREMENT,
userID int NOT NULL,
PRIMARY KEY (orderID),
FOREIGN KEY (userID) REFERENCES users(userID)
);

CREATE TABLE reservedFlights(
orderID int NOT NULL,
flightID int NOT NULL,
quantity int NOT NULL,
FOREIGN KEY (orderID) REFERENCES orders(orderID),
FOREIGN KEY (flightID) REFERENCES flightInformation(flightID)
);