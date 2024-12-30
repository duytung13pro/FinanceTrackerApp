import { SimpleFaker, faker } from "@faker-js/faker";


export type Transaction = {
    type: string;
    category: string;
    amount: number;
    date: string;
    time: string;
}

export type UserData = {
    userid: string;
    income: number;
    expenses: number;
    transactions: Transaction[];
}


export const transactionTypes = ["income", "expense"];
export const transactionCategories = ["salary", "groceries", "rent", "utilities"];


export const generateTransaction = (): Transaction => {
    const customFaker = new SimpleFaker();
    const randomDate = faker.date.between({ from: '2000-01-01', to: Date.now() });
    
    return {
        type: customFaker.helpers.arrayElement(transactionTypes),
        category: customFaker.helpers.arrayElement(transactionCategories),
        amount: parseFloat(faker.finance.amount()),
        date: randomDate.toLocaleDateString(),
        time: randomDate.toLocaleTimeString(),
    }
}


export const generateTransactions = (transactionNumbers: number): Transaction[] => {
    return Array.from({ length: transactionNumbers }, () => generateTransaction());
}


export const generateUser = (userid: string = "1", transactionNumbers: number): UserData => {
    const transactions = generateTransactions(transactionNumbers);

    return {
        userid: userid,
        income: parseFloat(faker.finance.amount({ min: 1000, max: 10000, dec: 0 })),
        expenses: parseFloat(faker.finance.amount({ min: 1000, max: 10000, dec: 0 })),
        transactions: transactions,
    }
}


export const generateUsers = (userNumbers: number = 1, transactionNumbers: number): UserData[] => {
    return Array.from({ length: userNumbers }, (_, i) => generateUser(i.toString(), transactionNumbers));
}


export const users = generateUsers(5, 200);