
//*****1st event HOME PAGE*****

document.addEventListener("DOMContentLoaded", function () {
    // Get the download button by its ID
    const downloadBtn = document.getElementById("downloadButton");

    // Add a click event listener to the button
    downloadBtn.addEventListener("click", function () {
        // Show a message if you want to proceed
        if (confirm("Do you want to go to downloads page?")) {
            // If confirmed, redirect to the download page
            window.location.href = "downloads.html";
        }
    });
});



//*****2nd event CONTACT US PAGE *****

document.addEventListener("DOMContentLoaded", function () {
    // Get the contact form by its ID
    const contactForm = document.getElementById("contactForm");

    // Add submit event to the form
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();  // Prevent form submission

        // Get user inputs for name and email
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        // Show a thank you alert with name and email
        alert(`Thank you, ${name}! We will contact you at ${email}.`);

        // Clear the form fields
        contactForm.reset();
    });
});


// *****3rd Event DOWNLOAD PAGE*****

document.addEventListener("DOMContentLoaded", function () {
    // Select the download buttons for different operating systems
    const windowsButton = document.getElementById("windowsDownload");
    const linuxButton = document.getElementById("linuxDownload");
    const macButton = document.getElementById("macDownload");

    // Event for the download button for Windows
    windowsButton.addEventListener("click", function () {
        alert("Your download for Windows is starting!"); // Display an alert when the Windows button is clicked
    });

    // Event for the download button for Linux
    linuxButton.addEventListener("click", function () {
        alert("Your download for Linux is starting!"); // Display an alert when the Linux button is clicked
    });

    // Event for the download button for Mac
    macButton.addEventListener("click", function () {
        alert("Your download for Mac is starting!"); // Display an alert when the Mac button is clicked
    });
});

