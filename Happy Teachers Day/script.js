    const txt = `Happy Teachers Day!`;

    const outputDiv = document.getElementById('text');


  let i = 0;
  const timerId = setInterval(() => {
    outputDiv.innerHTML += txt.charAt(i);
    i++;
    if (i === txt.length) {
        clearInterval(timerId);
      }
  },50);

  var audio = $('.song')[0];
  audio.play();