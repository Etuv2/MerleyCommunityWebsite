function validateForm() {
  // Get the form elements
  var name = document.forms['contact-form']['name'];
  var email = document.forms['contact-form']['email'];
  var subject = document.forms['contact-form']['subject'];
  var message = document.forms['contact-form']['message'];

  // Validate the form elements
  if (name.value == '') {
    alert('Name is required');
    name.focus();
    return false;
  }

  if (email.value == '') {
    alert('Email is required');
    email.focus();
    return false;
  }

  if (subject.value == '') {
    alert('Subject is required');
    subject.focus();
    return false;
  }

  if (message.value == '') {
    alert('Message is required');
    message.focus();
    return false;
  }

  // If the form is valid, submit it
  //we also want to redirect to the sent page
  window.location.href = "sent.html";
  return true;
}
