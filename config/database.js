const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);
// mongoose
//   .connect(process.env.DATABASE_URL, {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   })
const db = mongoose.connection;

db.on('connected', () => {
    console.log(`Connected to ${db.name} at ${db.host}: ${db.port}`)
})

module.exports = mongoose