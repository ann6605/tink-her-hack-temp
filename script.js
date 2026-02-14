// Show Routes Button
document.getElementById("showRoutes").addEventListener("click", () => {
    const source = document.getElementById("source").value.trim();
    const destination = document.getElementById("destination").value.trim();
    if(!source || !destination) { 
        alert("Enter both source and destination!"); 
        return;
    }

    // Dummy Routes Example
    const dummyRoutes = [
        {name:"Route 1", safety:9, crowd:"Low"},
        {name:"Route 2", safety:8, crowd:"Medium"}
    ];

    displayRoutes(dummyRoutes, source, destination);
});

// Display Routes Dynamically
function displayRoutes(routes, source, destination) {
    const container = document.getElementById("routesContainer");
    container.innerHTML = ""; // Clear previous routes

    routes.forEach((route,index)=>{
        const card = document.createElement("div");
        card.className = "route-card";
        card.innerHTML = `
            <h3>${route.name}</h3>
            <p><strong>Safety Score:</strong> ${route.safety}/10</p>
            <p><strong>Crowd Level:</strong> ${route.crowd}</p>
            <button class="toggleFeedback">Give Feedback</button>
            <div class="feedback-div" style="display:none;">
                <label>Safety Rating:</label>
                <select class="safetyRating">${[...Array(10).keys()].map(i=>`<option>${i+1}</option>`).join('')}</select>
                <label>Crowd Level:</label>
                <select class="crowdFeedback">
                    <option>Low</option><option>Medium</option><option>High</option>
                </select>
                <button class="submitFeedback">Submit Feedback</button>
            </div>
        `;

        // Toggle Feedback Div
        const toggleBtn = card.querySelector(".toggleFeedback");
        const feedbackDiv = card.querySelector(".feedback-div");
        toggleBtn.addEventListener("click", (e)=>{
            e.stopPropagation();
            feedbackDiv.style.display = feedbackDiv.style.display === "none" ? "block" : "none";
        });

        // Submit Feedback
        card.querySelector(".submitFeedback").addEventListener("click",(e)=>{
            e.stopPropagation();
            const safety = feedbackDiv.querySelector(".safetyRating").value;
            const crowd = feedbackDiv.querySelector(".crowdFeedback").value;
            alert(`Feedback Submitted for ${route.name}!\nSafety: ${safety}\nCrowd: ${crowd}`);
        });

        // Open Google Maps for this route
        card.addEventListener("click", (e)=>{
            if(e.target.closest(".toggleFeedback") || e.target.closest(".submitFeedback") || e.target.closest("select")) return;
            const src = encodeURIComponent(source);
            const dest = encodeURIComponent(destination);
            window.open(`https://www.google.com/maps/dir/${src}/${dest}`, "_blank");
        });

        container.appendChild(card);
    });
}

// Panic Button Logic
const panicButton = document.getElementById("panicButton");
const panicModal = document.getElementById("panicModal");
const closeModal = document.querySelector(".modal .close");
const sendAlert = document.getElementById("sendAlert");

panicButton.addEventListener("click", () => {
    panicModal.style.display = "block";
});
closeModal.addEventListener("click", () => panicModal.style.display = "none");
window.addEventListener("click", (e)=>{
    if(e.target === panicModal) panicModal.style.display = "none";
});

// Send Alert to Nearby Emergency
sendAlert.addEventListener("click", () => {
    const type = document.getElementById("emergencyType").value;

    if(!navigator.geolocation) {
        alert("Geolocation not supported by your browser!");
        return;
    }

    navigator.geolocation.getCurrentPosition((position)=>{
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        alert(`🚨 Alert sent to nearby ${type}!\nYour location: https://www.google.com/maps?q=${lat},${lng}`);
        panicModal.style.display = "none";
    }, (err)=>{
        alert("Could not get your location. Please allow location access.");
    });
});
