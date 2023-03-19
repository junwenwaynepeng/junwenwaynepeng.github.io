<h1>OpenAI Test</h1>
<label for="api-key">API Key:</label>
<input type="text" id="api-key" name="api-key">
<button onclick="openai_test()">Test OpenAI</button>
<div id="result-box"></div>

<script>
  let open_ai_response;

  async function openai_test() {
    const apiKey = document.getElementById("api-key").value;
    var url = "https://api.openai.com/v1/completions";

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", "Bearer " + apiKey);

    xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
          console.log(xhr.status);
          console.log(xhr.responseText);
          open_ai_response = JSON.parse(xhr.responseText);
          console.log(open_ai_response);
          const generatedText = open_ai_response.choice;
          // Display the response in the result-box div
          document.getElementById("result-box").innerHTML = open_ai_response;
       }};

    var data = `{
      "prompt": "YOUR TEXT HERE.",
      "temperature": 0.7,
      "max_tokens": 256,
      "top_p": 1,
      "frequency_penalty": 0.75,
      "presence_penalty": 0,
      "model": "text-davinci-002"
    }`;

    xhr.send(data);
  }
</script>