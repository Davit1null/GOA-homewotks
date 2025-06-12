//  რომელიც განსაზღვრავს არის თუ არა ჩამოსაშლელი მენიუ გახსნილი
let isDropdownOpen = false;

// ღამის რეჟიმის ტემის გადამრთველი ფუნქცია
function toggleTheme() {
  // აიღება მთელი გვერდი (body)
  const body = document.body;
  
  // ღილაკი, რომელიც შეცვლის ტექსტს
  const button = document.getElementById('theme-toggle');
  
  // body-ს კლასი შეიცვლება, თუ "night-mode"-ს ამატებს თუ წაშლის
  body.classList.toggle('night-mode');
  
  // თუ ღამის რეჟიმი ჩართულია, შეცვლის ღილაკის ტექსტს
  if (body.classList.contains('night-mode')) {
    button.textContent = ' დღის რეჟიმი';  // ღამის რეჟიმი ჩართულია
  } else {
    button.textContent = ' ღამის რეჟიმი';  // ღამის რეჟიმი გამორთულია
  }
}

// ჩამოსაშლელი მენიუს ფუნქცია
document.getElementById("other-drinks").addEventListener("click", function() {
  // მენიუს ელემენტი, რომელზეც ვართ დათქმული
  const dropdownMenu = this.querySelector(".dropdown-menu");
  
  // თუ მენიუ ჯერ არ არის გახსნილი, გახსნათ იგი
  if (!isDropdownOpen) {
    dropdownMenu.classList.add("show");  // "show" კლასი ამატებს მენიუს ხსნის სტილს
    isDropdownOpen = true;  // გვეცნობა რომ მენიუ გახსნილია
  } else {
    dropdownMenu.classList.remove("show");  // "show" კლასი წაიშლება
    isDropdownOpen = false;  // მენიუ დახურულია
  }
});

// დამატებითი ფუნქციები: 
// ნავიგაციის მენიუზე კურსორის დაყენებისას მენიუ გახსნათ

document.getElementById("other-drinks").addEventListener("mouseenter", function() {
  // თუ მენიუ ჯერ არ არის გახსნილი, მაშინ ჩვენ ვხსნით მას
  if (!isDropdownOpen) {
    this.querySelector(".dropdown-menu").classList.add("show");
  }
});

// როდესაც კურსორი გადის მენიუსგან, ის უნდა დაიხუროს, თუ ჯერ არ არის გახსნილი
document.getElementById("other-drinks").addEventListener("mouseleave", function() {
  // თუ მენიუ ჯერ არ არის გახსნილი, მაშინ ის უნდა დაიხუროს
  if (!isDropdownOpen) {
    this.querySelector(".dropdown-menu").classList.remove("show");
  }
});

