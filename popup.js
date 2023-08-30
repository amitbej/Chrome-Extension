document.addEventListener("DOMContentLoaded", function () {
  const questionInput = document.getElementById("questionInput");
  const submitButton = document.getElementById("submitButton");
  const responseDisplay = document.getElementById("responseDisplay");
  const errorDisplay = document.getElementById("errorDisplay");

  // Event listener For the submit button

  submitButton.addEventListener("click", async function () {
    const question = questionInput.value;

    // Send a POST request to the API

    try {
      const apiUrl = "http://localhost:3000/api/question";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

//Checking Response
      if (response.ok) {
        const data = await response.json();
        const apiResponse = data.response;
        responseDisplay.textContent = apiResponse;

// Display the API response

        errorDisplay.textContent = ""; 
      } else {
        responseDisplay.textContent = "";
        errorDisplay.textContent = "Error: Unable to fetch response";
      }
    } catch (error) {
      responseDisplay.textContent = "";
      errorDisplay.textContent = "Error: API request failed";
    }
  });
});
