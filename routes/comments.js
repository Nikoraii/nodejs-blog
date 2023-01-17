const router = require("express").Router();
const Post = require('../models/Post');
const Comment = require('../models/Comment');

// CREATE Comment
router.post('/:postId/comments', (req, res) => {
  // INSTANTIATE INSTANCE OF MODEL
//   const comment = new Comment(req.body);
    const comment = new Comment({
        content: req.body.content,
        post_id: req.params.postId,
        username: req.body.username
    });

  // SAVE INSTANCE OF Comment MODEL TO DB
  comment
    .save()
    .then(() => Post.findById(req.params.postId))
    .then((post) => {
      post.comments.unshift(comment);
      return post.save();
    })
    .then(() => res.redirect('/api/posts/' + req.params.postId))
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router