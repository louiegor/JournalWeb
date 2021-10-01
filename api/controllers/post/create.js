module.exports = {


  friendlyName: 'Create',


  description: 'Create post.',


  inputs: {
    title:{
      description:'Title of the post object',
      type:'string',
      required: true,
      
    },
    postBody:{
      type:'string',
      required: true,
      
    }
  },


  exits: {

  },


  fn: async function (inputs) {
    console.log('we are now inside post/create action')
    const userId = this.req.session.userId
    console.log(userId)
    //console.log(this.req.me)
    await Post.create({title: inputs.title, body: inputs.postBody, user: userId})
    this.res.redirect('/home')
    //return;

  }


};
