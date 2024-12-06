const mongoose = require ('mongoose');


const connectDB = async () => {
    try {
        const db = await mongoose.connect(config.CONNECTION_STRING, {
            dbName: config.DATABASE,
              useNewUrlParser: true, // Uso del nuevo parser
                useUnifiedTopology: true, // Soporte para monitoreo del driver
        });
        console.log('Conexion exitosa a la base de datos : ', db.connection.name);
    } catch (error) {
        console.log('Error en la conexion: ', error);
    }
};

module.exports = connectDB;