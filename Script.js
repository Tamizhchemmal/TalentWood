// const awards = document.querySelectorAll(".awards");
// let currentAwardIndex = 0;

// function showAwards(index) {
//   awards.forEach((award, i) => {
//     if (i === index) {
//       award.style.display = "block";
//     } else {
//       award.style.display = "none";
//     }
//   });

//   // Update left-side content based on the selected testimonial
//   const awardInfo = document.querySelector(".awards-info");
//   const awardsCategory = [
//     "Best Actor",
//     "Best Director",
//     "Best Supporting Character",
//     "Best Actress",
//   ];

//   awardInfo.querySelector("h2").textContent = awardsCategory[index];
// }

// function nextAwardsSlide() {
//   currentAwardIndex++;
//   if (currentAwardIndex >= awards.length) {
//     currentAwardIndex = 0;
//   }
//   showAwards(currentAwardIndex);
// }

// setInterval(nextAwardsSlide, 5000); // Change award every 5 seconds (adjust the interval as needed)

// showAwards(currentAwardIndex);

//  //////////////////////////////////////////////////////////////////////////////

// const nextButton = document.querySelector("#next-button");
// const prevButton = document.querySelector("#prev-button");

// nextButton.addEventListener("click", () => {
//   currentAwardIndex++;
//   if (currentAwardIndex >= awards.length) {
//     currentAwardIndex = 0;
//   }
//   showAwards(currentAwardIndex);
// });

// prevButton.addEventListener("click", () => {
//   currentAwardIndex--;
//   if (currentAwardIndex < 0) {
//     currentAwardIndex = awards.length - 1;
//   }
//   showAwards(currentAwardIndex);
// });

// document.addEventListener("DOMContentLoaded", function () {
//   // Initialize Swiper
//   const awardsSlider = new Swiper(".awards-slider", {
//     slidesPerView: 1, // Number of slides visible at once
//     spaceBetween: 20, // Space between slides
//     loop: true, // Enable infinite loop
//     navigation: {
//       nextEl: ".swiper-button-next", // Next button selector
//       prevEl: ".swiper-button-prev", // Previous button selector
//     },
//     autoplay: {
//       delay: 5000, // Autoplay interval in milliseconds (5 seconds)
//     },
//   });
// });

// $(document).ready(function () {
//   // Click event handler for buttons
//   $('button[class^="num"]').click(function () {
//     // Get the number from the class attribute of the clicked button
//     var num = $(this).attr("class").substring(3);

//     // Remove the 'active' class from all rules
//     $(".submission-rules > div").removeClass("active");
//     $(".protoype-images > div").removeClass("active1");
//     // Add the 'active' class to the clicked rule
//     $(".rule" + num).addClass("active");

//     // remove all images
//     $(".protoype-images > div").hide();

//     // Show the corresponding image
//     $(".protoype" + num).show();
//   });
// });

// $(document).ready(function () {
//   // Click event handler for buttons
//   $('button[class^="num"]').click(function () {
//     // Get the number from the class attribute of the clicked button
//     var num = $(this).attr("class").substring(3);

//     // Remove the 'active' class from all rules
//     $(".submission-rules > div").removeClass("active");
//     $(".protoype-images > div").removeClass("active1");
//     // Add the 'active' class to the clicked rule
//     $(".rule" + num).addClass("active");

//     // Hide all prototype images
//     $(".protoype-images > div").hide();

//     // Show the corresponding image
//     $(".protoype" + num).show();
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  // Click event handler for buttons
  var buttons = document.querySelectorAll('button[class^="num"]');
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Get the number from the class attribute of the clicked button
      var num = button.className.substring(3);

      // Remove the 'active' class from all rules
      var ruleElements = document.querySelectorAll(".submission-rules > div");
      ruleElements.forEach(function (element) {
        element.classList.remove("active");
      });

      var imageElements = document.querySelectorAll(".protoype-images > div");
      imageElements.forEach(function (element) {
        element.classList.remove("active1");
        element.style.display = "none";
      });

      // Add the 'active' class to the clicked rule
      var ruleElement = document.querySelector(".rule" + num);
      if (ruleElement) {
        ruleElement.classList.add("active");
      }

      // Show the corresponding image
      var imageElement = document.querySelector(".protoype" + num);
      if (imageElement) {
        imageElement.style.display = "block";
      }
    });
  });
});
