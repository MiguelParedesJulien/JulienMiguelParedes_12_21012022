export default class User {
    constructor(
      id,
      firstName,
      lastName,
      age,
      score,
      calorieCount,
      proteinCount,
      carbohydrateCount,
      lipidCount,
      keyData
    ) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.score = score;
      this.calorieCount = calorieCount;
      this.proteinCount = proteinCount;
      this.carbohydrateCount = carbohydrateCount;
      this.lipidCount = lipidCount;
      this.keyData = keyData;
  } 
}