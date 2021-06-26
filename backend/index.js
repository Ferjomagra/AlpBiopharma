const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});


const uri = 'mongodb://localhost/alp';
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


/*Start For email*/
const Email = require('./models/emailModel')

app.post('/email', (req,res)=>{
	

	const newEmail = new Email({
		from_name : req.body.from_name,
		from_email : req.body.from_email,
		message: req.body.message,
		date: Date.parse(req.body.date)
	})

	newEmail.save(function(err){
		const content = ''
		var api_key = 'key-d8214dad23cb6f4a0b54f5d346cb3656';
		var domain = 'dintair.com';
		var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

		var data = {
			from : newEmail.from_email,
			to: 'fernandomadueno1@gmail.com',
			subject: 'Notificación',
			text: req.body.message
		}
		console.log(newEmail)

		/*mailgun.messages().send(data, function(error,body){
			if(error){
				console.log(error)
			}
				console.log(body)
		})

		if(!err){
			res.redirect('/')
			console.log(newEmail)
		} else {
			console.log('No se envió el mensaje')
			res.render(err)
		}*/
	})
})
/*End For email*/