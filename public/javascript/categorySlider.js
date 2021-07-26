let slider = function () {
    const slider = document.querySelector('#galleryShow');
    let buttons = document.querySelectorAll(".small-gallery-slides div");
    let slides = Array.from(document.querySelectorAll("#galleryShow img"));
    let arrows = document.querySelectorAll('.gallery-show-container .gallery-arrows');
    let miniArrows = document.querySelectorAll('.small-gallery .gallery-arrows');

   let isDragging = false,
   startPos = 0,
   currentTranslate = 0,
   prevTranslate = 0,
   animationID = 0,
   currentIndex = 0,
   maxIndex = 7,
   prevIndex = 0

   slides.forEach((slide, index) => {
    const slideImage = slide/* .querySelector('img') */
    slideImage.addEventListener('dragstart', (e) => e.preventDefault())
  
    // Touch events
    slide.addEventListener('touchstart', touchStart(index))
    slide.addEventListener('touchend', touchEnd)
    slide.addEventListener('touchmove', touchMove)
  
    // Mouse events
    slide.addEventListener('mousedown', touchStart(index))
    slide.addEventListener('mouseup', touchEnd)
    slide.addEventListener('mouseleave', touchEnd)
    slide.addEventListener('mousemove', touchMove)
  })

  // Disable context menu
    window.oncontextmenu = function (event) {
    event.preventDefault()
    event.stopPropagation()
    return false
  }

  function touchStart(index) {
    return function (event) {
      currentIndex = index
      startPos = getPositionX(event)
      isDragging = true
  
      // https://css-tricks.com/using-requestanimationframe/
      animationID = requestAnimationFrame(animation)  
    }
  }
  
  function touchEnd() {
    isDragging = false
    cancelAnimationFrame(animationID)
  
    const movedBy = currentTranslate - prevTranslate
  
    if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1
  
    if (movedBy > 100 && currentIndex > 0) currentIndex -= 1
  
    setPositionByIndex()
  }
  
  function touchMove(event) {
    if (isDragging) {
      const currentPosition = getPositionX(event)
      currentTranslate = prevTranslate + currentPosition - startPos
    }
  }
  
  function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
  }
  
  function animation() {
    setSliderPosition()
    if (isDragging) requestAnimationFrame(animation)
  }
  
  function setSliderPosition() {
    slider.style.transform = `translateX(${currentTranslate}px)`
    changeBottomSelectorClass(buttons[currentIndex].children[0])
  }
  
  function setPositionByIndex() {
    currentTranslate = currentIndex * - slides[0].clientWidth
    prevTranslate = currentTranslate
    setSliderPosition()
  }

  // My code

  for (let i = 0; i < buttons.length; i++) {
    moveSlides(buttons[i], i)    
  }

   /* moveSlides(buttons[0], 0)
   moveSlides(buttons[1], 1)
   moveSlides(buttons[2], 2)
   moveSlides(buttons[3], 3) */

   arrows[0].addEventListener("click", function() {
    currentIndex = currentIndex - 1;
    checkArrows()
    setPositionByIndex()          
    })

    arrows[1].addEventListener("click", function() {
    currentIndex = currentIndex + 1;
    checkArrows()
    setPositionByIndex()          
    })

    function checkArrows() {

        if (currentIndex < 0) {
            miniArrows[0].click()
            return currentIndex = maxIndex
        } else if (currentIndex > maxIndex) {
            miniArrows[1].click()
            return currentIndex = 0         
        } else if (currentIndex % (maxIndex2 + 1) == 0) {
            miniArrows[1].click();        
        } 
    }

    function moveSlides (button, number) {
        button.addEventListener("click", function() {
            currentIndex = number;
            setPositionByIndex()          
        })
    }

    function changeBottomSelectorClass(button) {

        buttons[prevIndex].children[0].classList.remove("active");
              button.classList.add("active"); 
            
              /* console.log(prevIndex) */
              prevIndex =  currentIndex; 
  
      }
}

let maxIndex2

slider()

let slider2 = function () {
    const slider = document.querySelector('.small-gallery-slides');
    let slides = Array.from(document.querySelectorAll(".small-gallery-slides-holder > div"));
    let arrows = document.querySelectorAll('.small-gallery .gallery-arrows');

   let isDragging = false,
   startPos = 0,
   currentTranslate = 0,
   prevTranslate = 0,
   animationID = 0,
   currentIndex = 0,
   slidesNumber = 8
   if (document.documentElement.clientWidth > 1050) {
      maxIndex2 = Math.ceil(slidesNumber / 4) - 1;
   } else {
      maxIndex2 = Math.ceil(slidesNumber / 3) - 1
   }
   
   

   /* slides.forEach((slide, index) => {
    const slideImage = slide.querySelector('img')
    slideImage.addEventListener('dragstart', (e) => e.preventDefault())
  
    // Touch events
    slide.addEventListener('touchstart', touchStart(index))
    slide.addEventListener('touchend', touchEnd)
    slide.addEventListener('touchmove', touchMove)
  
    // Mouse events
    slide.addEventListener('mousedown', touchStart(index))
    slide.addEventListener('mouseup', touchEnd)
    slide.addEventListener('mouseleave', touchEnd)
    slide.addEventListener('mousemove', touchMove)
  }) */

  // Disable context menu
    window.oncontextmenu = function (event) {
    event.preventDefault()
    event.stopPropagation()
    return false
  }

  function touchStart(index) {
    return function (event) {
      currentIndex = index
      startPos = getPositionX(event)
      isDragging = true
  
      // https://css-tricks.com/using-requestanimationframe/
      animationID = requestAnimationFrame(animation)  
    }
  }
  
  function touchEnd() {
    isDragging = false
    cancelAnimationFrame(animationID)
  
    const movedBy = currentTranslate - prevTranslate
  
    if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1
  
    if (movedBy > 100 && currentIndex > 0) currentIndex -= 1
  
    setPositionByIndex()
  }
  
  function touchMove(event) {
    if (isDragging) {
      const currentPosition = getPositionX(event)
      currentTranslate = prevTranslate + currentPosition - startPos
    }
  }
  
  function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
  }
  
  function animation() {
    setSliderPosition()
    if (isDragging) requestAnimationFrame(animation)
  }
  
  function setSliderPosition() {
    slider.style.transform = `translateX(${currentTranslate}px)`
  }
  
  function setPositionByIndex() {
    currentTranslate = currentIndex * - slides[0].clientWidth
    prevTranslate = currentTranslate
    setSliderPosition()
  }

  // My code

    arrows[0].addEventListener("click", function() {
    currentIndex = currentIndex - 1;
    checkArrows()
    setPositionByIndex()          
    })

    arrows[1].addEventListener("click", function() {
    currentIndex = currentIndex + 1;
    checkArrows()
    setPositionByIndex()          
    })

    function checkArrows() {
        if (currentIndex < 0) {
            return currentIndex = maxIndex2
        } else if (currentIndex > maxIndex2) {
            return currentIndex = 0   
        } 
    }

/*     function moveSlides (button, number) {
        button.addEventListener("click", function() {
            currentIndex = number;
            setPositionByIndex()          
        })
    } */
}

slider2()

