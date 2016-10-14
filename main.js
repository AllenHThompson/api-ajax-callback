//var root = 'https://careers.homedepot.com/'
var root = 'https://jsonplaceholder.typicode.com';
function posts() {
     $.ajax({
          url: root + '/posts/',
          method: 'GET'
     }).then(function(data) {
          for (var i = 0; i < data.length; i++) {
               console.log("id: " + data[i].id + ", " + "title: " + data[i].title);
          }
          console.log(data[0].id);
          console.log(data[1].id);
          console.log("userId: " + data.userId + ", " + "id: " + data.id + ", " + "title: " + data.title + ", " + "completed: " + data.completed);
     }, function(error) {
          console.log("error: " + error);
     });
}
//posts()
function todos() {
     $.ajax({
          url: root + '/todos',
          method: 'GET'
     }).then(function(data) {
          for (var i = 0; i < data.length; i++) {
               console.log("id: " + data[i].id + ", " + "title: " + data[i].title);
          }
          console.log(data)
          // console.log(data[0].id);
          // console.log(data[1].id);
     }, function(error) {
          console.log("error: " + error);
     });
}
//todos()

//another way to write an ajax request
$.ajax({
     url: root + '/todos/1',
     method: 'GET',
     success: function(data) {
          console.log(data);
     },
     error: function(error) {
          console.log("error: " + error);
     }
});
