---
title: Pyscript and OpenAI
subtitle: test pyscript
tags: ["test", "pyscript", "openai"]
pyscript: true
---

<div id="prompt"></div>
<div id="completion"></div>
<py-script>
import json
from js import localStorage, document, console, XMLHttpRequest

# !! set localStorage.setItem("openAI", "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") !!
bearer = "Bearer " + localStorage.getItem("openAI")

promptDiv = document.getElementById("prompt")
prompt = "list three colors"
promptDiv.innerHTML = "<h3>Prompt: </h3>\"" + prompt + "\"<hr/>"

# for best results (at a cost of $.02 per 1k tokens), use text-davinci-003
# for quickest and cheapest results ($.0004 per 1k tokens), use text-ada-001
engine = "text-ada-001"

xhr = XMLHttpRequest.new()
xhr.open("POST", "https://api.openai.com/v1/completions", False)
xhr.setRequestHeader("Content-Type", "application/json")
xhr.setRequestHeader("Authorization", bearer)

data = json.dumps({
    "model": engine,
    "prompt": prompt,
    "max_tokens": 100,
    "temperature": 0,
    "top_p": 1,
    "frequency_penalty": 1.2,
    "presence_penalty": 0
})

xhr.send(data)

json_response = json.loads(xhr.response)
completion_text = json_response["choices"][0]["text"]
# console.log("Colors: " + completion_text)

completionDiv = document.getElementById("completion")
completionDiv.innerHTML = "<h3>OpenAI (" + engine + ") Response: </h3>\"" + completion_text.strip() + "\""
</py-script>
