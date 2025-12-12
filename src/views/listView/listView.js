import "./listView.css"
const listView = (workerObject) => {
    const body = document.querySelector("body")
    const moneyHoursDiv = document.createElement("div")
    moneyHoursDiv.setAttribute("id", "moneyHoursDiv")
    const moneyH2 = document.createElement("h2")
    const hoursH2 = document.createElement("h2")

    const workersListDiv = document.createElement("div")
    workersListDiv.setAttribute("id", "workerListDiv")
    
    
    for (const object of workerObject){
        if(object.propinaTotal != undefined && object.horasTotales != undefined){
            moneyH2.innerHTML = `Propina Total: ${object.propinaTotal}`
            hoursH2.innerHTML = `Horas Totales: ${object.horasTotales}`
        }

        const workerElement = document.createElement("h4")
        workerElement.setAttribute("class", "workerElement")

        if(object.name != undefined && object.asignedTips != undefined && object.hours != undefined){
        workerElement.innerHTML = `${object.name} -- ${object.hours} horas -- ${object.asignedTips} euros.`
        workersListDiv.appendChild(workerElement)}
    }


    
    moneyHoursDiv.appendChild(moneyH2)
    moneyHoursDiv.appendChild(hoursH2)
    


    body.innerHTML = ""
    body.appendChild(moneyHoursDiv)
    body.appendChild(workersListDiv)

    const listDiv = document.createElement("div")

}

export default listView