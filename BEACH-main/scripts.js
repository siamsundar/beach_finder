















// scripts.js
function initMap() {
    const map = new google.maps.Map(document.getElementById("map-canvas"), {
        center: { lat: 20.5937, lng: 78.9629 }, // Center of India
        zoom: 5,
    });

    // Example marker
    new google.maps.Marker({
        position: { lat: 15.2993, lng: 74.1240 }, // Example coordinates for Goa
        map: map,
        title: "Goa Beach"
    });
}

function submitComment() {
    const commentBox = document.getElementById('comment-box');
    const userReviews = document.getElementById('user-reviews');
    const newComment = document.createElement('p');
    newComment.textContent = commentBox.value;
    userReviews.appendChild(newComment);
    commentBox.value = ''; // Clear the comment box
}

// Example function to load beach list with images (static example)
function loadBeachList() {
    const beachList = document.getElementById('beach-list');
    beachList.innerHTML = `
        <div>
            <img src="goa-beach.jpg" alt="Goa Beach">
            <h3>Goa Beach</h3>
            <p>Location: Goa</p>
            <p>Activities: Swimming, Surfing, Fishing</p>
        </div>
    `;
}

// Example function to load weather updates (static example)
function loadWeatherUpdates() {
    const weatherUpdates = document.getElementById('weather-updates');
    weatherUpdates.innerHTML = `
        <p>Current weather: 30°C, Sunny</p>
        <p>Tide times: High tide at 3:00 PM</p>
    `;
}

// Example function to load safety index (static example)
function loadSafetyIndex() {
    const safetyRatings = document.getElementById('safety-ratings');
    safetyRatings.innerHTML = `
        <p>Safety rating: Moderate (Be cautious of strong currents)</p>
    `;
}



// Example function to Restrooms nearby info (static example)
function Restroomsnearby() {
    const RestroomInfo = document.getElementById('Restroom-info');
    RestroomInfo.innerHTML = as
        <p>RestroomsNearby-Restrooms boys/girls.</p>`;
}

// Example function to load events (static example)
function loadEvents() {
    const eventsTable = document.getElementById('events-table').getElementsByTagName('tbody')[0];
    const newRow = eventsTable.insertRow();
    newRow.insertCell(0).textContent = '2024-09-15';
    newRow.insertCell(1).textContent = 'Beach Clean-Up';
    newRow.insertCell(2).textContent = 'Goa Beach';

    <button onclick="alert('Button clicked!')">Click me</button>
   
}

// Call functions to load static data
loadBeachList();
loadWeatherUpdates();
loadSafetyIndex();
loadRestroomnearby();
loadAmenities();
loadEvents();