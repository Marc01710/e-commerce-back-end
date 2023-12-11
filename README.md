# e-commerce-back-end

## Description
This project is the back end for an e-commerce website, built using Express.js and Sequelize to interact with a MySQL database. It allows the user to manage categories, products, and tags for an online store.

The motivation behind this project is to create a functional back end for an e-commerce website, using the latest technologies and best practices in web development. This will enable the company to compete effectively in the growing e-commerce industry.

This project solves the problem of managing and organizing product data in an e-commerce platform. By providing API routes to create, read, update, and delete categories, products, and tags, it allows for efficient management of the online store's inventory.

Through this project, I learned how to set up a Sequelize-based Express.js API, create and associate database models, use environment variables to store sensitive data, and implement RESTful CRUD operations for managing data.

## Installation
To install and run the application, follow these steps:

1. Clone the repository to your local machine.

2. Navigate to the project directory in the terminal.

3. Run the following command to install the required dependencies: npm install

4. Create a .env file in the root directory and add your MySQL database details as follows:
- DB_NAME=your_database_name
- DB_USER=your_mysql_username
- DB_PASSWORD=your_mysql_password

5. Set up your MySQL database by executing the SQL commands provided in the seeds.sql file. This will create the necessary tables and populate them with sample data.

6. Update the database connection configuration in the server.js file with your MySQL credentials.

7. Seed the database by running the following command line: node seeds/index.js

7. Start the application server by running the following command: npm start

GitHub Repository Link: https://github.com/Marc01710/e-commerce-back-end

Link to walkthrough video: https://drive.google.com/file/d/1i37KsfEmVw0vbjGe-V0JMWyojPUS_qnm/view