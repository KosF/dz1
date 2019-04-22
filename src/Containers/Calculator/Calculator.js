import React, { useState } from "react";

import Button from "../../Components/Button/Button";
import Display from "../../Components/Display/Display";

const Calculator = () => {
  const [result, setResult] = useState("");

  const handleButtonClick = e => {
    e.preventDefault();
    const button = e.target;
    const lastResultSymbol = result.length ? result[result.length - 1] : 0;

    switch (button.dataset.name) {
      case "reset": //click on btn "C"
        setResult("0");
        break;

      case "calculate": //click on btn "="
        if (result.length > 1 && !isNaN(parseFloat(lastResultSymbol))) {
          calculate();
        }
        break;

      case "operator": //click on btn "+, -, *, /"
        if (!isNaN(parseFloat(lastResultSymbol))) {
          // can't start with an operator, except "-"
          if (result !== "0" && result.toString().length) {
            setResult(result + button.innerText);
          } else if (button.innerText === "-") {
            setResult(button.innerText);
          }
        }
        break;

      default:
        result !== "0" // checking case - after reset
          ? setResult(result + button.innerText)
          : setResult(button.innerText);
    }
  };

  const calculate = () => {
    const inputArr = result.split("");
    let newArray = [];

    // Parse calculte string
    inputArr.forEach(function(element) {
      if (isNaN(element) || isNaN(newArray[newArray.length - 1])) {
        newArray.push(element);
      } else {
        newArray[newArray.length - 1] += element;
      }
    });

    // Work with negative numbers
    if (newArray[0] === "-") {
      newArray[1] = newArray[0] + newArray[1];
      newArray.splice(0, 1);
    }

    // Calc Multiply
    let arrMultiply = [];
    newArray.forEach(function(element, i) {
      if (element === "*") {
        arrMultiply.push(+newArray[i - 1] * +newArray[i + 1]);
      } else if (newArray[i - 1] !== "*" && newArray[i + 1] !== "*") {
        arrMultiply.push(element);
      }
    });

    // Calc Multiply & Subtract
    let arrMultiplySubtract = [];
    arrMultiply.forEach(function(element, i) {
      if (element === "/") {
        arrMultiplySubtract.push(+arrMultiply[i - 1] / +arrMultiply[i + 1]);
      } else if (arrMultiply[i - 1] !== "/" && arrMultiply[i + 1] !== "/") {
        arrMultiplySubtract.push(element);
      }
    });

    // Calculate Add and Divide
    let calcResult = parseFloat(arrMultiplySubtract[0]);
    for (let i = 0; i < arrMultiplySubtract.length; i++) {
      let num = parseFloat(arrMultiplySubtract[i + 1]);

      switch (arrMultiplySubtract[i]) {
        case "+":
          calcResult = calcResult + num;
          break;
        case "-":
          calcResult = calcResult - num;
          break;
        default:
          break;
      }
    }

    setResult(calcResult);
  };

  return (
    <div className="container pt-3 pb-3 d-flex justify-content-md-center">
      <div className="col-md-6 col-lg-4 bg-light rounded">
        <div className="col pt-3 pb-3">
          <div className="row mb-3">
            <div className="col-12 pt-1 pb-1">
              <Display value={result.toString()} />
            </div>
          </div>

          <div className="row">
            <div className="col-8">
              <div className="row mb-3">
                <div className="col pr-0">
                  <Button
                    type="number"
                    customClass="btn-info"
                    handleClick={handleButtonClick}
                  >
                    7
                  </Button>
                </div>
                <div className="col pr-0">
                  <Button
                    type="number"
                    customClass="btn-info"
                    handleClick={handleButtonClick}
                  >
                    8
                  </Button>
                </div>
                <div className="col pr-0">
                  <Button
                    type="number"
                    customClass="btn-info"
                    handleClick={handleButtonClick}
                  >
                    9
                  </Button>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col pr-0">
                  <Button
                    type="number"
                    customClass="btn-info"
                    handleClick={handleButtonClick}
                  >
                    4
                  </Button>
                </div>
                <div className="col pr-0">
                  <Button
                    type="number"
                    customClass="btn-info"
                    handleClick={handleButtonClick}
                  >
                    5
                  </Button>
                </div>
                <div className="col pr-0">
                  <Button
                    type="number"
                    customClass="btn-info"
                    handleClick={handleButtonClick}
                  >
                    6
                  </Button>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col pr-0">
                  <Button
                    type="number"
                    customClass="btn-info"
                    handleClick={handleButtonClick}
                  >
                    1
                  </Button>
                </div>
                <div className="col pr-0">
                  <Button
                    type="number"
                    customClass="btn-info"
                    handleClick={handleButtonClick}
                  >
                    2
                  </Button>
                </div>
                <div className="col pr-0">
                  <Button
                    type="number"
                    customClass="btn-info"
                    handleClick={handleButtonClick}
                  >
                    3
                  </Button>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col pr-0">
                  <Button
                    type="reset"
                    customClass="btn-danger"
                    handleClick={handleButtonClick}
                  >
                    C
                  </Button>
                </div>
                <div className="col pr-0">
                  <Button
                    type="number"
                    customClass="btn-info"
                    handleClick={handleButtonClick}
                  >
                    0
                  </Button>
                </div>
                <div className="col pr-0">
                  <Button
                    type="calculate"
                    customClass="btn-danger"
                    handleClick={handleButtonClick}
                  >
                    =
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="row mb-3">
                <div className="col">
                  <Button
                    type="operator"
                    customClass="btn-secondary"
                    handleClick={handleButtonClick}
                  >
                    +
                  </Button>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col">
                  <Button
                    type="operator"
                    customClass="btn-secondary"
                    handleClick={handleButtonClick}
                  >
                    -
                  </Button>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col">
                  <Button
                    type="operator"
                    customClass="btn-secondary"
                    handleClick={handleButtonClick}
                  >
                    *
                  </Button>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <Button
                    type="operator"
                    customClass="btn-secondary"
                    handleClick={handleButtonClick}
                  >
                    /
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
