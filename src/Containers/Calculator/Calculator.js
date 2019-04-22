import React, { Component } from "react";

import Button from "../../Components/Button/Button";
import Display from "../../Components/Display/Display";

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: ""
    };
  }

  handleButtonClick = e => {
    e.preventDefault();
    const button = e.target;
    const lastResultSymbol = this.state.result.length
      ? this.state.result[this.state.result.length - 1]
      : 0;

    switch (button.dataset.name) {
      case "reset": //click on btn "C"
        this.setState({
          result: "0"
        });
        break;

      case "calculate": //click on btn "="
        if (
          this.state.result.length > 1 &&
          !isNaN(parseFloat(lastResultSymbol))
        ) {
          this.calculate();
        }
        break;

      case "operator": //click on btn "+, -, *, /"
        if (!isNaN(parseFloat(lastResultSymbol))) {
          // can't start with an operator, except "-"
          if (
            this.state.result !== "0" &&
            this.state.result.toString().length
          ) {
            this.setState(prevState => ({
              result: prevState.result + button.innerText
            }));
          } else if (button.innerText === "-") {
            this.setState({
              result: button.innerText
            });
          }
        }
        break;

      default:
        this.state.result !== "0" // checking case - after reset
          ? this.setState(prevState => ({
              result: prevState.result + button.innerText
            }))
          : this.setState({
              result: button.innerText
            });
    }
  };

  calculate = () => {
    const inputArr = this.state.result.split("");
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
    let result = parseFloat(arrMultiplySubtract[0]);
    for (let i = 0; i < arrMultiplySubtract.length; i++) {
      let num = parseFloat(arrMultiplySubtract[i + 1]);

      switch (arrMultiplySubtract[i]) {
        case "+":
          result = result + num;
          break;
        case "-":
          result = result - num;
          break;
        default:
          break;
      }
    }

    this.setState({ result });
  };

  render() {
    return (
      <div className="container pt-3 pb-3 d-flex justify-content-md-center">
        <div className="col-md-6 col-lg-4 bg-light rounded">
          <div className="col pt-3 pb-3">
            <div className="row mb-3">
              <div className="col-12 pt-1 pb-1">
                <Display value={this.state.result.toString()} />
              </div>
            </div>

            <div className="row">
              <div className="col-8">
                <div className="row mb-3">
                  <div className="col pr-0">
                    <Button
                      type="number"
                      customClass="btn-info"
                      handleClick={this.handleButtonClick}
                    >
                      7
                    </Button>
                  </div>
                  <div className="col pr-0">
                    <Button
                      type="number"
                      customClass="btn-info"
                      handleClick={this.handleButtonClick}
                    >
                      8
                    </Button>
                  </div>
                  <div className="col pr-0">
                    <Button
                      type="number"
                      customClass="btn-info"
                      handleClick={this.handleButtonClick}
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
                      handleClick={this.handleButtonClick}
                    >
                      4
                    </Button>
                  </div>
                  <div className="col pr-0">
                    <Button
                      type="number"
                      customClass="btn-info"
                      handleClick={this.handleButtonClick}
                    >
                      5
                    </Button>
                  </div>
                  <div className="col pr-0">
                    <Button
                      type="number"
                      customClass="btn-info"
                      handleClick={this.handleButtonClick}
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
                      handleClick={this.handleButtonClick}
                    >
                      1
                    </Button>
                  </div>
                  <div className="col pr-0">
                    <Button
                      type="number"
                      customClass="btn-info"
                      handleClick={this.handleButtonClick}
                    >
                      2
                    </Button>
                  </div>
                  <div className="col pr-0">
                    <Button
                      type="number"
                      customClass="btn-info"
                      handleClick={this.handleButtonClick}
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
                      handleClick={this.handleButtonClick}
                    >
                      C
                    </Button>
                  </div>
                  <div className="col pr-0">
                    <Button
                      type="number"
                      customClass="btn-info"
                      handleClick={this.handleButtonClick}
                    >
                      0
                    </Button>
                  </div>
                  <div className="col pr-0">
                    <Button
                      type="calculate"
                      customClass="btn-danger"
                      handleClick={this.handleButtonClick}
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
                      handleClick={this.handleButtonClick}
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
                      handleClick={this.handleButtonClick}
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
                      handleClick={this.handleButtonClick}
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
                      handleClick={this.handleButtonClick}
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
  }
}

export default Calculator;
