CREATE DATABASE "packd";

CREATE TABLE IF NOT EXISTS "trips" (
    trip_id SERIAL PRIMARY KEY,
    destination VARCHAR(255), 
    user_id INT
);

CREATE TABLE IF NOT EXISTS "packing_lists" (
    list_id SERIAL PRIMARY KEY,
    description VARCHAR(255),
    user_id INT,
    trip_id INT
);

CREATE TABLE IF NOT EXISTS "gen_lists" (
    list_id INT,
    user_id INT
);

CREATE TABLE IF NOT EXISTS "items" (
    item_id SERIAL PRIMARY KEY,
    item VARCHAR(255),
    quantity INT,
    list_id INT
);

CREATE TABLE IF NOT EXISTS "users" (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(30)
);