/*
    Name: Simranpreet kaur
    Assignment 5
    Date: 26-10-2023
*/

$(document).ready(function () {
    // Define the ContentItem class
// ... (previous code) ...

// Create an array of 5 content items
const contentItems = [
    new ContentItem(0, "Item 1", "Description 1", "Category A"),
    new ContentItem(1, "Item 2", "Description 2", "Category B"),
    new ContentItem(2, "Item 3", "Description 3", "Category C"),
    new ContentItem(3, "Item 4", "Description 4", "Category D"),
    new ContentItem(4, "Item 5", "Description 5", "Category E"),
];

// Function to update a ContentItem successfully
function updateSuccessfulContentItem() {
    // Update the first ContentItem with a new name
    contentItems[0].updateContentItem(0, "Updated Item 1", null, null);
    // Re-render the content list
    renderContentItems();
}

// Function to attempt to update a ContentItem unsuccessfully
function updateUnsuccessfulContentItem() {
    // Attempt to update a non-existent ContentItem (ID: 10)
    contentItems[0].updateContentItem(10, "Should Not Update", null, null);
    // Re-render the content list
    renderContentItems();
}

// Function to render content items
function renderContentItems() {
    const $contentList = $("#content-item-list");
    $contentList.empty(); // Clear the content list

    contentItems.forEach(item => {
        const $itemWrapper = $(item.toString());
        $itemWrapper.addClass("content-item");
        $contentList.append($itemWrapper);
    });
}

// Add content items to the page on page load
$(document).ready(function () {
    renderContentItems();

    // Attach click event handlers to the buttons
    $("#updateSuccessfulButton").on("click", updateSuccessfulContentItem);
    $("#updateUnsuccessfulButton").on("click", updateUnsuccessfulContentItem);
});
})
