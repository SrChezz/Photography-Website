let slider = function () {
    const slider = document.querySelector('.slides-container');
    let buttons = document.querySelectorAll(".top-selector div");
    let slides = Array.from(document.querySelectorAll(".slides-container .slider"));

   let isDragging = false,
   startPos = 0,
   currentTranslate = 0,
   prevTranslate = 0,
   animationID = 0,
   currentIndex = 0

   slides.forEach((slide, index) => {
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
  }
  
  function setPositionByIndex() {
    currentTranslate = currentIndex * - slides[0].clientWidth
    prevTranslate = currentTranslate
    setSliderPosition()
  }

  // My code

   moveSlides(buttons[0], 0)
   moveSlides(buttons[1], 1)
   moveSlides(buttons[2], 2)
   moveSlides(buttons[3], 3)

    function moveSlides (button, number) {
        button.addEventListener("click", function() {
            currentIndex = number;
            setPositionByIndex()          
        })
    }
}

slider()

let slider2 = function () {
    const slider = document.querySelector('.slides-container-2');
    let buttons = document.querySelectorAll(".bottom-selector div");
    let slides = Array.from(document.querySelectorAll(".slides-container-2 .slider"));

   let isDragging = false,
   startPos = 0,
   currentTranslate = 0,
   prevTranslate = 0,
   animationID = 0,
   currentIndex = 0,
   prevIndex = 0

   slides.forEach((slide, index) => {
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
    changeBottomSelectorClass(buttons[currentIndex])
  }
  
  function setPositionByIndex() {
    currentTranslate = currentIndex * - slides[0].clientWidth
    prevTranslate = currentTranslate
    setSliderPosition()
    
  }

  // My code

   moveSlides(buttons[0], 0)
   moveSlides(buttons[1], 1)
   moveSlides(buttons[2], 2)
   moveSlides(buttons[3], 3)

    function moveSlides (button, number) {
        button.addEventListener("click", function() {
            currentIndex = number;
            setPositionByIndex()  
            changeBottomSelectorClass(button)          
            
        })     
    }

    function changeBottomSelectorClass(button) {

      buttons[prevIndex].classList.remove("active");
            button.classList.add("active"); 
          
            console.log(prevIndex)
            prevIndex =  currentIndex; 

    }
}

slider2()








