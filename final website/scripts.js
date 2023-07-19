function handleFormSubmit(event) {
    event.preventDefault();
  
    // Get the form data.
    const formData = new FormData(event.target);
  
    // Get the order date.
    const orderDate = new Date();
  
    // Calculate the total carbohydrates, protein, fat, sugar, and calories.
    let carbohydrates = 0;
    let protein = 0;
    let fat = 0;
    let sugar = 0;
    let calories = 0;
  
    for (const fruit of formData.get("fruit_1").split(",")) {
      const fruitData = fruits.find(fruit => fruit.id === fruit);
      carbohydrates += fruitData.carbohydrates;
      protein += fruitData.protein;
      fat += fruitData.fat;
      sugar += fruitData.sugar;
      calories += fruitData.calories;
    }
  
    // Create the output area.
    const outputArea = document.getElementById("output");
    outputArea.innerHTML = `
      <h2>Order Details</h2>
      <ul>
        <li>First Name: ${formData.get("first_name")}</li>
        <li>Email: ${formData.get("email")}</li>
        <li>Phone Number: ${formData.get("phone_number")}</li>
        <li>Fruit 1: ${formData.get("fruit_1")}</li>
        <li>Fruit 2: ${formData.get("fruit_2")}</li>
        <li>Fruit 3: ${formData.get("fruit_3")}</li>
        <li>Special Instructions: ${formData.get("special_instructions")}</li>
        <li>Order Date: ${orderDate}</li>
        <li>Carbohydrates: ${carbohydrates}</li>
        <li>Protein: ${protein}</li>
        <li>Fat: ${fat}</li>
        <li>Sugar: ${sugar}</li>
        <li>Calories: ${calories}</li>
      </ul>
    `;
  }
  
  // Attach the event handler to the form.
  document.getElementById("form").addEventListener("submit", handleFormSubmit);
  