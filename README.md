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




