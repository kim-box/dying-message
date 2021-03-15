document.addEventListener(
  "DOMContentLoaded",
  function () {
    const bg = chrome.extension.getBackgroundPage();
    Object.keys(bg.commas).forEach(function (url) {
      const div = document.createElement("div");
      div.textContent = `In ${url}, 
      ${bg.commas[url]} commas are exists
      `;
      document.body.appendChild(div);
    });

    // document.querySelector('button').addEventListener('click', onclick, false)
    //
    // function onclick () {
    //   chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
    //     chrome.tabs.sendMessage(tabs[0].id, 'hi', setCount)
    //   })
    // }
    //
    // function setCount (res) {
    //   const div = document.createElement('div')
    //   div.textContent = `${res.count} bears`
    //   document.body.appendChild(div)
    // }
  },
  false
);
