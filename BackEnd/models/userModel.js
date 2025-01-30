const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: { type: String, required: true },
    number: { type: Number, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData:{type:Object,default:{}} // Add cart items array
}, { timestamps: true });

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;










// const orderSchema = mongoose.Schema({
//     items: [
//         {
//             name: { type: String, required: true },
//             image: { type: String, required: true },
//             price: { type: Number, required: true },
//             quantity: { type: Number, required: true },
//         }
//     ],
//     totalPrice: { type: Number, required: true },
//     orderDate: { type: Date, default: Date.now },
//     orderStatus: { type: String, enum: ['Pending', 'Processing', 'Shipped', 'Delivered'], default: 'Pending' }
// }, { timestamps: true });



// const cartItemSchema = mongoose.Schema({
//     name: { type: String, required: true },
//     image: { type: String, required: true },
//     price: { type: Number, required: true },
//     quantity: { type: Number, required: true },
// }, { timestamps: true });
