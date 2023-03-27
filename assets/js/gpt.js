// Fetch the template text from file
function gpt(id){
  fetch('../assets/js/chatgpt/calculusQuestions/{id}.json'.replace('{id}',id))
    .then(response => response.json())
    .then(data => {
      // Once the template is loaded, define the openai_0 function
      const apiKey = document.getElementById("api-key").value;
      const answer = document.getElementById("answer-{id}".replace('{id}',id)).value;
      const url = "https://api.openai.com/v1/completions";

      var xhr = new XMLHttpRequest();
      xhr.open("POST", url);

      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("Authorization", "Bearer " + apiKey);

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          open_ai_response_0 = JSON.parse(xhr.responseText);
          console.log(open_ai_response_0);
          if (open_ai_response_0.choices) {
            const generatedText = open_ai_response_0.choices[0].text;
            // Display the response in the result-box div
            document.getElementById("result-box-{id}".replace('{id}',id)).innerHTML = generatedText;
          } else {
            console.error('Error: No "choices" property in OpenAI response.');
          }
        }
      };

      data.prompt = data.prompt.replace('{input}', answer);
      console.log(data)
      delete data.question;
      data = JSON.stringify(data);
      xhr.send(data);

    });
}
