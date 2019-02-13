const auth = require('../auth/auth.controller');
const db = require('../database/database.controller');

const Article = require('../models/article');

function getUserArticles(token, bodyPart = null) {
  return new Promise((resolve, reject) => {
    auth.getUser(token, true, ['wardrobe']).then((user) => {
      if (bodyPart === null) {
        resolve(user.wardrobe);
      } else {
        const articles = [];
        for (let i = 0; i < user.wardrobe.length; i += 1) {
          if (user.wardrobe[i].bodyPart === bodyPart) {
            articles.push(user.wardrobe[i]);
          }
        }
        resolve(articles);
      }
    }).catch((error) => {
      reject(error.message);
    });
  });
}

// TODO: Add image support
function newArticle(token, body) {
  return new Promise((resolve, reject) => {
    auth.getUser(token, true).then((user) => {
      if (user !== null) {
        const article = new Article(body);

        article.user = user._id;

        db.save(article).then(() => {
          const wardrobe = user.wardrobe;
          wardrobe.unshift(article._id);

          db.update(auth.UserModel, user._id, {
            wardrobe
          }).then(() => {
            resolve(article);
          }).catch((error) => {
            reject(error.message);
          });
        }).catch((error) => {
          reject(error.message);
        });
      } else {
        reject('Unauthorized');
      }
    });
  });
}

module.exports = {
  getUserArticles,
  newArticle
};
