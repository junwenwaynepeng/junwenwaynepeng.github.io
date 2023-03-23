let open_ai_response_3;

async function openai_3() {
  const apiKey = document.getElementById("api-key").value;
  const answer = document.getElementById('2-3').value;
  var url = "https://api.openai.com/v1/completions";

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);

  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", "Bearer " + apiKey);

  xhr.onreadystatechange = function () {  
     if (xhr.readyState === 4) {
        open_ai_response_3 = JSON.parse(xhr.responseText);
        console.log(open_ai_response_3);
        if (open_ai_response_3.choices) {
          const generatedText = open_ai_response_3.choices[0].text;
          // Display the response in the result-box div
          document.getElementById("result-box-2-3").innerHTML = generatedText;
        } else {
          console.error('Error: No "choices" property in OpenAI response.');
        }
     }};

  var data = {
    "prompt": `
Decide whether a student\'s response is essentially correct. 

The followings are correct answers : 
* Level curve and the restriction are not cross each other.
* Level curve is tangent to restriction function
* the tangent line of level curve and the tangent line of restriction are the same line at the point where those extreme points

The followings are not accepted answer:
* Level curve and restriction curve are touch at a point

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
