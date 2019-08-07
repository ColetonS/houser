CREATE TABLE houses (
id SERIAL PRIMARY KEY,
property_name VARCHAR(30),
address VARCHAR(100),
city VARCHAR(100),
state VARCHAR(2),
zip INTEGER
);

SELECT * FROM houses;

INSERT INTO houses (name,address,city,state,zip)
VALUES('Laram', '123 Laram Rd', 'Orem', 'UT', 84320),
('Marla', '321 Marla St', 'Lehi', 'UT', 84320),
('Sucks', '50 Rona ln', 'Aurora', 'CO', 80014);