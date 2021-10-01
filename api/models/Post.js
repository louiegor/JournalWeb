module.exports ={
    //dontUseObjectIds: true,
    attributes:{
        // id: { type: 'number', 
        //     columnName: '_id', 
        //     type: 'string', 
        //     unique: true 
        // },
        title:{
            type:'string',
            required: true
        },
        body:{
            type:'string',
            required: true
        },
        user:{
            model: 'user'
        }

    }
}