
var Joi = require("@hapi/joi")

//validation
function registerValidation(data){

   const schema = Joi.object({
      name: Joi.string().min(3).required(),
      email: Joi.string().min(4).required(),
      phoneNumber: Joi.string().length(10).required(),
      hobbies: Joi.array().required(),
   })
   try{
      return schema.validate(data)
   }
   catch(err){
      return err
   }
}


module.exports = {
  registerValidation
}
