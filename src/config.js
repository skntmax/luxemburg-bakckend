
import dotenv from './dotenv.js'
export default {
    //  port: 9009,
    port: dotenv.PORT,
    allowedOrigin: ['*'],
     db_url: `mongodb+srv://skntmax:sknt987@cluster0.rosw1y7.mongodb.net/${dotenv.DB}`,

    secretKey: '',

    dbConnection: {      
        "user":"skntmax", 
        host: 'localhost',
       password: 'sknt987',
        port: 5432 ,
        max: 2000 ,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 2000,
         
    },
    mailer: {
        host: "mail.cciltd.in",
        port: 465,
        secure: true, // upgrade later with STARTTLS
        user: "noreply@cciltd.in",
        pass: "India@786"
    }

};