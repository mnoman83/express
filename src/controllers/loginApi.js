import bcrypt from 'bcrypt';

const LoginApi = async (req, res) => { 
    const password =  bcrypt.hash(req.body.password, 12);
    //console.log("password: ",password);
    const queryParams = [req.body.username, password];
    await db.query('SELECT * FROM user Where username = ? AND password = ?', queryParams, function (error, results, fields) {
        if (error) {
            console.error(error,db.getQuery());
            return res.status(500).send('Error executing query');
        }
        if(results.length === 0) {
            return res.status(401).send('Invalid username or password');
        }
        console.log(results);
        res.send(results);
    });
}

export default { LoginApi };