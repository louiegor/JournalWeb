

module.exports = async function(req, res){
    console.log("This route shows home page of posts")
    const userId = req.session.userId
    const allPosts = await Ad.find().populate('company').sort('createdAt DESC')
    console.log(userId)
    

    res.view('pages/home',{allPosts});

}

{/* <div><%= p.company.name %></div>  */} 