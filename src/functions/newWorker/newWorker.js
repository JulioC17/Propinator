import "./newWorker.css"

const newWorker = (container) => {
    
    const div = document.createElement("div")
    div.setAttribute("id", "workerDiv")
    
    const labelWorker = document.createElement("label")
    labelWorker.setAttribute("for", "Trabajador")
    labelWorker.innerHTML = "Trabajador"
    const inputWorker = document.createElement("input")
    inputWorker.setAttribute("id", "inputWorker")
    inputWorker.setAttribute("type", "text")
    
    const labelHours = document.createElement("label")
    labelHours.setAttribute("for", "Horas")
    labelHours.innerHTML = "Horas"
    const inputHours = document.createElement("input")
    inputHours.setAttribute("id", "inputHours")
    inputHours.setAttribute("type", "number")

    div.appendChild(labelWorker)
    div.appendChild(inputWorker)
    div.appendChild(labelHours)
    div.appendChild(inputHours)
    
    

    
   container.appendChild(div)
   
    
}

export default newWorker