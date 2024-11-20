function FormValidator() {
    this.nameInput = document.getElementById("name");
    this.emailInput = document.getElementById("email");
    this.passwordInput = document.getElementById("password");
    this.genderSelect = document.getElementById("gender");
    this.citySelect = document.getElementById("city");
    this.resultDiv = document.getElementById("result");
  
    this.displayError = function (inputElement, message) {
      inputElement.nextElementSibling.textContent = message || "";
    };
  
    this.validateName = function () {
      var name = this.nameInput.value;
      if (name === "") {
        this.displayError(this.nameInput, "Name is required.");
        return false;
      }
      this.displayError(this.nameInput, "");
      return true;
    };
  
    this.validateEmail = function () {
      var email = this.emailInput.value;
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email === "") {
        this.displayError(this.emailInput, "Email is required.");
        return false;
      } else if (!emailRegex.test(email)) {
        this.displayError(this.emailInput, "Enter a valid email.");
        return false;
      }
      this.displayError(this.emailInput, "");
      return true;
    };
  
    this.validatePassword = function () {
      var password = this.passwordInput.value;
      if (password === "") {
        this.displayError(this.passwordInput, "Password is required.");
        return false;
      } else if (password.length < 6) {
        this.displayError(this.passwordInput, "Password must be at least 6 characters.");
        return false;
      }
      this.displayError(this.passwordInput, "");
      return true;
    };
  
    this.validateGender = function () {
      var gender = this.genderSelect.value;
      if (gender === "") {
        this.displayError(this.genderSelect, "Please select a gender.");
        return false;
      }
      this.displayError(this.genderSelect, "");
      return true;
    };
  
    this.validateCity = function () {
      var city = this.citySelect.value;
      if (city === "") {
        this.displayError(this.citySelect, "Please select a city.");
        return false;
      }
      this.displayError(this.citySelect, "");
      return true;
    };
  
    var form = document.getElementById("userForm");
    form.onsubmit = (event) => {
      event.preventDefault();
  
      var isValidName = this.validateName();
      var isValidEmail = this.validateEmail();
      var isValidPassword = this.validatePassword();
      var isValidGender = this.validateGender();
      var isValidCity = this.validateCity();
  
      if (isValidName && isValidEmail && isValidPassword && isValidGender && isValidCity) {
        this.resultDiv.textContent = "Form submitted successfully!";
        this.resultDiv.style.color = "green";
      } else {
        this.resultDiv.textContent = "Remove all errors and try again.";
        this.resultDiv.style.color = "red";
      }
    };
  }
  
  new FormValidator();
  