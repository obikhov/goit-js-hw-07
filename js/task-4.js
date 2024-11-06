document.querySelector('.login-form').addEventListener('submit', function(event) {
 
  event.preventDefault();

  
  const emailInput = event.target.elements.email;
  const passwordInput = event.target.elements.password;

  
  if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
    alert('All form fields must be filled in');
    return;
  }

  
  const formData = {
    email: emailInput.value.trim(),
    password: passwordInput.value.trim()
  };

  
  console.log('Logging in with:', formData);

 
  fakeLoginRequest(formData).then(response => {
    if (response.success) {
      console.log('Login successful');
     
    } else {
      alert('Login failed: ' + response.message);
    }
 
    event.target.reset();
  }).catch(error => {
    console.error('Request error:', error);
  });
});


function fakeLoginRequest(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
    
      if (data.email === 'test@example.com' && data.password === 'password123') {
        resolve({ success: true });
      } else {
        resolve({ success: false, message: 'Invalid email or password' });
      }
    }, 1000);
  });
}
