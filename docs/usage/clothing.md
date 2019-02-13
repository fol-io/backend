## Getting user wardrobe

Getting the wardrobe requires a valid user token in the header with the key 'token'.

```js
get('https://proj-fash.herokuapp.com/api/articles/get');

// with optional body part
get('https://proj-fash.herokuapp.com/api/articles/get/torso');
```

Response:

```json
{
    "articles": [
        {
            "outfits": [],
            "_id": "5c647e9a59303c30ca124ff1",
            "name": "hat",
            "bodyPart": "head",
            "user": "5c623a69df5c5f5cff44597c",
            "updatedAt": "2019-02-13T20:31:22.310Z",
            "createdAt": "2019-02-13T20:31:22.310Z",
            "__v": 0
        },
        {
            "outfits": [],
            "_id": "5c6478b95929b529954e010b",
            "name": "shirt",
            "bodyPart": "torso",
            "user": "5c623a69df5c5f5cff44597c",
            "updatedAt": "2019-02-13T20:06:17.166Z",
            "createdAt": "2019-02-13T20:06:17.166Z",
            "__v": 0
        },
        {
            "outfits": [],
            "_id": "5c6474f296305925234a9b62",
            "name": "jacket",
            "bodyPart": "torso",
            "user": "5c623a69df5c5f5cff44597c",
            "updatedAt": "2019-02-13T19:50:10.095Z",
            "createdAt": "2019-02-13T19:50:10.095Z",
            "__v": 0
        }
    ]
}


// with optional bodyPart set to 'torso'
{
  "articles": [
    {
      "outfits": [],
      "_id": "5c6478b95929b529954e010b",
      "name": "shirt",
      "bodyPart": "torso",
      "user": "5c623a69df5c5f5cff44597c",
      "updatedAt": "2019-02-13T20:06:17.166Z",
      "createdAt": "2019-02-13T20:06:17.166Z",
      "__v": 0
    },
    {
      "outfits": [],
      "_id": "5c6474f296305925234a9b62",
      "name": "jacket",
      "bodyPart": "torso",
      "user": "5c623a69df5c5f5cff44597c",
      "updatedAt": "2019-02-13T19:50:10.095Z",
      "createdAt": "2019-02-13T19:50:10.095Z",
      "__v": 0
    }
  ]
}
```
