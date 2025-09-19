  const messageText = "Maryem, this moment is the fruit of your patience, dreams, and hard work. Getting accepted into Nursing at Ain Shams is not just an achievement, it's the start of a journey where your compassion and dedication will touch many lives. May every step you take bring you closer to becoming the doctor you've always dreamed of being. May your days be filled with strength, kindness, and success — and may this path open doors to endless opportunities and happiness. Congratulations from Joo. ❤";

  const typewriterEl = document.getElementById('typewriter');
  const messageContainer = document.getElementById('message');

  let i = 0;
  function typeWriter() {
    if(i < messageText.length){
      typewriterEl.innerHTML += messageText.charAt(i);
      i++;
      setTimeout(typeWriter, 40);
    }
  }

  setTimeout(() => {
    messageContainer.classList.add('visible');
    typeWriter();
  }, 2000);
