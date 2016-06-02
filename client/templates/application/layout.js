// Template.nav.rendered = function() {
//   if(!Meteor.user()) {
//     $('.login-link-text').text("Sign Up/Sign In");
//   } else {
//     $('#login-buttons-logout').before('<a href="/account" class="account-link button">My Account</a>');
//   }
// };

Template.layout.onRendered(function() {
  this.find('#main')._uihooks = {
    insertElement: function(node, next) {
      $(node)
        .hide()
        .insertBefore(next)
        .fadeIn();
    },
    removeElement: function(node) {
      $(node).fadeOut(function() {
        $(this).remove();
      });
    }
  }
});