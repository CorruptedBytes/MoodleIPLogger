# MoodleIPLogger
Log the IP of any moodle user by using manipulated HTML.
You can also get some default response headers.

## Disclaimer

This project is for educational purposes only.

We are not responsible for any illegal actions commited with this project.

## Installation

### Clone the repository

```
mkdir MoodleIPLogger
cd MoodleIPLogger
git clone https://github.com/SirLennox/MoodleIPLogger
```
### Install Node Packages

```
$ npm install
```

## Run the server

```
npm run start
```

## Use

You can put this HTML String everywhere HTML is allowed (like the Chat or your About Me)

```
<img src="https://<serverip>:<port>/log">
```

Notice: The **port** is defined in tbe **config.json** and may be changed.

Warning: **SOME PORTS NEED ADMINSTRATOR PERMISSIONS (like 80), JUST DO `sudo npm run start` INSTEAD OF `npm run start`**

## Note

**Please create an issue if the IPLogger isn't working anymore!**

