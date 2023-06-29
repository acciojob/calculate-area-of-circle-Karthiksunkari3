//your JS code here. If required.
function calculateCircleArea() {
  const radius = parseFloat(prompt("Enter the radius of the circle:")); // Take input from the user

  if (isNaN(radius)) {
    console.log("Invalid input. Please enter a valid number."); // Handle invalid input
    return;
  }

  const area = Math.PI * radius * radius; // Calculate the area of the circle
  const roundedArea = area.toFixed(2); // Round off the area to two decimal places

  console.log("The area of the circle with radius", radius, "is", roundedArea);
}

calculateCircleArea();
