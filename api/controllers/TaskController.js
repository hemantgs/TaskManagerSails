/**
 * TaskController
 *
 * @description :: Server-side logic for managing Tasks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    getTaskList: function (req, res, next) {
        Task.find({}).exec(function (err, tasks) {
            if (err)
                return res.json(ObjectFactory.getError("Error fetching tasks"));
            else {
                return res.json(tasks);
            }
        })
    },

    addTask: function (req, res, next) {
        var taskObj = {};
        taskObj.status = req.param('status');
        taskObj.task = req.param('task');
        Task.create(taskObj).exec(function (err, taskAdded) {
            if (err)
                return res.json(ObjectFactory.getError("Error adding tasks"));
            else {
                return res.json(ObjectFactory.getSuccess("Successfully added the task"));
            }
        })
    },

    deleteTask: function (req, res, next) {
        var taskObj = {};
        taskObj.id = req.param('id');
        Task.destroy(taskObj).exec(function (err, taskAdded) {
            if (err)
                return res.json(ObjectFactory.getError("Error deleting task"));
            else {
                return res.json(ObjectFactory.getSuccess("Successfully deleted the task"));
            }
        })
    },

    toggleTaskStatus: function (req, res, next) {
        var oldTaskObj = {
            id: req.param('id')
        };
        var newUserObj = {
            status: req.param('status'),

        }

        Task.update(oldTaskObj, newUserObj).exec(function (err, updateTask) {
            if (err)
                return res.json(ObjectFactory.getError("Error updating task"));
            else {
                return res.json(ObjectFactory.getSuccess("Successfully updated the task"));
            }
        });

    },
    getTaskDetails: function (req, res, next) {
        Task.find({ "id": req.param('id') }).populate('taskdetails').exec(function (err, taskDetails) {
            if (err)
                return res.json(ObjectFactory.getError("Error updating task"));
            else {
                var responseTask = {};
                responseTask = taskDetails[0];
                var moment = require('moment')
                for (var i = 0; i < responseTask.taskdetails.length; i++) {
                    var startDate = moment(responseTask.taskdetails[i].startTime, 'YYYY-M-DD HH:mm:ss');
                    var endDate = moment(responseTask.taskdetails[i].endTime, 'YYYY-M-DD HH:mm:ss');
                    var duration = moment.duration(endDate.diff(startDate));
                    var hours = parseInt(duration.asHours());
                    var minutes = parseInt(duration.asMinutes()) - hours * 60;
                    responseTask.taskdetails[i].durGap = hours + ':' + minutes;
                }
                return res.json(responseTask);
            }
        });

    },

    addTaskDuration: function (req, res, next) {
        var newUserObj = {
            startTime: req.param('startTimeString'),
            endTime: req.param('endTimeString'),
            owner: req.param('taskId')
        };
        TaskDetail.create(newUserObj).exec(function (err, updateTask) {

            if (err)
                return res.json(ObjectFactory.getError("Error updating task"));
            else {
                return res.json(ObjectFactory.getSuccess("Successfully added the taskDetails"));
            }
        });
    }

};

