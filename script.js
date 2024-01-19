//your JS code here. If required.
document.getElementById('btn').addEventListener('click', async function () {
  const textInput = document.getElementById('text').value;
  const delayInput = document.getElementById('delay').value;
  const delayInMillis = parseInt(delayInput) * 1000;
  const result = await delayAndDisplay(textInput, delayInMillis);
  document.getElementById('output').innerText = result;
});
async function delayAndDisplay(message, delay) {
  const delayPromise = new Promise(resolve => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
  return await delayPromise;
}