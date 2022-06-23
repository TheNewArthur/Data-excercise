(() => {

//----- Variables -----//

    var table1 = document.getElementById('table1')
    var table2 = document.getElementById('table2')
    var labelRow = table1.rows.item(1).cells
    var labelRow2 = table2.rows.item(0).cells
    var labelsTable1 = []
    var labelsTable2 = []
    var allObjects1 = []
    var allObjects2 = []

    console.log('variables do not give problems')

//----- Functions -----//

    function createDataObj1 (index) {
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

    function createDataObj2 (index) {
        var temp = []

        for (var i = 2; i < table2.rows.item(index).cells.length; i++) {
            temp.push(parseFloat(table2.rows.item(index).cells.item(i).innerHTML.replace(/,/g, '.')))
        }

        let tempObj = {
            label: table2.rows.item(index).cells.item(1).innerHTML,
            data: temp,
            borderColor: `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
        }

        allObjects2.push(tempObj)
    }

//----- Call functions -----//

    for (var i = 2; i < table1.rows.length; i++) {
        createDataObj1(i)
    }

    for (var i = 2; i < table2.rows.length; i++) {
        createDataObj2(i)
    }

    for (var i = 2; i < labelRow.length; i++) {
        labelsTable1.push(labelRow.item(i).innerHTML)
    }

    for (var i = 2; i < labelRow2.length; i++) {
        labelsTable2.push(labelRow2.item(i).innerHTML)
    }


//----- construct canvases ------//

    var canvas = document.createElement('canvas')
    var canvas2 = document.createElement('canvas')
    canvas.id = 'myGraph1'
    canvas2.id = 'myGraph2'
    document.getElementById('Crimes_et_d.C3.A9lits_enregistr.C3.A9s_par_les_services_de_police').after(canvas)
    document.getElementById('Homicides').after(canvas2)

//----- construct charts -----//

    const dataGraph1 = {
      labels: labelsTable1,
      datasets: allObjects1
    }

    const dataGraph2 = {
        labels: labelsTable2,
        datasets: allObjects2
    }

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