(() => {

//----- Variables -----//

    var labelsAjaxChart = []
    var dataAjaxChart = []
    var count = 0

//----- Create Canvas -----//

    var canvas3 = document.createElement('canvas')
    canvas3.id = 'canvas3'
    document.getElementById('firstHeading').after(canvas3)

//------ Function -----//

    function getTheData() {
 
      fetch("https://canvasjs.com/services/data/datapoints.php", { cache: "no-cache" })
        .then((response) => {
            if (response.ok) {
                console.log("Request successful")
                return response.json()
            }
            else
                throw new Error("Request unsuccessful")
        })
        .then((arrayData) => arrayData.forEach((element) => {
          labelsAjaxChart.push(count)
          dataAjaxChart.push(element[1])
          count++
          }))
        .catch((error) => console.error(error))

      myAjaxChart.update()

      setTimeout(getTheData, 1000)

    }

//----- Create Chart -----//
    
    const dataObj = {
        data: dataAjaxChart,
        borderColor: 'cyan'
    }

    const data = {
        labels: labelsAjaxChart,
        datasets: [dataObj]
    }

    const myAjaxChart = new Chart(
        document.getElementById('canvas3'), {
          type: 'line',
          data: data,
          options: {
                elements: {
                    point:{
                        radius: 0
                    }
                }
            }
        }
    )

//----- Call the data -----//

    getTheData()

//----- Extra comment in order to see the effects of .gitignore -----//
    
})();