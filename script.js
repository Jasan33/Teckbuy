function Meny() {
    let y = document.getElementById("meny");
    if (y.style.display === "none") {
      y.style.display = "block";
      document.getElementById("loginn").style.display = "none";
    } else {
      y.style.display = "none";
    }
}

function loginn() {
    let x = document.getElementById("loginn");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("meny").style.display = "none";
    } else {
      x.style.display = "none";
    }
}

function signup() {
  let signupInfo = document.getElementById("signup");
  let signupText = document.getElementById("signup_here");
  let logInfo = document.getElementById("log_information");

  if (signupInfo.style.display === "none") {
      signupInfo.style.display = "block";
      signupText.textContent = "Log in here";
      logInfo.style.display = "none";
  } else {
      signupInfo.style.display = "none";
      signupText.textContent = "Sign up here";
      logInfo.style.display = "block";
  }
}

function forgot() {
  let x = document.getElementById("forgot");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function Iphone() {
    let x = document.getElementById("Iphone");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function X_Iphone() {
    let x = document.getElementById("Iphone");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function Gaming_pc() {
    let x = document.getElementById("Gaming_pc");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function X_gaming_pc() {
    let x = document.getElementById("Gaming_pc");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function TV() {
    let x = document.getElementById("TV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function X_TV() {
    let x = document.getElementById("TV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function Apple_vision() {
    let x = document.getElementById("Apple_vision");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function X_Apple_vision() {
    let x = document.getElementById("Apple_vision");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function paypal() {
    let x = document.getElementById("IDpaypal");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("IDcard").style.display = "none";
    } else {
      x.style.display = "none";
    }
}

function card() {
  let x = document.getElementById("IDcard");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("IDpaypal").style.display = "none";
  } else {
    x.style.display = "none";
  }
}


function Iphone_cart() {
  // setter Iphone I lokalt minne (local storage)
  localStorage.setItem('iphoneInCart', 'true');
  location.reload('order.html')
  cost += 1000;

  // Deretter går javascripten til order.html siden min
  window.location.href = 'order.html';
}
document.addEventListener('DOMContentLoaded', (event) => {
  // dobbelsjekker om at siden den er på er order.html
  if (window.location.pathname.includes('order.html')) { 
      // sjekker deretter lokalt storage for å finne iphone
      if (localStorage.getItem('iphoneInCart') === 'true') {
          //tilslutt viser den iphonen på sjermen
          document.getElementById('Iphone_checkout').style.display = 'block';
          //Tar frem trshcanen slik at man kan slette itemen
          document.getElementById('trash2').style.display = 'block';
    }
  }
});

function Gaming_cart() {
  localStorage.setItem('gamingInCart', 'true');
  location.reload('order.html')
  cost += 1000;

  window.location.href = 'order.html';
}
document.addEventListener('DOMContentLoaded', (event) => {
  if (window.location.pathname.includes('order.html')) { 
      if (localStorage.getItem('gamingInCart') === 'true') {
          document.getElementById('Gaming_checkout').style.display = 'block';
          document.getElementById('trash3').style.display = 'block';
    }
  }
});

function Tv_cart() {
  localStorage.setItem('tvInCart', 'true');
  location.reload('order.html')
  cost += 1000;

  window.location.href = 'order.html';
}
document.addEventListener('DOMContentLoaded', (event) => {
  if (window.location.pathname.includes('order.html')) { 
      if (localStorage.getItem('tvInCart') === 'true') {
          document.getElementById('Tv_checkout').style.display = 'block';
          document.getElementById('trash4').style.display = 'block';
    }
  }
});


function Apple_cart() {
  localStorage.setItem('appleInCart', 'true');
  location.reload('order.html') 
  cost += 1000;

  window.location.href = 'order.html';
}
document.addEventListener('DOMContentLoaded', (event) => {
  if (window.location.pathname.includes('order.html')) { 
      if (localStorage.getItem('appleInCart') === 'true') {
          document.getElementById('Apple_checkout').style.display = 'block';
          document.getElementById('trash5').style.display = 'block';
    }
  }
});


//funksjon for trash knappen som fjerner item fra local storage
function trash() {
  localStorage.removeItem('iphoneInCart')
  location.reload('order.html')  
}

function trash2() {
  localStorage.removeItem('gamingInCart')
  location.reload('order.html')  
}

function trash3() {
  localStorage.removeItem('tvInCart')
  location.reload('order.html')  
}

function trash4() {
  localStorage.removeItem('appleInCart')
  location.reload('order.html')  
}
