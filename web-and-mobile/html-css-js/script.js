window.addEventListener("load", function ()
{
    // Get button references. 
    let clickCounterElement = document.getElementById("click-counter");
    let clickButtonElement = document.getElementById("click-button");

    // Counter Value
    let counter = 0;

    // Click button function.
    let clickButtonFunction = function ()
    {
        // Increment counter.
        counter++;

        // Update click counter value.
        clickCounterElement.innerHTML = counter;
    };

    // Attach click button.
    clickButtonElement.addEventListener("click", clickButtonFunction);
});