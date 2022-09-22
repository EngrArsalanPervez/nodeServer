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
* You can use your username and password from MYSQL to login.



