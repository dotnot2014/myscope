// 检查是否为文章作者
ownsDocument = function(userId, doc) {
  return doc && doc.userId === userId;
}