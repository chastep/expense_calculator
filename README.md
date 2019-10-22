# Expense Calculator 5000™️

The Expense Calculator 5000™️ (*patient pending*) helps employers determine employees' yearly benefit costs for them and their significant others. Employers can enter employee's names along with their dependent's names. A few built-in assumptions:

* The cost of benefits is $1000/year for each employee
* Each dependent (children and possibly spouses) incurs a cost of $500/year
* Anyone whose name starts with ‘A’ gets a 10% discount, employee or dependent
* All employees are paid $2000 per paycheck before deductions
* There are 26 paychecks in a year

## Things you'll need to start:
* node 12.11.1
* yarn 1.15.2

### To run locally:
Clone down, create, and run the below commands:

* `git clone git@github.com:chastep/expense_calculator.git`
* `cd expense_calculator`
* `yarn install`
* `yarn run dev`

If you would like to make frontend changes locally and have them reload in realtime run I would suggest updating the `start` script in the `package.json` file to `"start": "webpack-dev-server --open --hot --mode development"`.

### Heroku
[Heroku Employee Calculator Site](https://aqueous-fortress-76999.herokuapp.com)

Just open a PR and push if you find something wrong, any feedback would be greatly appreciated!

This project is released under the [MIT Open Source license](LICENSE.md)
