async function copyText(btn) {
  const text = btn.closest(".codebox").querySelector("code").innerText;

  try {
    await navigator.clipboard.writeText(text);
  } catch (e) {
    console.error("Másolás nem sikerült:", e);
    return;
  }

  btn.classList.add("done");
  setTimeout(() => btn.classList.remove("done"), 1500);
}