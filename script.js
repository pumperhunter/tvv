var knob1 = document.getElementById('knob-1');
var knob2 = document.getElementById('knob-2');
var guideBtn = document.getElementById('guide-btn');
var tvGuide = document.getElementById('guide');
var guide1 = document.getElementById('guide-1');
var guide2 = document.getElementById('guide-2');
var tvWrap = document.getElementById('tv-page');

guideBtn.onclick = function() {
  event.preventDefault();
  tvGuide.classList.toggle('visible');
}

knob1.onclick = function() {
  event.preventDefault();
  knob1.classList.toggle('clicked');
  tvWrap.classList.toggle('toggled');
}

knob2.onclick = function() {
  event.preventDefault();
  knob2.classList.toggle('clicked');
  guide1.classList.toggle('visible');
  guide2.classList.toggle('visible');
  tvWrap.classList.toggle('flipped');
}


function openYouTubeLinksInNewTab() {
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    if (link.href.includes('youtube.com')) {
      link.target = '_blank';
    }
  });
}
openYouTubeLinksInNewTab();


/*Drue Langois Animations - Random*/
var knob1 = document.getElementById('knob-1');
var knob2 = document.getElementById('knob-2');
var guideBtn = document.getElementById('guide-btn');
var tvGuide = document.getElementById('guide');
var guide1 = document.getElementById('guide-1');
var guide2 = document.getElementById('guide-2');
var tvWrap = document.getElementById('tv-page');

guideBtn.onclick = function() {
  event.preventDefault();
  tvGuide.classList.toggle('visible');
}

knob1.onclick = function() {
  event.preventDefault();
  knob1.classList.toggle('clicked');
  tvWrap.classList.toggle('toggled');
}

knob2.onclick = function() {
  event.preventDefault();
  knob2.classList.toggle('clicked');
  guide1.classList.toggle('visible');
  guide2.classList.toggle('visible');
  tvWrap.classList.toggle('flipped');
}


function openYouTubeLinksInNewTab() {
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    if (link.href.includes('youtube.com')) {
      link.target = '_blank';
    }
  });
}
openYouTubeLinksInNewTab();


/*Drue Langois Animations - Random*/
