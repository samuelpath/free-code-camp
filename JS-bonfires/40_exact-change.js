/*
  Design a cash register drawer function checkCashRegister() that accepts:
    purchase price as the first argument (price), 
    payment as the second argument (cash),
    and cash-in-drawer (cid) as the third argument.

  cid is a 2D array listing available currency.

  Return the string "Insufficient Funds" if cash-in-drawer is less than the change due.
  Return the string "Closed" if cash-in-drawer is equal to the change due.

  Otherwise, return change in coin and bills, sorted in highest to lowest order.

  Example cash-in-drawer array:
    [["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.10],
    ["QUARTER", 4.25],
    ["ONE", 90.00],
    ["FIVE", 55.00],
    ["TEN", 20.00],
    ["TWENTY", 60.00],
    ["ONE HUNDRED", 100.00]]

  Example of a function call:
    checkCashRegister(3.26, 100.00, 
      [["PENNY", 1.01], 
      ["NICKEL", 2.05], 
      ["DIME", 3.10], 
      ["QUARTER", 4.25], 
      ["ONE", 90.00], 
      ["FIVE", 55.00], 
      ["TEN", 20.00], 
      ["TWENTY", 60.00], 
      ["ONE HUNDRED", 100.00]]
    );
*/

function checkCashRegister(price, cash, drawer) {
  const changeToReturn = cash - price;
  let changeLeftToFindInDrawer = changeToReturn;
  const finalChangeArr = [];
  const totalAmountInDrawer = drawer.reduce(((pre, cur) => pre + cur[1]), 0);
  
  if (changeToReturn === totalAmountInDrawer) {
    return returnMessages.CLOSED;
  } else if (changeToReturn > totalAmountInDrawer) {
    return returnMessages.INSUFFICIENT;
  }
  
  for (let currencyIdx = drawer.length - 1; currencyIdx > -1; currencyIdx--) {
    const currencyInText = drawer[currencyIdx][0];
    const currencyInNumbers = currencyTextToNum[currencyInText];
    const currencyTotal = drawer[currencyIdx][1];

    if (currencyTotal === 0) {
      break;
    }

    if (changeLeftToFindInDrawer > currencyTotal) {
      finalChangeArr.push([currencyInText, currencyTotal]);
      changeLeftToFindInDrawer -= currencyTotal;
    } else if (changeLeftToFindInDrawer > currencyInNumbers) {
        const remainder = changeLeftToFindInDrawer % currencyInNumbers;
        const changeReturned = changeLeftToFindInDrawer - remainder;
        changeLeftToFindInDrawer = remainder;
        finalChangeArr.push([currencyInText, changeReturned]);
    }
    changeLeftToFindInDrawer = parseFloat(changeLeftToFindInDrawer.toFixed(2));
  }
  
  if (changeLeftToFindInDrawer === 0) {
    return finalChangeArr;
  } else {
    return returnMessages.INSUFFICIENT;
  }
}

const currencyTextToNum = {
  "ONE HUNDRED": 100,
  "TWENTY": 20,
  "TEN": 10,
  "FIVE": 5,
  "ONE": 1,
  "QUARTER": 0.25,
  "DIME": 0.1,
  "NICKEL": 0.05,
  "PENNY": 0.01
};

const returnMessages = {
  CLOSED: 'Closed',
  INSUFFICIENT: 'Insufficient Funds'
};