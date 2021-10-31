const mongoose = require('mongoose');


const teamSchema = new mongoose.Schema({ 
	name: { 
		type: String,
		required: true
	},
	founded: { 
		type: String,
		required: true
	},
	manager: { 
		type: String,
		required: true
	},
	nickname: { 
		type: String,
		required: true
	},
	topScorer: { 
		type: String,
		required: true
	},
	stadium: { 
		type: String,
		required: true
	},
	website: { 
		type: String,
		required: true
	},
	leagues: {
		type:	Number,
		'default': 0
	},
});

const loginSchema = new mongoose.Schema({ 
	name: { 
		type: String,
		required: true
	},

	password: { 
		type: String,
		required: true
	},
});

const registrationSchema = new mongoose.Schema({ 
	name: { 
		type: String,
		required: true
	},

	username: { 
		type: String,
		required: true
	},

	password: { 
		type: String,
		required: true
	},

	email: { 
		type: String,
		required: true
	},
});
