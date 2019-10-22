import React from 'react';
import { Header, Segment, Table } from 'semantic-ui-react'

export default function CostOutput(props) {
  const name = props.employee ? props.employee : 'INPUT NAME ABOVE';
  const employeeCost = props.employee ? props.employeeCost : 0;
  const dependentCost = props.dependents.length === 0 ? 0 : props.totalCost - props.employeeCost;

  return(
    <div className="output-container">
      <Segment
        stacked
        color='teal'
      >
        <Header
          content="Total Costs"
        />
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Employee Name</Table.HeaderCell>
                <Table.HeaderCell>Employee Cost</Table.HeaderCell>
                <Table.HeaderCell>Dependent Count</Table.HeaderCell>
                <Table.HeaderCell>Dependent Cost</Table.HeaderCell>
                <Table.HeaderCell>Total Cost</Table.HeaderCell>
                <Table.HeaderCell>Employee Take-home</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>${employeeCost}</Table.Cell>
                <Table.Cell>{props.dependents.length}</Table.Cell>
                <Table.Cell>${dependentCost}</Table.Cell>
                <Table.Cell>${props.totalCost}</Table.Cell>
                <Table.Cell>${props.employeeTakehome}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
      </Segment>
    </div>
  );
}
