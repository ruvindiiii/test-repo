function cookLunch(a) {
  let cookingMainItems = [];
  console.log("Get items out of the fridge");
  cookingMainItems.push("Chicken");
  cookingMainItems.push("Beans");
  cookingMainItems.push("Potatoes");
  console.log("Heat pan");
  for (let i = 0; i < cookingMainItems.length; i++) {
    cutThingsWithKnife(cookingMainItems[i]);
  }
  console.log("Add ingredients");
  console.log("Stir and cook");
}
