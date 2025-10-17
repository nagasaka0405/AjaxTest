$(function(){
    $('#fetchDataButton').on('click', function() {
        var userId = Math.floor(Math.random() * 10) + 1;

        $.ajax({
           url: 'https://jsonplaceholder.typicode.com/users/' + userId,
           method: 'GET',
           success: function(data) {
              var resultTable = $('#resultTable tbody');
              var newRow = $('<tr>');
              newRow.append('<td>' + data.name + '</td>');
              newRow.append('<td>' + data.username + '</td>');
              newRow.append('<td>' + data.email + '</td>');
              resultTable.append(newRow);
           },
           error: function() {
           alert('ユーザ情報の取得に失敗しました');
          }
      });
    });
});