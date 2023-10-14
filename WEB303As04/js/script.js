/*
    Assignment #4
    Name: Simranpreet Kaur
*/

$(function () {
    
// Check if geolocation is available
if ("geolocation" in navigator) {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const locationHere = document.getElementById("locationhere");
        locationHere.textContent = `Current Location: Latitude ${latitude}, Longitude ${longitude}`;

        // Check if a location value is stored in local storage
        const storedLocation = localStorage.getItem("userLocation");
        if (storedLocation) {
            const [storedLat, storedLon] = storedLocation.split(",");
            const distance = getDistance(latitude, longitude, parseFloat(storedLat), parseFloat(storedLon));

            const welcomeMessage = document.getElementById("welcomeMessage");
            welcomeMessage.textContent = "Welcome back to the page!";

            const distanceTravelled = document.getElementById("distanceTravelled");
            distanceTravelled.textContent = `You traveled ${distance.toFixed(2)} meters since your last visit.`;
        }

        // Store the current location in local storage
        localStorage.setItem("userLocation", `${latitude},${longitude}`);
    });
} else {
    // Geolocation not supported
    const locationHere = document.getElementById("locationhere");
    locationHere.textContent = "Geolocation is not available in your browser.";
}

// Function to calculate the distance between two coordinates using Haversine formula
function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c * 1000; // Distance in meters
    return distance;
}
});
