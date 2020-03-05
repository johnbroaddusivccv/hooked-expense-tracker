# Expense tracker
https://hooked-expense-tracker.herokuapp.com/
- - - -
Using React hooks users can create and delete transactions that will return the income, expense, and grand total in USD.



## Installation

Use the package manager [npm](https://www.npmjs.com/get-npm) to install native-shopify. It is installed with [Node.js](https://nodejs.org/en/)
- - - -
```bash
git init
```
```bash
git clone https://github.com/johnbroaddusivccv/hooked-expense-tracker.git
```
```bash
cd hooked-expense-tracker/
```
```bash
npm install
```
- - - -
Install Dev Dependencies
```
npm -D install nodemon concurrently
```
- - - -
- Create a dotenv file to set your MongoDB URI and PORT
- Create an eviromental variable named NODE_DEV set to either production or development
- - - -
## Usage
```
npm run dev
```
## Build & Deploy to Heroku
- bash into the client folder
```
cd client
```
```
npm run build
```
- Bash into the root directory
```
cd ..
```

```
Heroku create
```
- Make sure every step up until this has been completed otherwise the build might fail
- Also Make sure to go to your mongoDB ATLAS account in the network access tab on the cluster you created for this full stack application whitelist the IP by allowing access to every starting point.
- Set the IP Address to 0.0.0.0/0
```
git heroku push master
```


### Also
- Example of React Hooks implemented in Transaction Component
```React

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
    return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}${numberWithCommas(Math.abs(transaction.amount))}
      </span>
      <button
        onClick={() => deleteTransaction(transaction._id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
```
- Being able to manage state in a simple (and reusable) manner within function components. 

## License
[MIT](https://choosealicense.com/licenses/mit/)
