

module.exports = {


  friendlyName: 'Delete',


  description: 'Delete post.',


  inputs: {
    postId:{
      type: 'string',
      required: true
    }
  },


  exits: {
    invalid:{
      description: 'This was an invalid post to delete'
    }
  },


  fn: async function (inputs) {
    console.log('we are in delete')
    console.log('deleting '+inputs.postId)

    const record = await Ad.destroy({id: inputs.postId}).fetch()
    if (record.length == 0){
      throw ({invalid:{error: 'Record does not exist'}})
    }
    // All done.
    return record;

  }


};
