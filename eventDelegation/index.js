document.querySelector('#products').addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        window.location.href += '#' + event.target.id;
    }
})

// event delegation describes that without adding event listeners to each specific list items 
// we just added it to the parent and we are using to click other list items.



// ******** Follow Javascript notes ********** OR
// ***********  Javascripttutorial.net event delegation topics in event chapter ************