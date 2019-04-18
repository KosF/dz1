import React, { Component } from "react";

import Button from "../../Components/Button/Button";
import Display from "../../Components/Display/Display";

class Calculator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container pt-3 pb-3 d-flex justify-content-md-center">
        <div className="col-md-6 col-lg-4 bg-light rounded">
          <div className="col pt-3 pb-3">
            <div className="row mb-3">
              <div className="col-12 pt-1 pb-1">
                <Display />
              </div>
            </div>

            <div className="row">
              <div className="col-8">
                <div className="row mb-3">
                  <div className="col pr-0">
                    <Button type="number" customClass="btn-info">
                      7
                    </Button>
                  </div>
                  <div className="col pr-0">
                    <Button type="number" customClass="btn-info">
                      8
                    </Button>
                  </div>
                  <div className="col pr-0">
                    <Button type="number" customClass="btn-info">
                      9
                    </Button>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col pr-0">
                    <Button type="number" customClass="btn-info">
                      4
                    </Button>
                  </div>
                  <div className="col pr-0">
                    <Button type="number" customClass="btn-info">
                      5
                    </Button>
                  </div>
                  <div className="col pr-0">
                    <Button type="number" customClass="btn-info">
                      6
                    </Button>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col pr-0">
                    <Button type="number" customClass="btn-info">
                      1
                    </Button>
                  </div>
                  <div className="col pr-0">
                    <Button type="number" customClass="btn-info">
                      2
                    </Button>
                  </div>
                  <div className="col pr-0">
                    <Button type="number" customClass="btn-info">
                      3
                    </Button>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col pr-0">
                    <Button type="reset" customClass="btn-danger">
                      C
                    </Button>
                  </div>
                  <div className="col pr-0">
                    <Button type="number" customClass="btn-info">
                      C
                    </Button>
                  </div>
                  <div className="col pr-0">
                    <Button type="calculate" customClass="btn-danger">
                      C
                    </Button>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="row mb-3">
                  <div className="col">
                    <Button type="operator" customClass="btn-secondary">
                      +
                    </Button>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col">
                    <Button type="operator" customClass="btn-secondary">
                      -
                    </Button>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col">
                    <Button type="operator" customClass="btn-secondary">
                      *
                    </Button>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <Button type="operator" customClass="btn-secondary">
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
