# Phonebook
Phoneook is a project which allows user to retrieve information (e.g Names, contact Numbers etc) from a database.

## Tech/Frameworks used

Phonebook is created using
* MYSQL Database
* Phpmyadmin
* Node server
### Installation
I used VS code for Ubuntu to build this project but you can use your desired platform.
#### For MYSQL server
Open your terminal and write following commands:
```console
sudo apt update
```
```c#
public class tanveer
```


```console
sudo apt upgrade
```
```console
sudo apt install mysql-server
```
* The system will download MYSQL packages and installs them on your machine.

Check your installation by running:
```console
mysql --version
```
Now run the following command:
```console
sudo mysql_secure_installation
```
* You will be prompted to enter a password and answer Y for VALIDATE PASSWORD componenet.
* Answer Y for all other components unless you want a different setting.

Login to MYSQL server by running:
```console
sudo mysql -u root -p
```
![image](https://user-images.githubusercontent.com/103660705/191687720-aed2104a-5be7-4018-88c3-f1cd665f25d4.png)

#### For Apache server
* To install apache server type:
``` console
sudo apt install apache2
```
* You can check if it's active or not by following command:
``` console
service apache
service apcache2 status
```
* You can use your browser to check it by typing your IP address.
![image](https://user-images.githubusercontent.com/103660705/191691829-c6539159-3455-436a-8b36-38588c0de89f.png)


#### For phpmyadmin installation:
* First install php using following command:
``` console
sudo apt install php
```
* For phpmyadmin:
``` console
sudo apt install phpmyadmin
```
* You will be prompted to select a server, hit space and press enter for apache2.
* Select No for configuring database.
* To check if phhpmyadmin is installed or not, open your browser and type:
* (Your IPaddress)/phpmyadmin
![image](https://user-images.githubusercontent.com/103660705/191691995-e02cee76-6eab-4e27-af19-20e23be8b486.png)

* You can use your username and password from MYSQL to login.
![image](https://user-images.githubusercontent.com/103660705/191692046-d6e0c80f-d1b4-4fb6-a3a1-4cf9bf6e0b4c.png)

#### NODE SERVER INSTALLATION
* Type the following command to install node.js server:
```console
sudo apt install nodejs
```
* Verify your installation using command:
```console
node --version
```
* It is also important to install Node Package Manager(npm) with Node.js.
* To install NPM and verify the installation, type the following commands:
```console
sudo apt install npm
npm --version
```
#### Installing other dependencies
* To install other dependencies type following commands in the terminal of VS code:
```console
npm install express
npm install body-parser
```
#### Running the PhoneBook.js project
* I used VS code to run the code, you can use your desired platform.
* Open VS code and navigate to PhoneBook.js
In the terminal type the following command:
```console
node Phonebook.js
```
* You will get following result:
![image](https://user-images.githubusercontent.com/103660705/191757587-ee8129b1-f2dc-40f9-a467-8d4949907008.png)


* Now open your desired browser and type:
```console
localhost:3000/PhoneBook
```
You will get following result:
![image](https://user-images.githubusercontent.com/103660705/191757662-68c4d4d0-ac94-4d27-8fa3-15786844382f.png)


* Now open the VS code again and check the Terminal
* The data will also be displayed there.
![image](https://user-images.githubusercontent.com/103660705/191757714-7684ca94-f037-41fe-b67e-99d8ccc2e0d6.png)

### NOTE: I have used my own MYSQL database and the data from it, you can create your own database and get the desired reults.

