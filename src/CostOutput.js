import React from 'react';
import { Header, Segment, Table } from 'semantic-ui-react'

export default function CostOutput(props) {
  const dependentCost = props.totalCost - props.employeeCost;

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
                <Table.HeaderCell>Dependnet Cost</Table.HeaderCell>
                <Table.HeaderCell>Total Cost</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{props.employee}</Table.Cell>
                <Table.Cell>${props.employeeCost}</Table.Cell>
                <Table.Cell>{props.dependents.length}</Table.Cell>
                <Table.Cell>${dependentCost}</Table.Cell>
                <Table.Cell>${props.totalCost}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
      </Segment>
    </div>
  );
}
