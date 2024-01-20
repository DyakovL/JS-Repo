function solve(input) {
  const n = Number(input.shift());
  let initialStateOfSprint = input.splice(0, n);
  const employees = {};

  initialStateOfSprint.forEach((element) => {
    const item = element.split(":");
    let name = item[0];
    let taskId = item[1];
    let title = item[2];
    let status = item[3];
    let points = Number(item[4]);

    if (!employees.hasOwnProperty(name)) {
      employees[name] = [];
    }

    employees[name].push({ taskId, name, title, status, points });
  });

  while (input.length !== 0) {
    const cmdArgs = input.shift().split(":");
    const cmd = cmdArgs[0];
    const assignee = cmdArgs[1];

    if (employees.hasOwnProperty(assignee)) {
      switch (cmd) {
        case "Add New":
          let task = cmdArgs[2];
          let title = cmdArgs[3];
          let status = cmdArgs[4];
          let points = Number(cmdArgs[5]);

          employees[assignee].push({
            task,
            name: assignee,
            title,
            status,
            points,
          });
          break;
        case "Change Status":
          const taskId = cmdArgs[2];
          const newStatus = cmdArgs[3];
          let bool = false;
          employees[assignee].forEach((element) => {
            if (element.taskId === taskId) {
              element.status = newStatus;
              bool = true;
            }
          });

          if (!bool) {
            console.log(
              `Task with ID ${taskId} does not exist for ${assignee}!`
            );
          }

          break;
        case "Remove Task":
          const index = Number(cmdArgs[2]);
          if (index < 0 || index > employees[assignee].length - 1) {
            console.log("Index is out of range!");
          } else {
            employees[assignee].splice(index, 1);
          }
          break;
        default:
          break;
      }
    } else {
      console.log(`Assignee ${assignee} does not exist on the board!`);
    }
  }

  let toDo = 0;
  let inProgress = 0;
  let review = 0;
  let done = 0;

  for (const assignee in employees) {
    employees[assignee].forEach((element) => {
      if (element.status === "ToDo") {
        toDo += element.points;
      } else if (element.status === "In Progress") {
        inProgress += element.points;
      } else if (element.status === "Code Review") {
        review += element.points;
      } else if (element.status === "Done") {
        done += element.points;
      }
    });
  }

  let sum = toDo + inProgress + review;

  console.log(`ToDo: ${toDo}pts`);
  console.log(`In Progress: ${inProgress}pts`);
  console.log(`Code Review: ${review}pts`);
  console.log(`Done Points: ${done}pts`);

  if (sum > done) {
    console.log("Sprint was unsuccessful...");
  } else {
    console.log("Sprint was successful!");
  }
}

solve([
  "5",
  "Kiril:BOP-1209:Fix Minor Bug:ToDo:3",
  "Mariya:BOP-1210:Fix Major Bug:In Progress:3",
  "Peter:BOP-1211:POC:Code Review:5",
  "Georgi:BOP-1212:Investigation Task:Done:2",
  "Mariya:BOP-1213:New Account Page:In Progress:13",
  "Add New:Kiril:BOP-1217:Add Info Page:In Progress:5",
  "Change Status:Peter:BOP-1290:ToDo",
  "Remove Task:Mariya:1",
  "Remove Task:Joro:1",
]);
