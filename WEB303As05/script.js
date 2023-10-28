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
                    <h4>${this.name}</h4>
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

$(document).ready(function () {
    const $contentList = $("#content-item-list");
    contentItems.forEach(item => {
        const $itemWrapper = $(item.toString());
        $itemWrapper.addClass("content-item"); 
        $contentList.append($itemWrapper);
    });
});



});


