window.onload = () => {
  const subtitle = document.querySelector(".subtitle");

  const frames = ["Rebranding.", "Rebranding..", "Rebranding..."];

  let idx = 0;

  setInterval(() => {
    subtitle.textContent = frames[idx];
    idx = (idx + 1) % frames.length;
  }, 500);
};
