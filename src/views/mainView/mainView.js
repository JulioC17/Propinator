import newWorker from "../../functions/newWorker/newWorker"
import listView from "../listView/listView"
import "./mainView.css"

const mainView = () => {
    const workerObject = []
    const body = document.querySelector("body")

    const calculateDiv = document.createElement("div")
    calculateDiv.setAttribute("id", "calculateDiv")
    calculateDiv.setAttribute("style", "visibility:hidden")

    const tipDiv = document.createElement("div")
    tipDiv.setAttribute("id", "tipDiv")

    const tipsLabel = document.createElement("label")
    tipsLabel.setAttribute("id", "tipsLabel")
    tipsLabel.setAttribute("for", "Calcular")
    tipsLabel.innerHTML = "Propina Total"
    const tipsinput = document.createElement("input")
    tipsinput.setAttribute("id", "tipsInput")
    tipsinput.setAttribute("type", "string")

    const calculateBtn = document.createElement("button")
    calculateBtn.setAttribute("id", "calculateBtn")
    calculateBtn.innerText = "Calcular"

    tipDiv.appendChild(tipsLabel)
    tipDiv.appendChild(tipsinput)
    calculateDiv.appendChild(tipDiv)
    calculateDiv.appendChild(calculateBtn)

    const workersDiv = document.createElement("div")
    workersDiv.setAttribute("id", "workersDiv")
    
    const btnDiv = document.createElement("div")
    btnDiv.setAttribute("id", "btnDiv")

     const divImg = document.createElement("div")
     divImg.setAttribute("id", "divImg")
    
    const img = document.createElement("img")
    img.setAttribute("src", "../../image.png")
    
    const addBtn = document.createElement("button")
    addBtn.setAttribute("id", "addBtn")
    addBtn.innerText = "Añadir Trabajador"

    btnDiv.appendChild(addBtn)
    divImg.appendChild(img)
    body.appendChild(btnDiv)
    body.appendChild(workersDiv)
    body.appendChild(divImg)
    body.appendChild(calculateDiv)

    addBtn.addEventListener("click", () => {
        divImg.remove()
        img.remove()
        newWorker(workersDiv)
        calculateDiv.setAttribute("style", "visibility:visible")
    })

    calculateBtn.addEventListener("click", () => {
        const allWorkers = workersDiv.querySelectorAll("div")
        let hoursTotal = 0
        
        for (const worker of allWorkers) {
            const name = worker.querySelector("#inputWorker").value
            const hours = Number(worker.querySelector("#inputHours").value)
            hoursTotal+= Number(hours)
            const totalTips = Number(document.querySelector("#tipsInput").value)

            if(name != '' && hours != '' && totalTips != ''){

                workerObject.push({
                    name: name,
                    hours: hours,
                    totalTips:totalTips,
                    totalHours:0,
                    asignedTips: 0
                })
            }
            else{
                alert("Rellena Todas las Casillas")
                return
            }
    }



        for (const final of workerObject){
            final.totalHours = hoursTotal
            const percentageHours = (final.hours*100)/hoursTotal
            final.asignedTips = ((percentageHours*final.totalTips)/100).toFixed(2)
        }
        
        workerObject.push({
            propinaTotal:Number(document.querySelector("#tipsInput").value),
            horasTotales: hoursTotal

        })


        listView(workerObject)
        console.log(workerObject)
        

    

    })
} 

export default mainView