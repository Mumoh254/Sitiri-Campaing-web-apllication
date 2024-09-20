
  function animateValue(id, start, end, duration) {
    let element = document.getElementById(id);
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    
    let timer = setInterval(function() {
      current += increment;
      element.innerHTML = current + "+";
      if (current == end) {
        clearInterval(timer);
      }
    }, stepTime);
  }

  // Trigger the animation after the page loads
  window.onload = function() {
    animateValue("stat-counter", 0, 1000, 2000);
  };

