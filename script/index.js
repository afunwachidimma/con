document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const fileInput = document.getElementById("fileInput");
    const preview = document.getElementById("preview");
    const previewImg = document.getElementById("preview-img");
    const changeBtn = document.getElementById("changeBtn");
    const removeBtn = document.getElementById("removeBtn");
    const uploadLabel = document.getElementById("upload-label");

    const nameInput = document.getElementById("myName");
    const emailInput = document.getElementById("email");
    const userInput = document.getElementById("user");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const userError = document.getElementById("userError");
    const avatarError = document.getElementById("avatarError");

    // ========== IMAGE UPLOAD ==========
    fileInput.addEventListener("change", () => {
        const file = fileInput.files[0];
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = (e) => {
                previewImg.src = e.target.result;
                preview.style.display = "block";
                uploadLabel.style.display = "none";
                avatarError.style.display = "none"; // clear avatar error
            };
            reader.readAsDataURL(file);
        }
    });

    changeBtn.addEventListener("click", () => fileInput.click());

    removeBtn.addEventListener("click", () => {
        fileInput.value = "";
        previewImg.src = "";
        preview.style.display = "none";
        uploadLabel.style.display = "block";
    });

    // ========== FORM SUBMIT ==========
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let isValid = true;

        // Reset errors
        [nameError, emailError, userError, avatarError].forEach(err => err.style.display = "none");
        [nameInput, emailInput, userInput].forEach(input => input.classList.remove("error"));

        // Name validation
        if (nameInput.value.trim() === "") {
            nameError.textContent = "Full name is required";
            nameError.style.display = "block";
            isValid = false;
        }

        // Email validation
        if (!emailInput.value.includes("@")) {
            emailError.textContent = "Please enter a valid email with @";
            emailError.style.display = "block";
            isValid = false;
        }

        // GitHub username validation
        if (!userInput.value.startsWith("@")) {
            userError.textContent = "GitHub username must start with @";
            userError.style.display = "block";
            isValid = false;
        }

        // Avatar validation
        if (!fileInput.files[0]) {
            avatarError.textContent = "Please upload your avatar";
            avatarError.style.display = "block";
            isValid = false;
        }

        if (!isValid) return; // stop if invalid

        // Save data
        localStorage.setItem("confName", nameInput.value.trim());
        localStorage.setItem("confEmail", emailInput.value.trim());
        localStorage.setItem("confUser", userInput.value.trim());

        const file = fileInput.files[0];
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
