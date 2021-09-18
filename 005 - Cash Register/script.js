function checkCashRegister(price, cash, cid) {
    const monetary = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]];
    const newObj = {"status": [], "change": []}
    const newArr2 = [];
    const newArr1 = [];
    const newArr0 = [];
    const newArr = [];
    var inCash = 0;
    var dif = cash - price;
    let result = parseFloat(dif)
    let newValue = 0;
    let count = 0;
  
    for (let i = 0; i < cid.length; i++) {
      // Filter for cash that can be used as return
      if (cid[i][1] < cash) {
        newArr.push(cid[i])
      }
      inCash += cid[i][1]
      newArr0.push(cid[i])
    }
  
    if (inCash === dif) {
      newObj.status = "CLOSED";
      newObj.change = newArr0; 
  
    } else if (inCash < price) {
      newObj.status = "INSUFFICIENT_FUNDS";
  
    } else {
      var open = [];
      for (let i = newArr.length - 1; i > -1; i--) {
        if (newArr[i][1] >= monetary[i][1]) {
  
          // Checker if the value is "exactly" then input it
          if (dif % (monetary[i][1]) == 0) {
            let newArr1 = [];
            let num = dif/monetary[i][1];
            newArr1.push(monetary[i][0], + num*monetary[i][1])
            newObj.change = [newArr1];
  
          } else {  
            let value = parseFloat(cid[i][1])
            result -= value;
            newArr1.push(result.toFixed(2))
  
        }
      }
      newObj.status = "OPEN";
    }
  
      // Put the positive values in newArr2
      let index = (newArr1.length - newArr1.filter((item) => item < 0).length)
      for (let i = 0; i < index; i++) {
        newArr2.push(newArr[newArr.length - 1 - i])
  
      } 
  
      // After update newArr2; this will be the remanescent change => console.log(newArr1[index - 1])
      // And the next monetary value to use => console.log(cid[cid.length - 2 - index])
  
      // Using if to reduce the value to the lowest possible value
      let count = 0;
      newValue = newArr1[index - 1];
  
      // Loop to check how many 5 bills will need
      if (newArr1[index - 1] - 5 > 5) {
        while (newArr1[index - 1] > 5) {
          newArr1[index - 1] -= 5;
          count++;
        }
          newArr2.push([cid[cid.length - 2 - index][0], + 5*(1 + (count - 1))])
          newValue -= 5 + 5*(count - 1);
      }
      
      // Reset the count and repeat the process to separate the bills amount...
      count = 0;
      if (newValue > 1) {
        newValue -= 1 + 1*(count - 1);
        while (newArr1[index - 1] > 1) {
          newArr1[index - 1] -= 1;
          count++;
        }
        newArr2.push([cid[cid.length - 3 - index][0], + 1*(1 + (count - 1))])
        newValue -= 1 + 1*(count - 1);
      }
  
      count = 0;
      if (newValue > 0.25) {
        newValue -= 0.25 + 0.25*(count - 1);
        while (newArr1[index - 1] > 0.25) {
          newArr1[index - 1] -= 0.25;
          count++;
        }
        newArr2.push([cid[cid.length - 4 - index][0], + 0.25*(1 + (count - 1))])
        newValue -= 0.25 + 0.25*(count - 1);
      } 
  
      count = 0;
      if (newValue > 0.1) {
        newValue -= 0.1 + 0.1*(count - 1);
        while (newArr1[index - 1] > 0.1) {
          newArr1[index - 1] -= 0.10;
          count++;
        }
        newArr2.push([cid[cid.length - 5 - index][0], + 0.1*(1 + (count - 1))])
        newValue -= 0.1 + 0.1*(count - 1);
      }
  
      count = 0;
      if (newValue > 0.05) {
        newValue -= 0.05 + 0.05*(count - 1);
        while (newArr1[index - 1] > 0.05) {
          newArr1[index - 1] -= 0.05;
          count++;
        }
        newArr2.push([cid[cid.length - 6 - index][0], + 0.05*(1 + (count - 1))])
        newValue -= 0.05 + 0.05*(count - 1);
      }
  
      count = 0;
      if (newValue >= 0 || newValue < 0.05) {
        newValue -= 0.01 + 0.01*(count - 1);
        while (newArr1[index - 1] >= 0) {
          newArr1[index - 1] -= 0.01;
          count++;
        }
        newArr2.push([cid[cid.length - 7 - index][0], + 0.01*(1 + (count - 1))])
        newValue -= 0.01 + 0.01*(count - 1);
      }
  
      if (newArr2.length > index) {
        newObj.change = newArr2;
      }
  
    }
    console.log(newObj)
    return newObj;
  }
  
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);