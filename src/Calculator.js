import React, { useState, useEffect } from 'react';
import { Header, Form, Input, Button } from 'semantic-ui-react'
// import Output from './Output';
import './calculator.css';

const EMPLOYEE_PAYCHECK_AMOUNT = 2000;
const PAYCHECK_COUNT = 26;
const EMPLOYEE_SALARY = EMPLOYEE_PAYCHECK_AMOUNT * PAYCHECK_COUNT;
const EMPLOYEE_COST = 1000;
const DEPENDENT_COST = 500;
const A_LIST_DISCOUNT = 0.1;
const EMPLOYEE_DISCOUNT_COST = EMPLOYEE_COST - (EMPLOYEE_COST * A_LIST_DISCOUNT);
const DEPENDENT_DISCOUNT_COST = DEPENDENT_COST - (DEPENDENT_COST * A_LIST_DISCOUNT);

export default function Calculator(props) {
  const [employeeName, setEmployeeName] = useState('');
  const [dependentNames, setDependentNames] = useState([]);
  const [cost, setCost] = useState(0);

  useEffect(() => {
    setCost(calculateCost());
  });

  const handleEmployeeNameChange = (e) => {
    setEmployeeName(e.target.value)
  }

  const addDependent = () => {
    setDependentNames([
      ...dependentNames,
      {
        id: dependentNames.length,
        name: ''
      }
    ])
  }

  const removeDependent = (e, i) => {
    dependentNames.splice(i, 1);
    setDependentNames([...dependentNames])
  }

  const handleDependentNameChange = (e, i) => {
    dependentNames[i].name = e.target.value
    setDependentNames([...dependentNames])
  }

  const calculateCost = () => {
    let calculatedCost = 0;
    const dependentCount = dependentNames.length;

    if (employeeName !== '') {
      const employeeCost = (startWithA(employeeName) ? EMPLOYEE_DISCOUNT_COST : EMPLOYEE_COST)
      calculatedCost += employeeCost;
    }
    if (dependentCount > 0) {
      dependentNames.map(dep => {
        const dependentCost = (startWithA(dep.name) ? DEPENDENT_DISCOUNT_COST : DEPENDENT_COST)
        calculatedCost += dependentCost;
      })
    }

    return calculatedCost;
  }

  const startWithA = (name) => {
    return name.charAt(0).toLowerCase() === 'a';
  }

  return (
    <div className="calc-container">
      <Header
        className="calc-container__header"
        as="h3"
      >
        Please input your name along with the number/name of dependents below.
      </Header>
      <Form>
        <Input
          value={employeeName}
          label="Employee Name"
          placeholder="J. Smith"
          type="text"
          onChange={handleEmployeeNameChange}
        />
        <Button
          type='button'
          onClick={addDependent}
        >
          Add Dependent
        </Button>
        {
          dependentNames.map(dep => {
            return (
              <div key={dep.id}>
                <Input
                  label="Dependent Name"
                  placeholder="J. Smith Jr."
                  value={dep.name}
                  onChange={(e) => handleDependentNameChange(e, dep.id)}
                />
                <Button
                  type='button'
                  onClick={(e) => removeDependent(e, dep.id)}
                >
                  Remove Dependent
                </Button>
              </div>
            )
          })
        }
      </Form>
      <div>
        Employee Name: {employeeName}
      </div>
      <div>
        Dependent Count: {dependentNames.length}
      </div>
      <div>
        Total Cost: {cost}
      </div>
    </div>
  );
}
