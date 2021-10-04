

module.exports = {


  friendlyName: 'Create',


  description: 'Create post.',


  inputs: {
    // title:{
    //   description:'Title of the post object',
    //   type:'string',
    //   required: true,
      
    // },
    // postBody:{
    //   type:'string',
    //   required: true,
      
    // },
    embedCode:{
      type:'string',
      required: true,
    },
    title:{
      type:'string',
      required: true
      
    }
  },


  exits: {

  },


  fn: async function (inputs) {
    const a = await Company.find({name: "Scotia iTRADE"})
    
    console.log('we are now inside post/create action')
    const userId = this.req.session.userId
    console.log('userid')
    console.log(userId)
    console.log('fetch company')
    console.log(a)
    let embedB = {"en-us":inputs.embedCode}
    let embedArray = [];
    embedArray.push(embedB)
    //console.log(this.req.me)
    // await Post.create({title: inputs.title, body: inputs.postBody, user: userId})
     //await Ad.create({title: inputs.title,company:a[0].id, embedCode: '[{"en-us":"'+ inputs.embedCode+'"}]', title: '[{"en-us":"'+ inputs.embedCode+'"}]' })
     await Ad.create({title: inputs.title,company:a[0].id, embedCode: embedArray, title: '[{"en-us":"'+ inputs.embedCode+'"}]' })
    this.res.redirect('/home')
    //return;

  }


};
