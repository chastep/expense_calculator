import React, { useState, useEffect } from 'react';
import { Message, Input, Button, Segment, Divider } from 'semantic-ui-react'
import CostOutput from './CostOutput';
import './calculator.css';

const EMPLOYEE_PAYCHECK_AMOUNT = 2000;
const PAYCHECK_COUNT = 26;
const EMPLOYEE_SALARY = EMPLOYEE_PAYCHECK_AMOUNT * PAYCHECK_COUNT;
const EMPLOYEE_COST = 1000;
const DEPENDENT_COST = 500;
const A_LIST_DISCOUNT = 0.1;
const EMPLOYEE_DISCOUNT_COST = EMPLOYEE_COST - (EMPLOYEE_COST * A_LIST_DISCOUNT);
const DEPENDENT_DISCOUNT_COST = DEPENDENT_COST - (DEPENDENT_COST * A_LIST_DISCOUNT);

export default function Calculator() {
  const [employeeName, setEmployeeName] = useState('');
  const [employeeCost, setEmployeeCost] = useState(0);
  const [dependentNames, setDependentNames] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    setTotalCost(calculateCost());
  });

  const handleEmployeeNameChange = (e) => {
    setEmployeeName(e.target.value)
  }

  const addDependent = () => {
    dependentNames.push('');
    setDependentNames([...dependentNames])
  }

  const removeDependent = (e, i) => {
    dependentNames.splice(i, 1);
    setDependentNames([...dependentNames])
  }

  const handleDependentNameChange = (e, i) => {
    dependentNames[i] = e.target.value
    setDependentNames([...dependentNames])
  }

  const calculateCost = () => {
    let calculatedCost = 0;
    const dependentCount = dependentNames.length;

    if (employeeName !== '') {
      const employeeCost = (startWithA(employeeName) ? EMPLOYEE_DISCOUNT_COST : EMPLOYEE_COST)
      setEmployeeCost(employeeCost);
      calculatedCost += employeeCost;
    }
    if (dependentCount > 0) {
      dependentNames.map(depName => {
        const dependentCost = (startWithA(depName) ? DEPENDENT_DISCOUNT_COST : DEPENDENT_COST)
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
      <Message>
        <Message.Header>Please input your name along with your dependents below. A few clarifying points:</Message.Header>
        <Message.List>
          <Message.Item>Costs will not appear until you input your email and/or dependent names.</Message.Item>
          <Message.Item>Certain names get certain discounts! 🎉</Message.Item>
          <Message.Item>You can add/remove dependents at anytime. Costs will update to reflect changes.</Message.Item>
        </Message.List>
      </Message>
      <Segment
        basic
        textAlign='center'
      >
        <Input
          value={employeeName}
          label="Employee Name"
          placeholder="J. Smith"
          type="text"
          onChange={handleEmployeeNameChange}
        />
        <Divider horizontal>ADD</Divider>
        <Button
          content="Dependent"
          color='teal'
          icon='add'
          labelPosition='left'
          onClick={addDependent}
        />
      </Segment>
      <Segment.Group>
      {
        dependentNames.map((depName, i) => {
          return (
            <Segment key={i}>
              <Input
                label="Dependent Name"
                placeholder="J. Smith Jr."
                value={depName}
                onChange={(e) => handleDependentNameChange(e, i)}
              />
              <Button
                content="Remove"
                color='red'
                icon='remove'
                labelPosition='right'
                onClick={(e) => removeDependent(e, i)}
              />
            </Segment>
          )
        })
      }
      </Segment.Group>
      <CostOutput
        employee={employeeName}
        employeeCost={employeeCost}
        dependents={dependentNames}
        totalCost={totalCost}
      />
    </div>
  );
}
