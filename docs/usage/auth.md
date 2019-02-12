## Signing up

```js
post('https://proj-fash.herokuapp.com/api/auth/signup', {
    email,
    password
})
```
Successful Response:
```json
{
    "signup": "success",
    "token": "thisxxxis.axxxjson.webxxxtoken"
}
```
Email already in use:
```json
{
    "signup": "fail",
    "error": {
        "driver": true,
        "name": "MongoError",
        "index": 0,
        "code": 11000,
        "errmsg": "E11000 duplicate key error collection: test.users index: email_1 dup key: { : \"test@gmail.com\" }"
    }
}
```

## Logging in

```js
post('https://proj-fash.herokuapp.com/api/auth/login', {
    email,
    password
})
```
Successful Response:
```json
{
    "login": "success",
    "token": "thisxxxis.axxxjson.webxxxtoken"
}
```
Invalid username/password:
```json
{
    "login": "fail",
    "error": "Invalid username/password."
}
```