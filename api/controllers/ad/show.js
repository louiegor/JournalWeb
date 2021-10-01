
module.exports = async function(req, res){
    console.log("This route shows ads")
    const userId = req.session.userId
    const all = await Ad.find()

    res.view('pages/home',
        {all}
    
    );
}