// form handler ///

// handle form by submiting form and page will go selected course Quiz

// line 6 function wait to load full content of page
document.addEventListener("DOMContentLoaded", () => {
  const quizForm = document.querySelector("#userData"); // get data from user(name,rollno,quiz etc)

  // function for when form submit
  quizForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // get data of selected course from form by giving id
    const selectedCourse = document.querySelector(
      'input[name="course"]:checked'
    ).id; // Find the checked radio button with the name 'course' and get its id

    //Switch Cases for different Courses Quiz links..

    switch (selectedCourse) {
      // for html link
      case "html5":
        window.location.href = "./quizes/quizHtml5.html";
        break;
      //for css3
      case "css3":
        window.location.href = "./quizes/quizCss3.html";
        break;
      // for javaScript
      case "jsIcon":
        window.location.href = "./quizes/quizJs.html";
        break;
      //for typeScript
      case "typeScript":
        window.location.href = "./quizes/quizTs.html";
        break;
      //for React
      case "react":
        window.location.href = "./quizes/quizReact.html";
        break;
      // for cpp
      case "cpp":
        window.location.href = "./quizes/quizCpp.html";
        break;
      default:
        break;
    }
  });
});
