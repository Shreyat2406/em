import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [selectedMeal, setSelectedMeal] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [meals,setMeals] = useState([]);
  // Handle Meal Selection
  const handleMealChange = (event) => {
    const meal = event.target.value;
    setSelectedMeal(meal);
  };

  // Enable Editing
  const handleEdit = () => {
    setIsEditing(true);
    setSelectedMeal("");
  };


  // Save the Selection
  const handleSave = () => {
    if (selectedMeal) {
      console.log(`Saved: ${selectedMeal}`);
      setMeals([...meals,selectedMeal])
      console.log(meals)
      setIsEditing(false); // Disable editing after saving
      
    } else {
      console.log("Please select a meal before saving.");
    }
  };

  return (
    <div className="container">
      {/* Header Section */}
      <div className="header">
        <h2>TECH TITANS</h2>
        <p>ALICE JOHN</p>
        <p>ABC College Of Engineering</p>
      </div>

      {/* Meal Selection Section */}
      <div className="meals">
        
        {isEditing ? (
          <>
            <label className="meal-option">
              <input
                type="radio"
                name="meal"
                value="Breakfast"
                disabled={meals.includes("Breakfast")}
                onChange={handleMealChange}
              />
              <span className={selectedMeal === "Breakfast" ? "selected" : ""}>
                BREAKFAST
              </span>
            </label>
            <label className="meal-option">
              <input
                type="radio"
                name="meal"
                value="Lunch"
                disabled={meals.includes("Lunch")}
                onChange={handleMealChange}
              />
              <span className={selectedMeal === "Lunch" ? "selected" : ""}>
                LUNCH
              </span>
            </label>
            <label className="meal-option">
              <input
                type="radio"
                name="meal"
                value="Dinner"
                disabled={meals.includes("Dinner")}
                onChange={handleMealChange}
              />
              <span className={selectedMeal === "Dinner" ? "selected" : ""}>
                DINNER
              </span>
            </label>
          </>
        ) : (
          <div className="selected-meal">
            {selectedMeal ? `Selected Meal: ${selectedMeal}` : "No meal selected"}
          </div>
        )}
      </div>

      {/* Buttons */}
      <div className="buttons">
        {!isEditing ? (
          <button onClick={handleEdit}>Edit</button>
        ) : (
          <button onClick={handleSave}>Save</button>
        )}
      </div>

      {/* Team Members Section */}
      <div className="team-members">
        <h4>Team Members:</h4>
        <ul>
          <li>BOB SMITH</li>
          <li>FRANK LEE</li>
          <li>CHARLES DAVIS</li>
          <li>EVE HARPER</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
