const db = require('mongoose');

db.Promise = global.Promise;

async function connect() {
    const uri = `mongodb+srv://user:user1234@cluster0.kxs8x.mongodb.net/telegrom?retryWrites=true&w=majority`
    await db.connect(uri, {
        useNewUrlParser:true,
        useUnifiedTopology: true
    })
    console.log('[db] Conectada con éxito')
}

module.exports = connect


