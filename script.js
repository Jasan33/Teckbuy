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
  let x = document.getElementById("/order.Iphone_checkout");
  console.log("hi")
  x.style.display = "block";
}
