/**
 * TaskDetail.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    // task: {
    //   type: 'string',
    //   required: true
    // },
    startTime: {
      type: 'datetime'
    },

    endTime: {
      type: 'datetime'
    },
    durGap: {
      type: 'string'
    },
    owner: {
      model: 'task',
      columnName: 'task_id'
    }
  }
};

