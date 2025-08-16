const allowDrop = (event) =>{
 
    event.preventDefault();
}

const drag = (event) => {
    event.dataTransfer.setData("text", event.target.id);
}

const drop = (event) => {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data))
}