## SCHEMA (PostgreSQL)

### CREATE TABLE - INSERT VALUES INTO TABLE

**Schema (MySQL v5.7)**

    CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    inventory INTEGER NOT NULL
    );

    INSERT INTO products (id, name, description, price, inventory)
    VALUES (1, 'Producto 1', 'Descripción del producto 1', 10.99, 100),
    (2, 'Producto 2', 'Descripción del producto 2', 19.99, 50),
    (3, 'Producto 3', 'Descripción del producto 3', 5.99, 200)

---

### LIST ALL

**Query #1**

    SELECT * FROM products;

| id  | name       | description                | price | inventory |
| --- | ---------- | -------------------------- | ----- | --------- |
| 1   | Producto 1 | Descripción del producto 1 | 10.99 | 100       |
| 2   | Producto 2 | Descripción del producto 2 | 19.99 | 50        |
| 3   | Producto 3 | Descripción del producto 3 | 5.99  | 200       |

---

### LIST BY PARAM

**Query #2**

    SELECT * FROM products WHERE price <= 10;

| id  | name       | description                | price | inventory |
| --- | ---------- | -------------------------- | ----- | --------- |
| 3   | Producto 3 | Descripción del producto 3 | 5.99  | 200       |

---

**Query #3**

    SELECT * FROM products WHERE description LIKE "%rojo%";

There are no results to be displayed.

---

### LIST BY MULTIPLE CONDITIONS

**Query #4**

    SELECT * FROM products WHERE price BETWEEN 5 AND 15 AND inventory > 50;

| id  | name       | description                | price | inventory |
| --- | ---------- | -------------------------- | ----- | --------- |
| 1   | Producto 1 | Descripción del producto 1 | 10.99 | 100       |
| 3   | Producto 3 | Descripción del producto 3 | 5.99  | 200       |

---

### LIST THOSE WHICH DON'T MATCH THE CONDITION

**Query #5**

    SELECT * FROM products WHERE description NOT LIKE "%azul%";

| id  | name       | description                | price | inventory |
| --- | ---------- | -------------------------- | ----- | --------- |
| 1   | Producto 1 | Descripción del producto 1 | 10.99 | 100       |
| 2   | Producto 2 | Descripción del producto 2 | 19.99 | 50        |
| 3   | Producto 3 | Descripción del producto 3 | 5.99  | 200       |

---

### UPDATE

**Query #6**

    UPDATE products SET price = 15.99 WHERE id = 1;

There are no results to be displayed.

---

**Query #7**

    SELECT * FROM products WHERE id = 1;

| id  | name       | description                | price | inventory |
| --- | ---------- | -------------------------- | ----- | --------- |
| 1   | Producto 1 | Descripción del producto 1 | 15.99 | 100       |

---

### DELETE

**Query #8**

    DELETE FROM products WHERE id = 2;

There are no results to be displayed.

---

**Query #9**

    SELECT * FROM products;

| id  | name       | description                | price | inventory |
| --- | ---------- | -------------------------- | ----- | --------- |
| 1   | Producto 1 | Descripción del producto 1 | 10.99 | 100       |
| 3   | Producto 3 | Descripción del producto 3 | 5.99  | 200       |

---
