function solve(input) {
  const numberOfDriders = Number(input.shift());
  const currDrivers = input.splice(0, numberOfDriders);
  const driversInfo = [];

  for (let i = 0; i < numberOfDriders; i++) {
    let driver = currDrivers[i].split("|");
    let driverName = driver[0];
    let driverFuelCapacity = driver[1];
    let driverPosition = driver[2];

    if (driverFuelCapacity > 100) {
      driverFuelCapacity = 100;
    }
    let currDriverInfo = {
      name: driverName,
      fuelCapacity: Number(driverFuelCapacity),
      position: Number(driverPosition),
    };
    driversInfo.push(currDriverInfo);
  }

  let isFinished = true;

  while (input.lenght > 0 || isFinished !== false) {
    if (input[0] === "Finish") {
      isFinished = false;
      continue;
    }

    let currInput = input.shift();
    let cmdArgs = currInput.split(" - ");
    let cmd = cmdArgs[0];
    let rider = cmdArgs[1];

    switch (cmd) {
      case "StopForFuel":
        let minimumFuel = Number(cmdArgs[2]);
        let changedPossition = Number(cmdArgs[3]);
        let driver = driversInfo.find((n) => n.name === rider);
        if (driver.fuelCapacity <= minimumFuel) {
          driver.position = changedPossition;

          console.log(
            `${driver.name} stopped to refuel but lost his position, now he is ${driver.position}.`
          );
        } else {
          console.log(`${driver.name} does not need to stop for fuel!`);
        }

        break;

      case "Overtaking":
        let rider2 = cmdArgs[2];
        let firstDriver = driversInfo.find((n) => n.name === rider);
        let secondDriver = driversInfo.find((n) => n.name === rider2);

        let positionToChange = firstDriver.position;
        firstDriver.position = secondDriver.position;
        secondDriver.position = positionToChange;

        console.log(`${firstDriver.name} overtook ${secondDriver.name}!`);

        break;

      case "EngineFail":
        let lapsLeft = cmdArgs[2];
        let leavingDriver = driversInfo.find((n) => n.name === rider);
        let indexToRemove = driversInfo.indexOf(leavingDriver);
        driversInfo.splice(indexToRemove, 1);
        console.log(
          `${leavingDriver.name} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`
        );

        break;
    }
  }

  driversInfo.sort((a, b) => a.position - b.position);

  driversInfo.forEach((element) => {
    console.log(element.name);
    console.log(`  Final position: ${element.position}`);
  });
}
solve([
  "4",
  "Valentino Rossi|100|1",
  "Marc Marquez|90|3",
  "Jorge Lorenzo|80|4",
  "Johann Zarco|80|2",
  "StopForFuel - Johann Zarco - 90 - 5",
  "Overtaking - Marc Marquez - Jorge Lorenzo",
  "EngineFail - Marc Marquez - 10",
  "Finish",
]);
