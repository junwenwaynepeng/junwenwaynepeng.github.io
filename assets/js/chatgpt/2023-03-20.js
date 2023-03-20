<script>
  let open_ai_response;

  async function openai_test() {
    const apiKey = document.getElementById("api-key").value;
    const answer = document.getElementById('1-2').value;
    var url = "https://api.openai.com/v1/completions";

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", "Bearer " + apiKey);

    xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
          open_ai_response = JSON.parse(xhr.responseText);
          if (open_ai_response.choices) {
            const generatedText = open_ai_response.choices[0].text;
            // Display the response in the result-box div
            document.getElementById("result-box").innerHTML = generatedText;
          } else {
            console.error('Error: No "choices" property in OpenAI response.');
          }
          // Display the response in the result-box div
          document.getElementById("result-box").innerHTML = generatedText;
       }};

    var data = {
      "prompt": `
Decide whether a student\'s response is essentially correct. 

The followings are correct answers : 
* The critical points on the surface are those who have gradient 0
* Because we want to find extreme points and in this cases they have gradient 0
* Because extreme value are critical points of a surface, we set gradient equal to zero vector to find critical points
* Because we want to find critical points

The followings are not accepted answer:
* Because we want to find extreme points
* Because we want to find minimal points

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
</script>