function checkFileSize() {
    var fileInput = document.getElementById("logo");
    var fileSize = fileInput.files[0].size; // File size in bytes
    var maxSize = 5 * 1024 * 1024; // 5 MB in bytes

    if (fileSize > maxSize) {
      document.getElementById("fileSizeError").innerHTML =
        "File size should be 5 MB or less.";
      return false; // Prevent form submission
    }

    return true; // Allow form submission
  }