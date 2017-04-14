var mongoose = require("mongoose"),
    bcrypt = require("bcrypt"),
    SALT_WORK_FACTOR = 10;
var Schema = mongoose.Schema;

<<<<<<< HEAD
var user =new  Schema({
    name     : {type:String,required:true},
    email    : {type:String,required:true,unique:true},
    img      : {type:String},    
    password : {type:String,required:true},
    friends  : [{type:Schema.Types.ObjectId,ref:'user'}],
    groups   : [{type:Schema.Types.ObjectId,ref: "groups"}],
    notification :[{}],
    _token	 : {type:String,required:false},
=======
var user = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true, default: "sa" },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    friends: [{ type: Schema.Types.ObjectId, ref: 'user' }],
    groups: [{ type: Schema.Types.ObjectId, ref: "groups" }],
    notification: [{}],
    _token: { type: String, required: false },
>>>>>>> 6f03be9e81c3aa638b5ded1864340874aa1f3a95
});

user.pre("save", function (next) {
    var user = this;
    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();
    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });


});

user.methods.comparePassword = function (candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) return callback(err);
        callback(null, isMatch);
    });
};

module.exports = mongoose.model("user", user);