function task1(callback) {
    setTimeout(() => {
        console.log('Task 1 done');
        callback();
    }, 1000);
}

function task2(callback) {
    setTimeout(() => {
        console.log('Task 2 done');
        callback();
    }, 1000);
}

function task3(callback) {
    setTimeout(() => {
        console.log('Task 3 done');
        callback();
    }, 1000);
}

function task4(callback) {
    setTimeout(() => {
        console.log('Task 4 done');
        callback();
    }, 1000);
}

task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                console.log('All tasks are completed  !!!!');
            });
        });
    });
});
