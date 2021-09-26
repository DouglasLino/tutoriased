const mongoose = require('mongoose');

// chema
const doorSchema = mongoose.Schema({
    width_in: Number,
    height_in: Number,
    type: String,
})

doorSchema.statics.CreateDemoDoors = function() {

    Door.estimatedDocumentCount().then( count => {

        if(count >0 ){
            console.log(`some doors already exist`);
            return
        }

        const slidingDoor = new Door({
            width_in: 23,
            height_in: 60,
            type: 'Sliding',
        })
    
        slidingDoor.save().then(
            () => {console.log(`Sliding door saved`)}
        )
    
        const basicDoor = new Door({
            width_in: 50,
            type: 'Basic',
        })
    
        basicDoor.save().then(
            () => {console.log(`Basic door saved`)}
        )

    })

}

// obtener todas las puertas
doorSchema.statics.getAllDoors = function(done){
    Door.find({}, function(err,doors){
        if (err){
            done(err,null)
        }else{
            done(null,doors)
        }
    })
}

let Door = mongoose.model('Door', doorSchema)

module.exports = Door;