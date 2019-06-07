// get
function get(url) {
  return new Promise(function(succeed, fail) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.addEventListener('load', function() {
      if (request.status < 400) succeed(request.response);
      else fail(new Error('Request failed: ' + request.statusText));
    });
    request.addEventListener('error', function() {
      fail(new Error('Network error'));
    });
    request.send();
  });
}
get('http://localhost:8080/users.jsn')
  .then(function(response) {
    console.log(response);
    return JSON.parse(response);
  })
  .then(function(data) {
    console.log(data[0]);
  })
  .catch(function(error) {
    console.log('Error!!!');
    console.log(error);
  });

// post

function post(url, requestuestBody) {
  return new Promise(function(succeed, fail) {
    var request = new XMLHttpRequest();
    request.open('POST', url, true);
    request.setRequestHeader(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );
    request.addEventListener('load', function() {
      if (request.status < 400) succeed(request.responseText);
      else fail(new Error('Request failed: ' + request.statusText));
    });
    request.addEventListener('error', function() {
      fail(new Error('Network error'));
    });
    request.send(requestuestBody);
  });
}

var user = {
  name: 'Tom&Tim',
  age: 23
};
// данные для отправки
var params = 'name=' + user.name + '&age=' + user.age;

post('http://localhost:8080/postdata.php', params).then(
  function(text) {
    console.log(text);
  },
  function(error) {
    console.log(error);
  }
);
