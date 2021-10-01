
 const allPosts = []
 //const db = sails.getDatastore().manager

module.exports ={
    test: async function(req,res){
        // var col = await db.collection('ad').aggregate(
        //     [
        //         { 
        //             "$match" : { 
        //                 "featured" : true
        //             }
        //         }
        //     ], 
        //     { 
        //         "allowDiskUse" : false
        //     }
        // );
        // var temp = col.toArray();
        // console.log(temp)
         
        //var rawMongoCollection = db.collection(Ad.tableName);
        //var gogogo = db.find({featured:true})
        //console.log(rawMongoCollection)
        //const ads = await Post.find().populate('user')
        const ads = await Ad.find({featured:true}).populate('company')
             //res.send(ads)
             res.send(ads)


    },

    posts: async function(req, res){    
        try{
            const posts = await Post.find()
            res.send(posts)
        }
        catch(err){
            res.serverError(err.toString())
        }

        // ALTERNATE WAY 
        // Post.find().exec(function(err,posts){
        //     if(err){
        //         return res.serverError(err.toString())
        //     }
        //     res.send(posts)
        // })    
        
    },

    // create: function(req,res){
    //     const title = req.body.title;
    //     const postBody = req.body.postBody;

    //     sails.log.debug('my title is '+ title);
    //     sails.log.debug('my body is '+ postBody);

    //     Post.create({title: title,body:postBody}).exec(function(err){
    //         if(err){
    //             return res.serverError(err.toString())
    //         }
    //         console.log('finish create object')
    //         return res.end();
    //     })

    //     const newPosts = {id:4, title:title, body:postBody}
    //     allPosts.push(newPosts)

    //     res.redirect('/home')
    //     //res.end();
    // },

    findById: function(req,res){
        const postId = req.param('postId')
        const filteredPosts = allPosts
            .filter(p=>{return p.id == postId})

        if (filteredPosts.length >0 ){
            res.send(filteredPosts[0])
        }else{
            res.send('failed to find post by id'+postId)
        }
        //res.send(postId)
    },

    // delete: async function(req,res){
    //     const postId = req.param('postId')
    //     await Post.destroy({id: postId})

    //     res.send('finish deleting post')
    // }
}