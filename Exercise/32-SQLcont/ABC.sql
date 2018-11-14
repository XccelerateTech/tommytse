
-- ====A=====
CREATE TABLE stock (
    id SERIAL primary key,
    quantity integer,
    price integer,
    citrus_id integer
);

INSERT INTO stock(quantity, price, citrus_id) VALUES (33,25,1);
INSERT INTO stock(quantity, price, citrus_id) VALUES (50,15,2);
INSERT INTO stock(quantity, price, citrus_id) VALUES (10,35,3);
INSERT INTO stock(quantity, price, citrus_id) VALUES (0,20,4);

CREATE TABLE citrus (
    id SERIAL primary key,
    name VARCHAR(30),
    color VARCHAR(30),
    taste VARCHAR(30)
);

INSERT INTO citrus(name, color, taste) VALUES ('lemon', 'yellow', 'sour');
INSERT INTO citrus(name, color, taste) VALUES ('orange', 'orange', 'juicy');
INSERT INTO citrus(name, color, taste) VALUES ('grapefruit', 'orange', 'bitter');
INSERT INTO citrus(name, color, taste) VALUES ('lime', 'green', 'sour');

SELECT SUM(stock.quantity) FROM stock
JOIN citrus
ON citrus.color = 'orange' AND stock.citrus_id = citrus.id;

-- =====B=====
SELECT * FROM stock 
JOIN citrus
ON stock.citrus_id = citrus.id;

-- ===C====== 
INSERT INTO citrus (name, color, taste) VALUES ('orange', 'orange', 'sweet'), ('lemon', 'yellow', 'sour'), ('lime', 'green', 'sour'), ('grapefruit', 'orange', 'bitter');

INSERT INTO stock (quantity, price, citrus_id) VALUES (200, 10,(SELECT id from citrus where name = 'orange')), (200, 10,(SELECT id from citrus where name = 'lemon')), (200, 10,(SELECT id from citrus where name = 'lime')), (200, 10,(SELECT id from citrus where name = 'grapefruit'));

BEGIN;
SET TRANSACTION ISOLATION LEVEL Serializable;
UPDATE stock 
SET quantity = quantity + 20
FROM citrus
WHERE stock.citrus_id = citrus.id AND citrus.name ='lemon';
COMMIT;

BEGIN;
SET TRANSACTION ISOLATION LEVEL Serializable;
UPDATE stock
SET quantity = quantity + 40
FROM citrus
WHERE stock.citrus_id = citrus.id AND citrus.name ='orange';
COMMIT;

BEGIN;
SET TRANSACTION ISOLATION LEVEL Serializable;
UPDATE stock
SET quantity = quantity + 25
FROM citrus
WHERE stock.citrus_id = citrus.id AND citrus.name ='lime';
COMMIT;

BEGIN;
SET TRANSACTION ISOLATION LEVEL Serializable;
UPDATE stock
SET quantity = quantity + 15
FROM citrus
WHERE stock.citrus_id = citrus.id AND citrus.name ='grapefruit';
COMMIT;

BEGIN;
SET TRANSACTION ISOLATION LEVEL Serializable;
SELECT quantity 
    FROM stock INNER JOIN citrus
        on stock.citrus_id = citrus.id
        WHERE name = 'lemon';
UPDATE stock
SET quantity = quantity - 30
FROM citrus
WHERE stock.citrus_id = citrus.id AND citrus.name ='lemon';
COMMIT;

BEGIN;
SET TRANSACTION ISOLATION LEVEL Serializable;
SELECT quantity 
    FROM stock INNER JOIN citrus
        on stock.citrus_id = citrus.id
        WHERE name = 'orange';
UPDATE stock
SET quantity = quantity -20
FROM citrus
WHERE stock.citrus_id = citrus.id AND citrus.name ='orange';
COMMIT;

BEGIN;
SET TRANSACTION ISOLATION LEVEL Serializable;
SELECT quantity 
    FROM stock INNER JOIN citrus
        on stock.citrus_id = citrus.id
        WHERE name = 'lime';
UPDATE stock
SET quantity = quantity - 20
FROM citrus
WHERE stock.citrus_id = citrus.id AND citrus.name ='lime';
COMMIT;

BEGIN;
SET TRANSACTION ISOLATION LEVEL Serializable;
SELECT quantity 
    FROM stock INNER JOIN citrus
        on stock.citrus_id = citrus.id
        WHERE name = 'grapefruit';
UPDATE stock
SET quantity = quantity - 10
FROM citrus
WHERE stock.citrus_id = citrus.id AND citrus.name ='grapefruit';
COMMIT;