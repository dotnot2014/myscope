
//初始化数据
if (Posts.find().count() === 0) {
  var now = new Date().getTime();

  // create two users
  var tomId = Meteor.users.insert({
    profile: { name: 'Tom Coleman' }
  });
  var tom = Meteor.users.findOne(tomId);
  var sachaId = Meteor.users.insert({
    profile: { name: 'Sacha Greif' }
  });
  var sacha = Meteor.users.findOne(sachaId);

  var telescopeId = Posts.insert({
    title: '数据如何驱动产品优化？',
    userId: sacha._id,
    author: sacha.profile.name,
    url: 'http://wiki.weijuju.com/news/4327.html',
    submitted: new Date(now - 7 * 3600 * 1000),
    commentsCount: 2,
    upvoters: [],
    votes: 0
  });

  Comments.insert({
    postId: telescopeId,
    userId: tom._id,
    author: tom.profile.name,
    submitted: new Date(now - 5 * 3600 * 1000),
    body: 'Interesting project Sacha, can I get involved?'
  });

  Comments.insert({
    postId: telescopeId,
    userId: sacha._id,
    author: sacha.profile.name,
    submitted: new Date(now - 3 * 3600 * 1000),
    body: 'You sure can Tom!'
  });

  Posts.insert({
    title: '烧钱！泡沫！谁将成为第二个倒闭的直播平台？',
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://www.chinaz.com/manage/2016/0528/535793.shtml',
    submitted: new Date(now - 10 * 3600 * 1000),
    commentsCount: 0,
    upvoters: [],
    votes: 0
  });

  Posts.insert({
    title: '网红经济，会是一种短命模式吗？',
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://www.huxiu.com/article/150412/1.html?f=index_top1',
    submitted: new Date(now - 12 * 3600 * 1000),
    commentsCount: 0,
    upvoters: [],
    votes: 0
  });
}


// //测试用-初始化数据
// if (Posts.find().count() === 0) {
//   var now = new Date().getTime();

//   // create two users
//   var tomId = Meteor.users.insert({
//     profile: { name: 'Tom Coleman' }
//   });
//   var tom = Meteor.users.findOne(tomId);
//   var sachaId = Meteor.users.insert({
//     profile: { name: 'Sacha Greif' }
//   });
//   var sacha = Meteor.users.findOne(sachaId);

//   var telescopeId = Posts.insert({
//     title: 'Introducing Telescope',
//     userId: sacha._id,
//     author: sacha.profile.name,
//     url: 'http://sachagreif.com/introducing-telescope/',
//     submitted: new Date(now - 7 * 3600 * 1000),
//     commentsCount: 2,
//     upvoters: [],
//     votes: 0
//   });

//   Comments.insert({
//     postId: telescopeId,
//     userId: tom._id,
//     author: tom.profile.name,
//     submitted: new Date(now - 5 * 3600 * 1000),
//     body: 'Interesting project Sacha, can I get involved?'
//   });

//   Comments.insert({
//     postId: telescopeId,
//     userId: sacha._id,
//     author: sacha.profile.name,
//     submitted: new Date(now - 3 * 3600 * 1000),
//     body: 'You sure can Tom!'
//   });

//   Posts.insert({
//     title: 'Meteor',
//     userId: tom._id,
//     author: tom.profile.name,
//     url: 'http://meteor.com',
//     submitted: new Date(now - 10 * 3600 * 1000),
//     commentsCount: 0,
//     upvoters: [],
//     votes: 0
//   });

//   Posts.insert({
//     title: 'The Meteor Book',
//     userId: tom._id,
//     author: tom.profile.name,
//     url: 'http://themeteorbook.com',
//     submitted: new Date(now - 12 * 3600 * 1000),
//     commentsCount: 0,
//     upvoters: [],
//     votes: 0
//   });

//   for (var i = 0; i < 20; i++) {
//     Posts.insert({
//       title: 'Test post #' + i,
//       author: sacha.profile.name,
//       userId: sacha._id,
//       url: 'http://google.com/?q=test-' + i,
//       submitted: new Date(now - i * 3600 * 1000 + 1),
//       commentsCount: 0,
//       upvoters: [],
//       votes: 0
//     });
//   }
// }
