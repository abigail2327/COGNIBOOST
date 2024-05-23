
const form = document.getElementById("quiz");
const resultContainer = document.getElementById("result");
const doneButton = document.querySelector(".btn-done");
   
form.addEventListener("submit", function(event) {
  event.preventDefault();

  const scores = [];

  const radioInputs = form.querySelectorAll("input[type='radio']");
  let anyEmpty = false; //unanswered
  radioInputs.forEach(function(input) {
    if (input.checked) {
      switch (input.value) {
        case "never":
          scores.push(0);
          break;
        case "rarely":
          scores.push(1);
          break;
        case "sometimes":
          scores.push(2);
          break;
        case "often":
          scores.push(3);
          break;
        case "very often":
          scores.push(4);
          break;
        default:
          break;
      }
    }
  });

  const totalScore = scores.reduce((a, b) => a + b, 0);

  let resultMessage = "";
  let recommendationMessage = "";
  if (totalScore === 0) {
    resultMessage = "No indications of ADHD.";
    recommendationMessage = "It is highly unlikely that you will be diagnosed with ADHD if you went through a full diagnostic assessment. However, if you feel that you are being bothered by some of these or other symptoms, we suggest that you consult with a professional.";
  } else if (totalScore >= 1 && totalScore <= 10) {
    resultMessage = "You show little or no indications of ADHD.";
    recommendationMessage = "It is unlikely that you will be diagnosed with ADHD if you went through a full diagnostic assessment. However, if you feel that you are being bothered by some of these or other symptoms, we suggest that you consult with a professional.";
  } else if (totalScore >= 11 && totalScore <= 24) {
    resultMessage = "You may be showing moderate indications of ADHD.";
    recommendationMessage = "It is unlikely that you will be diagnosed with ADHD if you went through a full diagnostic assessment. However, if you feel that you are being bothered by some of these or other symptoms, we suggest that you consult with a professional and not self-diagnose.";
  } else {
    resultMessage = "High indications of ADHD.";
    recommendationMessage = "It is likely that you will be diagnosed with ADHD if you went through a full diagnostic assessment. We suggest that you consult with a professional and not self-diagnose.";
  }

  resultContainer.innerHTML = `<p>${resultMessage} ${recommendationMessage}</p>`;
});

// required validation

const radioGroups = document.querySelectorAll('.form-check');
form.addEventListener('submit', (event) => {
  let anyEmpty = false;
  for (const radioGroup of radioGroups) {
    if (!radioGroup.querySelector('input[type="radio"]:checked')) {
      anyEmpty = true;
      break;
    }
  }

  if (anyEmpty) {
    event.preventDefault();
    alert('');
  }
});

