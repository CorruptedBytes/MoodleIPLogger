
# MoodleIPLogger
Log the IP of any Moodle User by using manipulated HTML.

You can also get some default response headers.

## Disclaimer

This project is for educational purposes only.

We are not responsible for any illegal actions commited with this project.

## Installation

### Clone the repository

```
cd MoodleIPLogger
git clone https://github.com/SirLennox/MoodleIPLogger
```
### Install Node Packages

```bash
$ npm install
```

## SetUp Configuration

You can edit values like port or webhook-url.
in the `config.json`

Output types:
- webhook: send to Discord webhook
- console: log into console

## Run the server

```bash
$ sudo npm run start
```

## Use

You can put this HTML String everywhere HTML is allowed (like the Chat or your About Me)

```html
<img src="https://<serverip>:<port>/<urlpath>">
```

Notice: The **port** is defined in tbe **config.json** and may be changed.


## Note

**Please create an issue if the IPLogger isn't working anymore!**

