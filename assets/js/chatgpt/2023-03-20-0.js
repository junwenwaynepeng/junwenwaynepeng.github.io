let open_ai_response_0;

async function openai_0() {
  const apiKey = document.getElementById("api-key").value;
  const answer = document.getElementById('1-1').value;
  var url = "https://api.openai.com/v1/completions";

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);

  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", "Bearer " + apiKey);

  xhr.onreadystatechange = function () {
     if (xhr.readyState === 4) {
        open_ai_response = JSON.parse(xhr.responseText);
        console.log(open_ai_response);
        if (open_ai_response.choices) {
          const generatedText = open_ai_response.choices[0].text;
          // Display the response in the result-box div
          document.getElementById("result-box-1-3").innerHTML = generatedText;
        } else {
          console.error('Error: No "choices" property in OpenAI response.');
        }
     }};

  var data = {
    "prompt": `
Decide whether a student\'s response is equivalent to the following function. 

Correct function: 4*k + e^(4*m) + e^(2*m) + e^m - 15

student:` + answer + `

Is correct:`,
    "temperature": 0,
    "max_tokens": 60,
    "top_p": 1,
    "frequency_penalty": 0.5,
    "presence_penalty": 0,
    "model": "text-davinci-003"
  };
  data = JSON.stringify(data)
  console.log(data)
  xhr.send(data);
}
