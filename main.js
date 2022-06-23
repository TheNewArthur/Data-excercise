(() => {

//----- Variables -----//

    var table1 = document.getElementById('table1')
    var table2 = document.getElementById('table2')
    var labelRow1 = table1.rows.item(1).cells
    var labelRow2 = table2.rows.item(0).cells
    var labelsTable1 = []
    var labelsTable2 = []
    var allObjects1 = []
    var allObjects2 = []

//----- Functions -----//

    function createDataObj (index, table) {
        var temp = []

        for (var i = 2; i < table.rows.item(index).cells.length; i++) {
            temp.push(parseFloat(table.rows.item(index).cells.item(i).innerHTML.replace(/,/g, ".")))
        }

        let tempObj = {
            label: table.rows.item(index).cells.item(1).innerHTML,
            data: temp,
            borderColor: `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
        }

        return tempObj
    }

//----- Create arrays of objects using the function -----//

    for (var i = 2; i < table1.rows.length; i++) {
        allObjects1.push(createDataObj(i, table1))
    }

    for (var i = 1; i < table2.rows.length; i++) {
        allObjects2.push(createDataObj(i, table2))
    }

//----- Get labels -----//

    for (var i = 2; i < labelRow1.length; i++) {
        labelsTable1.push(labelRow1.item(i).innerHTML)
    }

    for (var i = 2; i < labelRow2.length; i++) {
        labelsTable2.push(labelRow2.item(i).innerHTML)
    }


//----- Construct canvases ------//

    var canvas = document.createElement('canvas')
    var canvas2 = document.createElement('canvas')
    canvas.id = 'myGraph1'
    canvas2.id = 'myGraph2'
    document.getElementById('Crimes_et_d.C3.A9lits_enregistr.C3.A9s_par_les_services_de_police').after(canvas)
    document.getElementById('Homicides').after(canvas2)

//----- Create charts -----//

    //--- Gather data ---//

    const dataGraph1 = {
      labels: labelsTable1,
      datasets: allObjects1
    }

    const dataGraph2 = {
        labels: labelsTable2,
        datasets: allObjects2
    }

    //--- Construct charts ---//

    const myChart = new Chart(
      document.getElementById('myGraph1'), {
        type: 'line',
        data: dataGraph1,
        options: {}
      }
    )

    const myChart1 = new Chart(
        document.getElementById('myGraph2'), {
          type: 'line',
          data: dataGraph2,
          options: {}
        }
      )

})();