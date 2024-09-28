document.getElementById("btn").addEventListener('click',()=>{
    alert("Enjoy my page");
});

document.getElementById("send-btn").addEventListener('click',(event)=>{
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.querySelector('textarea');

    if (!name.value || !email.value || !message.value) {
        alert("Please fill out all fields before submitting.");
        event.preventDefault();
    }
});
