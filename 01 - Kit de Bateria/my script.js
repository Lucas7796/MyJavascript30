  function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (audio === null) return; //Se não houver áudio para a execução da função
    audio.play(); //Toca a música
    audio.currentTime = 0; //Seta o tempo para zero
    key.classList.add('playing');///adiciona uma classe ao seletor    
    //console.log(audio);
    //console.log(key);
  }

  function removeTransition(e){
    //if(e.propertyName !== 'transform') return; // (Retirado do original) Ao pressionar uma tecla o efeito todo é removido, não apenas o transform
    this.classList.remove('playing');//exclue a classe playing ao seletor
    console.log(e);
  }

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);