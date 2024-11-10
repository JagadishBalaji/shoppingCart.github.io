// Function to handle the box expansion and update the selected border color
function updateBoxExpansion() {
    // Get all boxes
    const boxes = document.querySelectorAll('.box');

    // Reset all boxes: Remove the expanded and selected-box classes
    boxes.forEach(box => {
        box.classList.remove('expanded', 'selected-box');
    });

    // Expand box if the corresponding radio button is selected
    document.querySelectorAll('.expand-radio').forEach(radio => {
        const box = radio.closest('.box');
        if (radio.checked) {
            box.classList.add('expanded');  // Expand the box
            box.classList.add('selected-box');  // Highlight the border color
        }
    });

    // After updating the expansion, update the total price
    updateTotalAmount();
}

// Function to calculate the total amount based on selected boxes
function updateTotalAmount() {
    let total = 0;

    // Define the box prices (new prices)
    const boxPrices = {
        box1: 10.00,
        box2: 18.00,
        box3: 24.00
    };

    // Check the state of each radio button (whether it is checked)
    if (document.getElementById('expandBox1').checked) {
        total += boxPrices.box1;
    }
    if (document.getElementById('expandBox2').checked) {
        total += boxPrices.box2;
    }
    if (document.getElementById('expandBox3').checked) {
        total += boxPrices.box3;
    }

    // Update the total amount displayed in the "Total Amount" element
    const totalAmountElement = document.getElementById('totalAmount');
    totalAmountElement.textContent = `$${total.toFixed(2)}`;
}

// Attach event listeners to the radio buttons
const radios = document.querySelectorAll('.expand-radio');
radios.forEach(radio => {
    radio.addEventListener('change', updateBoxExpansion);
});

// Initial check to update box expansion and total amount on page load
document.addEventListener('DOMContentLoaded', function() {
    updateBoxExpansion(); // Expand any checked box on page load
    updateTotalAmount();   // Update the total on page load
});
