//your JS code here. If required.
function delayedHelloWorld() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve("Hello, world!");
                }, 1000);
            });
        }

        // Wait for the promise to resolve and then update the element
        delayedHelloWorld()
            .then((message) => {
                document.getElementById("output").textContent = message;
            })
            .catch((error) => {
                console.error(error);
            });
