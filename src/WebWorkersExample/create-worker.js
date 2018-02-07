
if(!!window.Worker){
    var myWorker = new Worker('WebWorkersExample/worker.js');

    myWorker.addEventListener('message', function(e) {
        console.log("y despues esto");
        console.log('Worker said: ', e.data);
        //myWorker.terminate(); //Optional, if we just want to do it once, terminate
    }, false);
    myWorker.postMessage('Hello World'); // Send data to our worker.
}
