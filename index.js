/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */


function createEmployeeRecord(fourEleArray){
    let employeeRecord = 
        {
            firstName: fourEleArray[0],
            familyName: fourEleArray[1],
            title: fourEleArray[2],
            payPerHour: fourEleArray[3],
            timeInEvents:[],
            timeOutEvents:[]
        }
    
    return employeeRecord
    }

    function createEmployeeRecords(arrayOfArrays){
        let newArray=[]
        arrayOfArrays.forEach((n)=>{
        newArray.push(createEmployeeRecord(n))
        })
        return newArray
        }

        function createTimeInEvent(date){
            let dateArray=date.split(" ");
           this.timeInEvents.push({type:"TimeIn",date:dateArray[0],hour:parseInt(dateArray[1])})
            return this
            }
          
    function createTimeOutEvent(date){
            let dateArray=date.split(" ");
            this.timeOutEvents.push({type:"TimeOut",date:dateArray[0],hour:parseInt(dateArray[1])})
               return this
                }


function hoursWorkedOnDate(date){
    if(date==this.timeInEvents[0].date){
    let diff=this.timeOutEvents[0].hour-this.timeInEvents[0].hour
    diff/=100
    return diff        
    }
    else return "nope"
}
        

    function calculatePayroll(array){
        let x=0
    for(let i=0;i<array.length;i++){
    x+=allWagesFor(array[i])
    }
    return x;
    }

    function findEmployeeByFirstName(array,fname){
        for(let i=0;i<array.length;i++){
            if(array[i].firstName==fname){
                let record=array[i]
                return record
            }
            else return "nope"
        }

    }
/*
    function wagesEarnedOnDate(date){
        let hours=hoursWorkedOnDate.call(this,(date))
        let pay=hours*(this.payPerHour)
        return pay
        }
*/

    const wagesEarnedOnDate = function (date) {
        const eligibleDates = this.timeInEvents.map(function (e) {
            return e.date
        })
        const hours=eligibleDates.reduce(function (memo, d) {
            return memo + hoursWorkedOnDate.call(this, d)
        }.bind(this), 0)
        let pay=hours*(this.payPerHour)
        return pay
    }

 

    const allWagesFor = function () {
        const eligibleDates = this.timeInEvents.map(function (e) {
            return e.date
        })
    
        const payable = eligibleDates.reduce(function (memo, d) {
            return memo + wagesEarnedOnDate.call(this, d)
        }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!
    
        return payable
    }


    let rRecord = createEmployeeRecord(["Rafiki", "", "Aide", 10])
    let sRecord = createEmployeeRecord(["Simba", "", "King", 100])

    let sTimeData = [
        ["2019-01-01 0900", "2019-01-01 1300"], // 4 * 100 = 400
        ["2019-01-02 1000", "2019-01-02 1300"]  // 3 * 100 = 300 ===> 700 total
      ]
    let rTimeData = [
        ["2019-01-11 0900", "2019-01-11 1300"], // 4 * 10 = 40
        ["2019-01-12 1000", "2019-01-12 1300"]  // 3 * 10 = 30 ===> 70 total ||=> 770
      ]
      sTimeData.forEach(function (d) {
        let [dIn, dOut] = d
        createTimeInEvent.call(sRecord, dIn)
        createTimeOutEvent.call(sRecord, dOut)
      })

      rTimeData.forEach(function (d, i) {
        let [dIn, dOut] = d
        createTimeInEvent.call(rRecord, dIn)
        createTimeOutEvent.call(rRecord, dOut)
      })

      let grandTotalOwed = [sRecord, rRecord].reduce((m, e) => m + allWagesFor.call(e), 0)
      console.log(grandTotalOwed)



let tim=createEmployeeRecord(["Tim","Kingston","Driver",21])
createTimeInEvent.call(tim,("2014-01-28 1400"))
createTimeOutEvent.call(tim,("2014-01-28 1600"))

        let cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 27])
        createTimeInEvent.call(cRecord, "2044-03-15 0900")
        createTimeOutEvent.call(cRecord, "2044-03-15 1100")

        let src = [
            ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
            ["Natalia", "Romanov", "CEO", 150]
          ]
          let emps = createEmployeeRecords(src)
          let loki = findEmployeeByFirstName(emps, "Loki")

          console.log(wagesEarnedOnDate.call(tim,("2014-01-28")))
       
