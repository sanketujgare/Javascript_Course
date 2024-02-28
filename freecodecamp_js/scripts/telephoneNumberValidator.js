const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

checkBtn.addEventListener("click", validatePhoneNumber);
clearBtn.addEventListener("click", clearResults);

function validatePhoneNumber() {
  const phoneNumber = userInput.value.trim();

  if (!phoneNumber) {
    alert("Please provide a phone number");
    return;
  }

  const validFormats = [
    /^\d{10}$/, // 5555555555
    /^\d{3}-\d{3}-\d{4}$/, // 555-555-5555
    /^\(\d{3}\)\d{3}-\d{4}$/, // (555)555-5555
    /^\(\d{3}\) \d{3}-\d{4}$/, // (555) 555-5555
    /^\d{3} \d{3} \d{4}$/, // 555 555 5555
    /^1 \d{3} \d{3} \d{4}$/, //1 555 555 5555
    /^1 \d{3}-\d{3}-\d{4}$/, // 1 555-555-5555
    /^1 \(\d{3}\) \d{3}-\d{4}$/, // 1 (555) 555-5555
    /^1\(\d{3}\)\d{3}-\d{4}$/, // 1(555)555-5555
  ];

  let isValid = false;
  for (const format of validFormats) {
    if (format.test(phoneNumber)) {
      isValid = true;
      break;
    }
  }

  if (isValid) {
    resultsDiv.textContent = `Valid US number: ${phoneNumber}`;
  } else {
    resultsDiv.textContent = `Invalid US number: ${phoneNumber}`;
  }
}

function clearResults() {
  resultsDiv.textContent = "";
  userInput.value = "";
}
