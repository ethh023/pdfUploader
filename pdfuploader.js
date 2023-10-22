document.addEventListener("DOMContentLoaded", function () {
  const pdfInput = document.getElementById("pdfInput");
  const viewButton = document.getElementById("viewButton");
  const stopButton = document.getElementById("stopButton");
  const pdfViewer = document.getElementById("pdfViewer");
  let pdfContent = null; //set as null for now, this is where we store the pdf content to be able to remove it later

  viewButton.addEventListener("click", function () {
    const file = pdfInput.files[0];
    if (file && file.type === "application/pdf") {
      const fileReader = new FileReader();
      fileReader.onload = function (event) {
        pdfContent = event.target.result;
        pdfViewer.innerHTML = `<embed src="${pdfContent}" type="application/pdf" width="80%" height="850px">`;
      };
      fileReader.readAsDataURL(file);
    } else {
      pdfViewer.innerHTML = "<p>Please select a valid PDF file.</p>";
    }
  });

  stopButton.addEventListener("click", function () {
    pdfViewer.innerHTML = "";
    pdfContent = null;
  });
});
