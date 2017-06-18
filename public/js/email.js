document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('send-button').addEventListener('click', function() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'send-email');
    var postBody = JSON.stringify({
      name: document.getElementById('form1').value,
      from: document.getElementById('form2').value,
      message: document.getElementById('form3').value,
    });
    debugger
    xhr.onreadystatechange = function () {
      if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        document.getElementById('form1').value = '';
        document.getElementById('form2').value = '';
        document.getElementById('form3').value = '';
      }
    };
    xhr.send(postBody)
  });
});
