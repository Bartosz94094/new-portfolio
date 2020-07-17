window.addEventListener('load', function () {

  //menu
  const BURGER = document.querySelector(".burger");
  BURGER.addEventListener("click", ()=>{
    BURGER.classList.toggle("active");
  })

  // show and highlight motto
  const MOTTO = document.querySelector(".motto");
  setTimeout(() => {
    MOTTO.classList.add("highlighted");
  }, 600);

  //stop and start again header
  const HEADER = document.querySelector(".header");

  window.addEventListener('scroll', function () {
    if ((window.pageYOffset >= window.innerHeight * 0.93) && !HEADER.classList.contains("stop")) {
      HEADER.classList.add("stop");
    } else if ((window.pageYOffset < window.innerHeight * 0.93) && HEADER.classList.contains("stop")) {
      HEADER.classList.remove("stop");
    }
  });

  //greetings
  var waypoint = new Waypoint({
    element: document.querySelector(".first"),
    handler: function (direction) {
      showWordsFirst();
      this.element.classList.add("visible");
      this.destroy();
    },
    offset: "60%"
  })

  const FIRST_TXT_FIELD = document.querySelector(".first>p");
  const FIRST_TXT = "Hi! Nice to meet you, welcome to my website! My name is Bartosz Czechowicz, I'm a junior front-end deweloper, currently looking for a first job or an internship. My journey with programming started a couple of years ago, when I was studying Mechatronics Engineering at Rzeszow University of Technology. I fell in love with it. Then I decided to study IT for my master's degree (in Poznan now) and keep focus on front-end technologies.";
  const FIRST_TXT_WORDS_ARRAY = FIRST_TXT.split(" ");
  const FIRST_TXT_SPAN_WORDS_ARRAY = [];

  let once_in_first = false;

  FIRST_TXT_WORDS_ARRAY.forEach((world, index) => {
    const SPAN = document.createElement("span");
    let NODE = null;
    if (index < FIRST_TXT_WORDS_ARRAY.length - 1) {
      NODE = document.createTextNode(world + " ");
    } else if ((index = FIRST_TXT_WORDS_ARRAY.length - 1)) {
      NODE = document.createTextNode(world);
    }
    SPAN.appendChild(NODE);
    SPAN.style.opacity = 0;

    if(world == "front-end" && !once_in_first) {
      SPAN.classList.add("special");
      SPAN.innerHTML = `<nobr>${world} </nobr>`;
      once_in_first = true;
    }
    FIRST_TXT_SPAN_WORDS_ARRAY.push(SPAN);
  });

  FIRST_TXT_SPAN_WORDS_ARRAY.forEach((element) => {
    FIRST_TXT_FIELD.appendChild(element);
  });

  let i = 0;
  const SPEED = 80;

  function showWordsFirst() {
    if (i < FIRST_TXT_SPAN_WORDS_ARRAY.length) {
      if (i == 0) {
        FIRST_TXT_FIELD.classList.add("border");
      }
      FIRST_TXT_SPAN_WORDS_ARRAY[i].classList.add("show");
      if (i == FIRST_TXT_SPAN_WORDS_ARRAY.length-1) {
        document.querySelector(".first img").classList.add("move");
      }
      i++;
      setTimeout(showWordsFirst, SPEED);
    }
  }

  var waypoint = new Waypoint({
    element: document.querySelector(".second"),
    handler: function (direction) {
      showWordsSecond();
      this.element.classList.add("visible");
      this.destroy();
    },
    offset: "60%"
  })

  const SECOND_TXT_FIELD = document.querySelector(".second>p");
  const SECOND_TXT = "Apart from coding, there are three things I'm really into. First one is travelling. After graduating I took a gap year to travel and spent it in Asia (but not only there), visiting 14 countries, i.a. working as a volunteer in Japan. Second one is photography, you can find some of my pictures on my Facebook (link at the end of this website). Last, but not least is muay thai, a thai martial art I can't live without.";
  const SECOND_TXT_WORDS_ARRAY = SECOND_TXT.split(" ");
  const SECOND_TXT_SPAN_WORDS_ARRAY = [];

  SECOND_TXT_WORDS_ARRAY.forEach((world, index) => {
    const SPAN = document.createElement("span");
    let NODE = null;
    if (index < SECOND_TXT_WORDS_ARRAY.length - 1) {
      NODE = document.createTextNode(world + " ");
    } else if ((index = SECOND_TXT_WORDS_ARRAY.length - 1)) {
      NODE = document.createTextNode(world);
    }
    SPAN.appendChild(NODE);
    SPAN.style.opacity = 0;
    if(world == "coding,") {
      SPAN.classList.add("special");
      SPAN.innerHTML = `<nobr>${world} </nobr>`;
    }
    SECOND_TXT_SPAN_WORDS_ARRAY.push(SPAN);
  });

  SECOND_TXT_SPAN_WORDS_ARRAY.forEach((element) => {
    SECOND_TXT_FIELD.appendChild(element);
  });

  let j = 0;

  function showWordsSecond() {
    if (j < SECOND_TXT_SPAN_WORDS_ARRAY.length) {
      if (j == 0) {
        SECOND_TXT_FIELD.classList.add("border");
      }
      SECOND_TXT_SPAN_WORDS_ARRAY[j].classList.add("show");
      if (j == SECOND_TXT_SPAN_WORDS_ARRAY.length-1) {
        document.querySelector(".second img").classList.add("move");
      }
      j++;
      setTimeout(showWordsSecond, SPEED);
    }
  }

  var waypoint = new Waypoint({
    element: document.querySelector(".third"),
    handler: function (direction) {
      showWordsThird();
      this.element.classList.add("visible");
      this.destroy();
    },
    offset: "60%"
  })

  const THIRD_TXT_FIELD = document.querySelector(".third>p");
  const THIRD_TXT = "What do I do now? So, in this year I graduate - I'm quite busy with working on my dissertation (online store using React and React Router). In my spare time I write articles about upcoming hardware for PCLab.pl and KomputerSwiat.pl. Oh, and I sell my travel texts and pictures as well.";
  const THIRD_TXT_WORDS_ARRAY = THIRD_TXT.split(" ");
  const THIRD_TXT_SPAN_WORDS_ARRAY = [];

  let once_in_third = false;

  THIRD_TXT_WORDS_ARRAY.forEach((world, index) => {
    const SPAN = document.createElement("span");
    let NODE = null;
    if (index < THIRD_TXT_WORDS_ARRAY.length - 1) {
      NODE = document.createTextNode(world + " ");
    } else if ((index = THIRD_TXT_WORDS_ARRAY.length - 1)) {
      NODE = document.createTextNode(world);
    }
    SPAN.appendChild(NODE);
    SPAN.style.opacity = 0;
    if(world == "React" && !once_in_third) {
      SPAN.classList.add("special");
      SPAN.innerHTML = `<nobr>${world} </nobr>`;
      once_in_third = true;
    }
    THIRD_TXT_SPAN_WORDS_ARRAY.push(SPAN);
  });

  THIRD_TXT_SPAN_WORDS_ARRAY.forEach((element) => {
    THIRD_TXT_FIELD.appendChild(element);
  });

  let k = 0;

  function showWordsThird() {
    if (k < THIRD_TXT_SPAN_WORDS_ARRAY.length) {
      if (k == 0) {
        THIRD_TXT_FIELD.classList.add("border");
      }
      THIRD_TXT_SPAN_WORDS_ARRAY[k].classList.add("show");
      if (k == THIRD_TXT_SPAN_WORDS_ARRAY.length-1) {
        document.querySelector(".third img").classList.add("move");
      }
      k++;
      setTimeout(showWordsThird, SPEED);
    }
  }

  //headers in sections - anim

  const HEADERS_LIST = [...document.querySelectorAll("section>header")];
  for (const elem of HEADERS_LIST) {
    var waypoint = new Waypoint({
      element: elem,
      handler: function (direction) {
        this.element.classList.add("anim");
        this.destroy();
      },
      offset: "70%"
    })
  }

  //show data in skills sections

  var waypoint = new Waypoint({
    element: document.querySelector(".second-motto"),
    handler: function (direction) {
      this.element.classList.add("visible");
      this.destroy();
    },
    offset: "80%"
  })

  var waypoint = new Waypoint({
    element: document.querySelector(".technologies>p"),
    handler: function (direction) {
      this.element.classList.add("visible");
      this.destroy();
    },
    offset: "80%"
  })

  //show skills

  const SKILLS_LIST = [...document.querySelectorAll(".skill")];
  for (const elem of SKILLS_LIST) {
    var waypoint = new Waypoint({
      element: elem,
      handler: function (direction) {
        this.element.classList.add("visible");
        this.destroy();
      },
      offset: "80%"
    })
  }

  //show projects

  const PROJECTS_LIST = [...document.querySelectorAll(".project")];
  for (const elem of PROJECTS_LIST) {
    var waypoint = new Waypoint({
      element: elem,
      handler: function (direction) {
        this.element.classList.add("visible");
        this.destroy();
      },
      offset: "65%"
    })      
  }

  //form
  
  var form = document.getElementById("my-form");
    var button = document.getElementById("my-form-button");
    var status = document.getElementById("my-form-status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      button.style = "display: none ";
      status.innerHTML = "Thanks!";
    }

    function error() {
      status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });

    function ajax(method, url, data, success, error) {
      var xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          success(xhr.response, xhr.responseType);
        } else {
          error(xhr.status, xhr.response, xhr.responseType);
        }
      };
      xhr.send(data);
    }





  
})