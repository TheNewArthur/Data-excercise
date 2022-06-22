(() => {

//----- Variables -----//

    var table1 = document.getElementById('table1')
    var labelRow = table1.rows.item(1).cells
    var labelsTable1 = []
    var allObjects1 = []

//----- Functions -----//

    function createDataObj (index) {
        var temp = []

        for (var i = 2; i < table1.rows.item(index).cells.length; i++) {
            temp.push(parseFloat(table1.rows.item(index).cells.item(i).innerHTML.replace(/,/g, ".")))
        }

        let tempObj = {
            label: table1.rows.item(index).cells.item(1).innerHTML,
            data: temp,
            borderColor: `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
        }
        
        allObjects1.push(tempObj)
    }

//----- Call functions -----//

    for (var i = 2; i < table1.rows.length; i++) {
        createDataObj(i)
    }

    for (var i = 2; i < labelRow.length; i++) {
        labelsTable1.push(labelRow.item(i).innerHTML)
    }

//----- construct canvas ------//

    var canvas = document.createElement('canvas')
    canvas.id = 'myGraph'
    document.getElementById('Crimes_et_d.C3.A9lits_enregistr.C3.A9s_par_les_services_de_police').after(canvas)

//----- construct chart -----//

    const data = {
      labels: labelsTable1,
      datasets: allObjects1
    }

    const myChart = new Chart(
      document.getElementById('myGraph'), {
        type: 'line',
        data: data,
        options: {}
      }
    )

})();