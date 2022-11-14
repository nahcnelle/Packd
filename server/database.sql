CREATE DATABASE "packd";

CREATE TABLE IF NOT EXISTS "trips" (
    trip_id SERIAL PRIMARY KEY,
    destination VARCHAR(255), 
    user_id INT references users(user_id)
);

CREATE TABLE IF NOT EXISTS "packing_lists" (
    list_id SERIAL PRIMARY KEY,
    description VARCHAR(255),
    trip_id INT references trips(trip_id)
);

CREATE TABLE IF NOT EXISTS "items" (
    item_id SERIAL PRIMARY KEY,
    item VARCHAR(255),
    quantity INT,
    list_id INT references packing_lists(list_id)
);

CREATE TABLE IF NOT EXISTS "users" (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(30)
);