document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  fetch("https://formspree.io/f/xyznwppg", {
    method: "POST",
    body: data,
  })
    .then((res) => {
      if (res.ok) {
        document.getElementById("response").innerText = "Message sent!";
        form.reset();
      } else {
        document.getElementById("response").innerText = "Error sending message.";
      }
    })
    .catch(() => {
      document.getElementById("response").innerText = "Error sending message.";
    });
});
