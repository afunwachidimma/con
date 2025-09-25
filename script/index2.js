
// document.addEventListener("DOMContentLoaded", () => {
//     console.log("index2.js loaded");

//     // Read from localStorage
//     const name = localStorage.getItem("confName") || "Guest";
//     const email = localStorage.getItem("confEmail") || "guest@example.com";
//     const user = localStorage.getItem("confUser") || "@unknown";
//     const avatar = localStorage.getItem("confAvatar");
//     const ticketId = localStorage.getItem("confTicketId") || ("#" + Math.floor(10000 + Math.random() * 90000));

//     // Helper to safely set element text / attributes
//     const setText = (id, text) => {
//         const el = document.getElementById(id);
//         if (el) el.textContent = text;
//         else console.warn(`Element #${id} not found`);
//     };
//     const setHTML = (id, html) => {
//         const el = document.getElementById(id);
//         if (el) el.innerHTML = html;
//         else console.warn(`Element #${id} not found`);
//     };

//     // Fill in the ticket
//     setText("h1", `Congrats, ${name}! your ticket is ready.`);
//     const linkEl = document.getElementById("link");
//     if (linkEl) {
//         linkEl.textContent = email;
//         linkEl.href = `mailto:${email}`;
//     } else {
//         console.warn("#link not found");
//     }

//     setText("name", name);
//     setText("email", user);
//     setText("p2", "Jan 31, 2025 / Austin, TX"); // keep static or change as needed
//     setText("p4", ticketId);

//     const avatarEl = document.getElementById("avatar");
//     if (avatarEl) {
//         if (avatar) {
//             avatarEl.src = avatar;
//         } else {
//             // fallback placeholder if no avatar saved
//             avatarEl.src = "https://via.placeholder.com/100";
//             avatarEl.alt = "No avatar uploaded";
//         }
//     } else {
//         console.warn("#avatar element not found");
//     }

//     console.log("Ticket populated:", { name, email, user, ticketId, hasAvatar: !!avatar });
// });
document.addEventListener("DOMContentLoaded", () => {
    const name = localStorage.getItem("confName") || "Guest";
    const email = localStorage.getItem("confEmail") || "guest@example.com";
    const user = localStorage.getItem("confUser") || "@unknown";
    const avatar = localStorage.getItem("confAvatar");
    const ticketId = localStorage.getItem("confTicketId") || "#00000";

    document.getElementById("h1").innerHTML = `Congrats, <span class="spa">${name}</span> ! your ticket is ready.`;
    const linkEl = document.getElementById("link");
    if (linkEl) {
        linkEl.textContent = email;
        linkEl.href = `mailto:${email}`;
    }
    document.getElementById("name").innerText = name;
    document.getElementById("email").innerText = user;
    document.getElementById("p4").innerText = ticketId;

    const avatarEl = document.getElementById("avatar");
    if (avatar) {
        avatarEl.src = avatar;
    } else {
        avatarEl.src = "https://via.placeholder.com/100";
        avatarEl.alt = "No avatar uploaded";
    }
});
