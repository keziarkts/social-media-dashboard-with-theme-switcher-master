let active = false;

function myToggleFunction() {
    let toggle = document.querySelector('.toggle');
    let card = document.querySelectorAll('.col');
    let nbFollowers = document.querySelectorAll('.nb-followers');
    let nbBlock = document.querySelectorAll('.block-nb');
    const bodyPage = document.querySelector('body');
    const topRectangle = document.querySelector('.top-rectangle');
    const darkMode = document.querySelector('#dark-mode');
    const lightMode = document.querySelector('#light-mode');
    const bigTitle = document.querySelector('h1');
    const secondTitle = document.querySelector('h2');

    active = !active

    if (active) {
        // for light mode:
        toggle.classList.add('active')   
        toggle.style.background = '#AEB3CB';

        darkMode.style.display = 'none';
        lightMode.style.display = 'block';
        bodyPage.style.backgroundColor = 'white';
        topRectangle.style.backgroundColor = '#F5F7FF';
        bigTitle.style.color = '#1E202A';
        secondTitle.style.color = '#1E202A';

        for(let i = 0; i < card.length; i++) {
            card[i].style.backgroundColor = '#F0F2FA';
            
            for(let j = 0; j < nbFollowers.length; j++) {
               nbFollowers[j].style.color = '#1E202A';  
            }
            for(let k = 0; k < nbBlock.length; k++) {
                nbBlock[k].style.color = '#1E202A'; 
            } 
        }    

        // HOVERING ELEMENTS PART:      
        var elements = document.getElementsByClassName('col');

        for (let i = 0; i < elements.length; i++) {
            elements[i].onmouseover = function() {
                elements[i].style.backgroundColor = '#E1E3F0';
            };
            elements[i].onmouseout = function() {
                elements[i].style.backgroundColor = '#F0F2FA';
            };
        }
    } else {
        // for dark mode: 
        toggle.classList.remove('active')
        toggle.style.background = ''; 
               
        darkMode.style.display = 'block';
        lightMode.style.display = 'none';
        bodyPage.style.backgroundColor = '#1E202A';
        topRectangle.style.backgroundColor = '#1F212E';
        bigTitle.style.color = '#FFFFFF';
        secondTitle.style.color = '#FFFFFF';

        for(let i = 0; i < card.length; i++) {
            card[i].style.backgroundColor = '#252A41'; 
            for(let j = 0; j < nbFollowers.length; j++) {
               nbFollowers[j].style.color = '#FFFFFF'; 
            }
            for(let k = 0; k < nbBlock.length; k++) {
                nbBlock[k].style.color = '#FFFFFF'; 
            }
        } 

        // HOVERING ELEMENTS PART:   
        var elements = document.getElementsByClassName('col');

        for (let i = 0; i < elements.length; i++) {
            elements[i].onmouseover = function() {
                elements[i].style.backgroundColor = '#333a56';
            };
            elements[i].onmouseout = function() {
                elements[i].style.backgroundColor = '#252A41';
            };
        }

    }
  }
