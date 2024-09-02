Live link Published:

https://scandiweb-react.netlify.app/

To test in local environment:

1. Clone the repository
2. Install dependencies in terminal with npm install
3. Open a new terminal and enter inside the PHP folder (from the root directory type cd PHP)
4. Start local server with the command php -S localhost:8000 and leave it open (if that port is occupied choose another. Axios request should be updated as well. Right now it is set up to endpoint on server and in need to be updated to axios.post('http://localhost:8000/') in pages/HomePage.jsx, to axios.post('http://localhost:8000/delete-products.php') in components/MassDeleteButton.jsx, to axios.post('http://localhost:8000//add-product-db.php') in components/SavBtn.jsx).
5. Using XAMPP or another method for creating a local MySQL database, make a database named scandiwweb and a table named react. You can use this SQL statement:
 CREATE TABLE react ( id INT(11) NOT NULL AUTO_INCREMENT, sku VARCHAR(255) NOT NULL, name VARCHAR(255) NOT NULL, price DECIMAL(10,2) NOT NULL, product_type ENUM('dvd', 'book', 'furniture') NOT NULL, size INT(10) DEFAULT NULL, weight INT(10) DEFAULT NULL, height INT(10) DEFAULT NULL, width INT(10) DEFAULT NULL, length INT(10) DEFAULT NULL, PRIMARY KEY (id), INDEX (sku) ).

Start the React app with npm run dev.

