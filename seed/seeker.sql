CREATE TABLE IF NOT EXISTS seeker (
    id SERIAL PRIMARY KEY,
    emailAddress VARCHAR(100) UNIQUE NOT NULL,
    emailConfirmed BOOLEAN DEFAULT FALSE,
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    password VARCHAR(100) NOT NULL,
    createdAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO
    seeker(emailAddress, firstName, lastName, password)
VALUES
    (
        'g.host@gmail.com',
        'Gary',
        'Host',
        '$2b$10$RkQSoUqiyHCvQ06/Ak7mEeBm0zFKtA2ucWRf9AvrU2Fe50fOXo5bi'
    );

INSERT INTO
    seeker(emailAddress, firstName, lastName, password)
VALUES
    (
        'your.mom@gmail.com',
        'Your',
        'Mom',
        '$2b$10$RkQSoUqiyHCvQ06/Ak7mEeBm0zFKtA2ucWRf9AvrU2Fe50fOXo5bi'
    );

INSERT INTO
    seeker(emailAddress, firstName, lastName, password)
VALUES
    (
        'estefanhu074@gmail.com',
        'estefan',
        'hu',
        '$2b$10$RkQSoUqiyHCvQ06/Ak7mEeBm0zFKtA2ucWRf9AvrU2Fe50fOXo5bi'
    );