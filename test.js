const { setTimeoutSync, formatTime } = require('./utils');

const exerciseList = [
      {
            id: 1,
            title: 'Ball Pushups',
            duration: 1,
      },
      {
            id: 2,
            title: 'Bench Press',
            duration: 2,
      },
      {
            id: 3,
            title: 'Biceps',
            duration: 1,
      },
      {
            id: 4,
            title: 'Crunches',
            duration: 1,
      },
      {
            id: 5,
            title: 'Dumbell Press',
            duration: 1,
      },
];

// note: handle one exercise -> Pushups
for (let index = 0; index < exerciseList.length; index++) {
      // setExerciseName(exerciseList[index].title);
      // add new music
      // note: handle set -> Pushups 1/4
      for (let exerciseCount = 0; exerciseCount < 4; exerciseCount++) {
            // setStatus(`Set ${exerciseCount + 1} / ${4}`);
            // note: one repetition
            for (let repetitionIndex = exerciseList[index].duration * 60; repetitionIndex >= 1; repetitionIndex--) {
                  // here play music
                  setTimeoutSync(() => {
                        // setTimeState(formatTime(repetitionIndex));
                        console.log(exerciseList[index].title, formatTime(repetitionIndex));
                  }, 1000);
            }
            // BREAK TIME
            // pause music
            for (let breakIndex = 40; breakIndex >= 1; breakIndex--) {
                  setTimeoutSync(() => {
                        // setTimeState(formatTime(breakIndex));
                        console.log('Break', formatTime(breakIndex));
                  }, 1000);
            }
      }
      // stop music
}
// navigate to endscreen

setTimer = (index, count) => {
      this.setState(
            {
                  exerciseName: this.state.exerciseList[index].title,
                  timer: this.state.exerciseList[index].duration,
            },
            () => {
                  const clockCall = setInterval(() => {
                        this.setState(
                              (prevstate) => ({
                                    timer: prevstate.timer - 1,
                              }),
                              () => {
                                    if (this.state.timer === 0) {
                                          clearInterval(clockCall);
                                          count = count - 1;
                                          if (count !== 0) {
                                                index = index + 1;
                                                this.setTimer(index, count);
                                          }
                                    }
                              }
                        );
                  }, 1000);
            }
      );
};
this.setTimer(0, exerciseList.length);

setStateSync = (stateUpdate) => {
      return new Promise((resolve) => {
            this.setState(stateUpdate, () => resolve());
      });
};
