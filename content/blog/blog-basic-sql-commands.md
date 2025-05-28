# SQL Query Reference Guide

## Basic Queries

### 1. Simple SELECT Statements
```sql
-- Select all columns from a table
SELECT * FROM employees;

-- Select specific columns
SELECT first_name, last_name, salary FROM employees;

-- Select with distinct values
SELECT DISTINCT department FROM employees;
```

### 2. Filtering with WHERE Clause
```sql
-- Basic filtering
SELECT * FROM products 
WHERE price > 50;

-- Multiple conditions
SELECT * FROM orders 
WHERE status = 'Completed' AND total_amount > 100;

-- IN operator
SELECT * FROM customers 
WHERE country IN ('USA', 'Canada', 'Mexico');

-- BETWEEN operator
SELECT * FROM products 
WHERE price BETWEEN 10 AND 50;

-- LIKE for pattern matching
SELECT * FROM employees 
WHERE last_name LIKE 'Smith%';
```

## Intermediate Queries

### 3. Sorting and Limiting Results
```sql
-- ORDER BY for sorting
SELECT * FROM products 
ORDER BY price DESC;

-- Combine sorting and limiting
SELECT * FROM sales 
ORDER BY amount DESC 
LIMIT 10;

-- Multiple column sorting
SELECT * FROM employees 
ORDER BY department, salary DESC;
```

### 4. Aggregate Functions
```sql
-- COUNT rows
SELECT COUNT(*) AS total_employees FROM employees;

-- SUM of a column
SELECT SUM(salary) AS total_payroll FROM employees;

-- AVG, MIN, MAX
SELECT 
    AVG(price) AS average_price,
    MIN(price) AS lowest_price,
    MAX(price) AS highest_price 
FROM products;
```

### 5. Grouping Data
```sql
-- Basic GROUP BY
SELECT department, COUNT(*) AS employee_count 
FROM employees 
GROUP BY department;

-- GROUP BY with multiple aggregations
SELECT 
    department, 
    AVG(salary) AS avg_salary,
    COUNT(*) AS employee_count 
FROM employees 
GROUP BY department;

-- HAVING clause for filtering grouped results
SELECT department, AVG(salary) AS avg_salary 
FROM employees 
GROUP BY department 
HAVING AVG(salary) > 50000;
```

### 6. Joins
```sql
-- INNER JOIN
SELECT 
    orders.order_id, 
    customers.customer_name, 
    orders.order_date
FROM orders
INNER JOIN customers ON orders.customer_id = customers.customer_id;

-- LEFT JOIN
SELECT 
    employees.name, 
    departments.department_name
FROM employees
LEFT JOIN departments ON employees.department_id = departments.department_id;

-- Multiple JOIN
SELECT 
    orders.order_id,
    customers.customer_name,
    products.product_name
FROM orders
JOIN customers ON orders.customer_id = customers.customer_id
JOIN order_items ON orders.order_id = order_items.order_id
JOIN products ON order_items.product_id = products.product_id;
```

### 7. Subqueries
```sql
-- Subquery in WHERE clause
SELECT * FROM employees 
WHERE salary > (
    SELECT AVG(salary) 
    FROM employees
);

-- Subquery in SELECT
SELECT 
    product_name, 
    price, 
    (SELECT AVG(price) FROM products) AS average_product_price 
FROM products;
```

### 8. Window Functions
```sql
-- RANK employees within their department
SELECT 
    name, 
    department, 
    salary,
    RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS salary_rank
FROM employees;

-- Running total
SELECT 
    order_date, 
    amount, 
    SUM(amount) OVER (ORDER BY order_date) AS cumulative_sales
FROM sales;
```

### 9. Common Table Expressions (CTEs)
```sql
-- Basic CTE
WITH high_salary_employees AS (
    SELECT * FROM employees 
    WHERE salary > 75000
)
SELECT department, COUNT(*) AS high_earners
FROM high_salary_employees
GROUP BY department;

-- Multiple CTEs
WITH 
    department_sales AS (
        SELECT department_id, SUM(amount) AS total_sales
        FROM sales
        GROUP BY department_id
    ),
    top_departments AS (
        SELECT department_id
        FROM department_sales
        WHERE total_sales > 100000
    )
SELECT * 
FROM departments 
WHERE department_id IN (SELECT department_id FROM top_departments);
```

## Performance and Best Practices
- Always use indexes on columns frequently used in WHERE, JOIN, and ORDER BY clauses
- Avoid using SELECT * in production code
- Use EXPLAIN to analyze query performance
- Be cautious with subqueries and prefer JOINs when possible

## Database-Specific Notes
- MySQL and PostgreSQL have slight syntax variations
- Check documentation for specific implementation details
- Some advanced features may differ between databases