/*const getMessages = () => {
    const messagesRef = firebase.database().ref();
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        for (let key in data){
            const message = data[key];
            console.log(message);
        } 
    })
}

const findMessages = (myPass) => {
    const messagesRef = firebase.database().ref();
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        for (let key in data){
            const message = data[key];
            console.log(message);
            if(myPass == message.passcode){
                renderMessage(message);
            }
        } 
    })
}
document.querySelector("#viewMsg").addEventListener('click',() => {
    const passcode = document.querySelector("#passcode").value;
    findMessages(passcode);

} )
*/

document.querySelector('#viewMsg').addEventListener('click', (e) =>{
    const userPasscodeGuess = document.querySelector("#passcode").value;
    const messagesRef = firebase.database().ref();
    messagesRef.on('value', (snapshot) =>{
        const data = snapshot.val();
        for (let key in data){
            console.log(key);
            if (data[key].passcode == userPasscodeGuess){
            display(data[key]);
            }
        }
    })
})

function display(messageObject){
    console.log(message);
    document.querySelector("#message").innerHTML = messageObject.message;
}
