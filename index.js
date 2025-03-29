function toggleBox(selectedBox) {
               document.querySelectorAll(".box").forEach((box) => {
                 const radio = box.querySelector('input[type="radio"]');
                 if (box !== selectedBox) {
                   box.classList.remove("expanded");
                   radio.checked = false;
                 }
               });
               selectedBox.classList.toggle("expanded");
               selectedBox.querySelector('input[type="radio"]').checked = true;
             }
       
             function selectBox(radio) {
               radio.checked = true;
             }