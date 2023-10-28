/*
    Name: Simranpreet kaur
    Assignment 5
    Date: 26-10-2023
*/

$(document).ready(function () {
    // Define the ContentItem class
class ContentItem {
    constructor(id, name, description, category) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category;
    }

    updateContentItem(id, name, description, category) {
        if (id === this.id) {
            if (name !== null) this.name = name;
            if (description !== null) this.description = description;
            if (category !== null) this.category = category;
        }
    }

    toString() {
        return `<div class="content-item-wrapper" id="content-item-${this.id}">
                    <h2>${this.name}</h2>
                    <p>${this.description}</p>
                    <div>${this.category}</div>
                </div>`;
    }
}

// Create an array of 5 content items
const contentItems = [
    new ContentItem(0, "Item 1", "Description 1", "Category A"),
    new ContentItem(1, "Item 2", "Description 2", "Category B"),
    new ContentItem(2, "Item 3", "Description 3", "Category C"),
    new ContentItem(3, "Item 4", "Description 4", "Category D"),
    new ContentItem(4, "Item 5", "Description 5", "Category E"),
];

// Add content items to the page
$(document).ready(function () {
    const $contentList = $("#content-item-list");
    contentItems.forEach(item => {
        const $itemWrapper = $(item.toString());
        $itemWrapper.css({
            border: "2px solid black",
            width: "300px",
            padding: "10px",
            margin: "10px auto",
        });
        $contentList.append($itemWrapper);
    });

    // Add click event handlers for the update buttons
    $("#updateSuccessfulButton").click(function () {
        // Update the first content item successfully
        contentItems[0].updateContentItem(0, "Updated Item 1", null, null);
        $contentList.empty();
        contentItems.forEach(item => {
            const $itemWrapper = $(item.toString());
            $itemWrapper.css({
                border: "2px solid black",
                width: "300px",
                padding: "10px",
                margin: "10px auto",
            });
            $contentList.append($itemWrapper);
        });
    });

    $("#updateUnsuccessfulButton").click(function () {
        // Attempt to update a non-existent content item (ID: 10)
        contentItems[0].updateContentItem(10, "Should Not Update", null, null);
        $contentList.empty();
        contentItems.forEach(item => {
            const $itemWrapper = $(item.toString());
            $itemWrapper.css({
                border: "2px solid black",
                width: "300px",
                padding: "10px",
                margin: "10px auto",
            });
            $contentList.append($itemWrapper);
        });
    });
});

})
