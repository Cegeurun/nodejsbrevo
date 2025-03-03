
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.static('public'));

app.get('/', async(req, res) => {
    const apiKey = '....3hy0xd'; // insert apiKey here
    const url = 'https://api.brevo.com/v3/smtp/email';
    const emailData = {
        
            sender: {
                name: 'Unity Coding',
                email: 'cool@gmail.com' // insert sender email here
            },
        
            to: [
                {
                    email:'coolguyaswell@gmail.com' // insert recipient email here
                }
            ],
            subject: 'Test Email',
            htmlContent:'<html> <body> <h1> Hello </h1> </body> </html>'
        
        
    };

    try{
        const response = await axios.post(url, emailData,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'api-key': apiKey
                
                
                }
        });
        res.send('<html> <body> <h1> Email Send </h1> </body> </html>');
    }

    catch(error)
    {
        console.error('Error Sending Email', error);
    }

});

app.listen(PORT,() => {
    console.log(`Server running on http://localhost:${PORT}`);
});