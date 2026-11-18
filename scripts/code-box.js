document.querySelectorAll(".codebox").forEach(box => {
  const btn = box.querySelector(".copy");
  btn.addEventListener("click", async () => {
    await navigator.clipboard.writeText(box.querySelector("code").innerText);
    btn.classList.add("done");
    setTimeout(() => btn.classList.remove("done"), 1500);
  });
});