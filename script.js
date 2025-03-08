function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function openCoffeeInvitation() {
    const newWindow = window.open('', '_blank');
    newWindow.document.write('<h1 style="text-align: center; margin-top: 20%;">Invitación para un café ☕</h1>');
    newWindow.document.title = "Invitación";
  }