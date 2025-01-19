const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            enum: ['income', 'expense'], // Restricts values to 'income' or 'expense'
            required: true,
        },
        category: {
            type: String,
            required: true,
            validate: {
                validator: function (value) {
                    return this.ownerDocument().categories.includes(value);
                },
                message: props => `${props.value} is not a valid transaction category`
            }
        },
        amount: {
            type: Number,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
    },
);

module.exports = transactionSchema;