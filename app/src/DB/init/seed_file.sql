DROP TABLE users;
--Delete drop table after testing is done
CREATE TABLE
IF NOT EXISTS users
(
    id SERIAL PRIMARY KEY,
    name VARCHAR
(20),
    userName VARCHAR
(40),
    email VARCHAR
(40),
    password VARCHAR
(40),
    profilePicture TEXT,
    education TEXT,
    experience TEXT,
    employment TEXT,
    hobbies TEXT,
    bio TEXT
);
INSERT INTO users
    (name, userName, email, password, profilePicture, education, experience, employment, hobbies, bio)
VALUES
    ('Brettly', 'Clawfield', 'Junk@Junk.com', 'passcode', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiSf5JeP0lztu-HWDUT6t5yLHo2UIjLJymDIS8r1rUa1RHDvV', 'DevSlam', '1 minute of Javascript', 'unemployeed forever', 'I love playin GAMES', 'no good bio');