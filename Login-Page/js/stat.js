 
    window.addEventListener('DOMContentLoaded', () => {
        const boxes = document.querySelectorAll('.box');
        const toggleList = document.getElementById('icu-id');
        let isFirstSelection = true;
  
        function slideUpBoxes() {
          boxes.forEach(box => {
            box.classList.remove('show', 'fade-in');
            box.classList.add('pop-out');
          });
        }
  
        function slideDownBoxes() {
          boxes.forEach(box => {
            box.classList.remove('pop-out');
            box.classList.add('show', 'fade-in');
          });
        }
  
        function updateBoxes() {
          boxes.forEach(box => {
            box.classList.remove('updated');
            void box.offsetWidth; 
            box.classList.add('updated');
          });
        }
  
        setTimeout(() => {
          slideDownBoxes();
        }, 500);
  
        toggleList.addEventListener('input', handleChange);
        toggleList.addEventListener('change', handleChange);
  
        function handleChange() {
          slideUpBoxes();
          setTimeout(() => {
            const selectedValue = toggleList.value;
            boxes.forEach(box => {
              box.querySelector('p').textContent = selectedValue;
            });
            if (!isFirstSelection) {
              updateBoxes();
            } else {
              isFirstSelection = false;
            }
            setTimeout(() => {
              slideDownBoxes();
            }, 300); 
          }, 300); 
        }
      });
    