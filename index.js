function newTask(title, description) {
  const task = {
    title,
    description,
    complete: false,

    logState: function() {
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    },
    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

const task1 = newTask("Clean Cat Litter", "Take all the poop out of the litter box");
const task2 = newTask("Do laundry", "Put clothes in laundry machine");
// const tasks = [task1, task2];

// DRIVER CODE BELOW

task1.logState();
task1.markCompleted();
task1.logState();
