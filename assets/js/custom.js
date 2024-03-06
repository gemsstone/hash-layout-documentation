setTimeout(function () {
  // Hide the loader
  document.querySelector(".loaderWrapper").style.display = "none";
  // Show the content
  document.querySelector(".content").style.display = "block";
}, 3000);

// Listing active
const listItems = document.querySelectorAll(".accordion-list li");
listItems.forEach((item) => {
  item.addEventListener("click", function (event) {
    const clickedItem = event.currentTarget;

    listItems.forEach((item) => {
      if (item !== clickedItem) {
        item.classList.remove("active");
      }
    });

    clickedItem.classList.add("active");
  });
});

// Copy Functions
function copyCode(copyButton) {
  var codeElement = copyButton.parentNode.querySelector("code");
  var clonedElement = codeElement.cloneNode(true); // Clone the p tag element
  var popupContent = document.getElementById("copiedContent");
  popupContent.innerHTML = ""; // Clear previous content
  popupContent.appendChild(clonedElement); // Append the cloned element to the popup content

  var range = document.createRange();
  range.selectNode(codeElement);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();

  // Show popup
  var popup = document.getElementById("CopyPopup");
  var copiedText = document.getElementById("copiedText");
  popup.style.display = "block";

  // Close popup after 3 seconds
  setTimeout(function () {
    popup.style.display = "none";
  }, 3000);
}
