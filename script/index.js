
// document.addEventListener("DOMContentLoaded", () => {
//     const form = document.getElementById("form");
//     const fileInput = document.getElementById("fileInput");

//     if (!form) {
//         console.error("Form element (#form) not found on this page.");
//         return;
//     }

//     form.addEventListener("submit", (e) => {
//         e.preventDefault();
//         console.log("Submit clicked");

//         const name = (document.getElementById("myName") || {}).value?.trim() || "";
//         const email = (document.getElementById("email") || {}).value?.trim() || "";
//         const user = (document.getElementById("user") || {}).value?.trim() || "";
//         const file = fileInput && fileInput.files && fileInput.files[0];

//         // Basic validation
//         if (!name || !email) {
//             alert("Please enter both name and email.");
//             return;
//         }

//         try {
//             localStorage.setItem("confName", name);
//             localStorage.setItem("confEmail", email);
//             localStorage.setItem("confUser", user);
//         } catch (err) {
//             console.error("Error writing to localStorage:", err);
//             alert("Unable to save form data in localStorage.");
//             return;
//         }

//         // Generate a simple ticket id and save it
//         const ticketId = "#" + Math.floor(10000 + Math.random() * 90000);
//         localStorage.setItem("confTicketId", ticketId);

//         // If there's an uploaded image, validate and save as base64, then redirect
//         if (file) {
//             if (!file.type.startsWith("image/")) {
//                 alert("Please upload an image file (jpg/png).");
//                 return;
//             }
//             const maxBytes = 500 * 1024; // 500KB requirement in your UI
//             if (file.size > maxBytes) {
//                 alert("Image too large. Please upload an image <= 500 KB.");
//                 return;
//             }

//             const reader = new FileReader();
//             reader.onload = (evt) => {
//                 try {
//                     localStorage.setItem("confAvatar", evt.target.result); // base64 string
//                     console.log("Avatar saved to localStorage (base64). Redirecting...");
//                     window.location.href = "index2.html";
//                 } catch (err) {
//                     console.error("Error saving avatar to localStorage:", err);
//                     alert("Couldn't save the image. Try a smaller file or a different browser.");
//                 }
//             };
//             reader.onerror = (err) => {
//                 console.error("FileReader error:", err);
//                 alert("Could not read the file you selected.");
//             };
//             reader.readAsDataURL(file);
//         } else {
//             // No image — just redirect
//             console.log("No avatar uploaded. Redirecting to ticket page...");
//             window.location.href = "index2.html";
//         }
//     });
// });




document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const fileInput = document.getElementById("fileInput");
    const preview = document.getElementById("preview");
    const previewImg = document.getElementById("preview-img");
    const changeBtn = document.getElementById("changeBtn");
    const removeBtn = document.getElementById("removeBtn");
    const uploadLabel = document.getElementById("upload-label");

    // Show preview when image selected
    fileInput.addEventListener("change", () => {
        const file = fileInput.files[0];
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = (e) => {
                previewImg.src = e.target.result;
                preview.style.display = "block";
                uploadLabel.style.display = "none";
            };
            reader.readAsDataURL(file);
        }
    });

    // Change button → re-open input
    changeBtn.addEventListener("click", () => {
        fileInput.click();
    });

    // Remove button → reset
    removeBtn.addEventListener("click", () => {
        fileInput.value = "";
        previewImg.src = "";
        preview.style.display = "none";
        uploadLabel.style.display = "block";
    });

    // Handle form submission
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("myName").value.trim();
        const email = document.getElementById("email").value.trim();
        const user = document.getElementById("user").value.trim();
        const file = fileInput.files[0];


        if (!name || !email || !user) {

            return;
        }

        // Save text values
        localStorage.setItem("confName", name);
        localStorage.setItem("confEmail", email);
        localStorage.setItem("confUser", user);

        // Ticket ID
        // const ticketId = "#" + Math.floor(10000 + Math.random() * 90000);
        // localStorage.setItem("confTicketId", ticketId);

        // Save avatar (if any)
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                localStorage.setItem("confAvatar", event.target.result);
                window.location.href = "../html/index2.html";
            };
            reader.readAsDataURL(file);
        } else {
            window.location.href = "../html/index2.html";
        }
    });
});

