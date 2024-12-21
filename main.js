/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }


  // about
  document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill');
    
    skills.forEach(skill => {
        skill.addEventListener('mouseenter', () => {
            const tooltipText = skill.getAttribute('data-tooltip');
            let tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.innerText = tooltipText;
            skill.appendChild(tooltip);
        });
        
        skill.addEventListener('mouseleave', () => {
            const tooltip = skill.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
});


/* ----- TYPING EFFECT ----- */
 var typingEffect = new Typed(".typedText",{
    strings : ["Data Analyst"," Web Developer", "Java Developer","Anchor"],
    loop : true,
    typeSpeed : 150, 
    backSpeed : 80,
    backDelay : 1000
 })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
 })

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})
srLeft.reveal('.experience-block',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})
srRight.reveal('.experience-block',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;


};

// script.js for nav bar
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
      let current = '';

      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          if (scrollY >= sectionTop - 50 && scrollY < sectionTop + sectionHeight) {
              current = section.getAttribute('id');
          }
      });

      navLinks.forEach(link => {
          link.classList.remove('active-link');
          if (link.getAttribute('href').includes(current)) {
              link.classList.add('active-link');
          }
      });
  });
});


document.addEventListener('DOMContentLoaded', function () {
  // Add click event listeners to skill boxes
  document.querySelectorAll('.skills-box').forEach(box => {
      box.addEventListener('click', function () {
          hideAllDescriptions();
      });
  });

  // Add click event listeners to skill images
  document.querySelectorAll('.skill-item').forEach(item => {
      item.addEventListener('click', function (event) {
          event.stopPropagation();
          toggleSkillContent(event, item.querySelector('img').alt.toLowerCase());
      });
  });
});

function hideAllDescriptions() {
  document.querySelectorAll('.more-content').forEach(content => {
      content.style.display = 'none';
  });

  document.querySelectorAll('.skill-more-content').forEach(content => {
      content.style.display = 'none';
  });
}

function toggleSkillContent(event, id) {
  hideAllDescriptions();
  const skillContent = document.getElementById(id);
  if (skillContent) {
      skillContent.style.display = 'block';
  }

  const parentContent = skillContent.closest('.more-content');
  if (parentContent) {
      parentContent.style.display = 'block';
  }
}




function handleSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting normally
  
  // Validate email (you can add more validation if needed)
  const emailField = document.querySelector('input[name="Email"]');
  const email = emailField.value;
  if (!validateEmail(email)) {
      alert("submitted sucessfully.");
      return false;
  }

  else

  // Display success message
  alert("Submitted successfully!");

  // Clear form fields
  document.querySelector('form[name="submit-to-google-sheet"]').reset();

  return false; // Prevent actual form submission
}

function validateEmail(email) {
  // Simple email validation (you can improve this regex if needed)
  const re = /^[a-zA-Z0-9._-]+@gmail\.com$/;
  return re.test(email);
}







window.addEventListener('scroll', scrollActive)