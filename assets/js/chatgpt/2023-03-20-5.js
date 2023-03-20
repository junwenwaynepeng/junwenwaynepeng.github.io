let open_ai_response_4;

async function openai_4() {
  const apiKey = document.getElementById("api-key").value;
  const answer = document.getElementById('2-4').value;
  var url = "https://api.openai.com/v1/completions";

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);

  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", "Bearer " + apiKey);

  xhr.onreadystatechange = function () {  
     if (xhr.readyState === 4) {
        open_ai_response_4 = JSON.parse(xhr.responseText);
        console.log(open_ai_response_4);
        if (open_ai_response_4.choices) {
          const generatedText = open_ai_response_4.choices[0].text;
          // Display the response in the result-box div
          document.getElementById("result-box-2-4").innerHTML = generatedText;
        } else {
          console.error('Error: No "choices" property in OpenAI response.');
        }
     }};

  var data = {
    "prompt": `
Decide whether a student\'s response is essentially correct. 

The followings are correct answers : 
* Because the level curve and restriction function shares the same tangent line, their normal vectors, gradients, are parallel.

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
