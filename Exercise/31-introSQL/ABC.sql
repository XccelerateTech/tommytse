=========A========
CREATE TABLE stock (
    id SERIAL primary key,
    name VARCHAR(255) not null,
    description_text 
    quantity integer
    price real
);
=========B========
DROP TABLE stock
=========C========
SELECT first_name, last_name FROM employee WHERE salary BETWEEN 5000 AND 11000;
SELECT first_name, last_name FROM employee WHERE contract_length < 2;
INSERT INTO employee (employee_id,first_name,last_name,salary,contract_length) VALUES (3, 'Tom', 'Lee', 14000, 2);
INSERT INTO employee (employee_id,first_name,last_name,salary,contract_length) VALUES (3, 'Tommy', 'Yeung', 13000, 1);
UPDATE employee SET contract_length = 2, salary = 8000 WHERE employee_id = 4;
SELECT * FROM employee ORDER BY salary DESC;

