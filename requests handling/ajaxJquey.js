$.ajax({
  type: 'POST',
  url: '',
  data: JSON.stringify({
    // userGuid: JSON.parse(localStorage['tatenergo']).UserGuid,
    settings: settings
  }),
  headers: {
    'Content-Type': 'application/json',
    'Authorization-Token': '',
    Authorization: ''
  },
  success: function(data, status, jqXHR) {},
  error: function(data, status, jqXHR) {
    console.log('Error : ' + data.responseText + '; ' + data.statusText);
  }
});

$.ajax({
  type: 'GET',
  url: 'test.php',
  data: { name: 'Wayne', age: 27, country: 'Ireland' },
  success: function(data) {
    alert(data);
  }
});
