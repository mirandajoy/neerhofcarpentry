document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('send-button').addEventListener('click', function() {
    var xhr = new XMLHttpRequest();
    var nameInputId = 'name-input';
    var emailInputId = 'email-input';
    var messageInputId = 'message-input'
    xhr.open('POST', 'send-email');
    xhr.setRequestHeader('Content-Type', 'application/json');
    var postBody = JSON.stringify({
      name: document.getElementById(nameInputId).value,
      from: document.getElementById(emailInputId).value,
      message: document.getElementById(messageInputId).value,
    });
    xhr.onreadystatechange = function () {
      if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        document.getElementById(nameInputId).value = '';
        document.getElementById(emailInputId).value = '';
        document.getElementById(messageInput).value = '';
      }
    };
    xhr.send(postBody)
  });
});
