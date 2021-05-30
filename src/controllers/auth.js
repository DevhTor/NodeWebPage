//database
const mysql = require('mysql');

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

exports.login = async (req, res)=>{
    console.log(req.body);
    try {
        const {username, password} = req.body;
        
        if(!username || !password){
            console.log('complete los campos');
            return res.status(400).render('partials/login', {
                
                message: 'Debe Completar Los Campos'
                
            });
        }
        
        db.query('SELECT * FROM users WHERE username = ?', [username], (error,results) =>{
            console.log(results);
            if(!results || password != results[0].password){
                
                res.status(401).render('partials/login', {
                    
                })
            }else{
                
                res.render('partials/biografia', {
                    logged: true
                });
            }

        });
    } catch (error) {
        
    }
    

    
    
}