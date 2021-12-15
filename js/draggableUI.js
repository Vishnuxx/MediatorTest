let resizer = document.getElementsByClassName("resizer")[0];
const leftSide = resizer.previousElementSibling;
const rightSide = resizer.nextElementSibling;
let direction = resizer.getAttribute('data-direction') || 'horizontal';

// The current position of mouse
let x = 0;
let y = 0;

// Width of left side
let leftWidth = 0;



const mouseDownHandler = function (e) {
    // Get the current mouse position
    x = e.clientX;
    y = e.clientY;
    leftWidth = leftSide.getBoundingClientRect().width;

    // Attach the listeners to `document`
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};

// Attach the handler
resizer.addEventListener('mousedown', mouseDownHandler);

const mouseMoveHandler = function(e) {
    switch (direction) {
        case 'vertical':
            const h = (prevSiblingHeight + dy) * 100 / resizer.parentNode.getBoundingClientRect().height;
            prevSibling.style.height = `${h}%`;
            break;
        case 'horizontal':
        default:
            const w = (prevSiblingWidth + dx) * 100 / resizer.parentNode.getBoundingClientRect().width;
            prevSibling.style.width = `${w}%`;
            break;
    }

    const cursor = direction === 'horizontal' ? 'col-resize' : 'row-resize';
    resizer.style.cursor = cursor;
    document.body.style.cursor = cursor;

};




const mouseUpHandler = function () {
    resizer.style.removeProperty('cursor');
    document.body.style.removeProperty('cursor');

    leftSide.style.removeProperty('user-select');
    leftSide.style.removeProperty('pointer-events');

    rightSide.style.removeProperty('user-select');
    rightSide.style.removeProperty('pointer-events');

    // Remove the handlers of `mousemove` and `mouseup`
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
};

