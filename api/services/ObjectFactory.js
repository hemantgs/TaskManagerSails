module.exports = {
    getError: function (message) {
        var errorObj = {
            type: "Error",
            message: message
        }
        return errorObj;
    },

    getSuccess: function (message) {
        var successObj = {
            type: "success",
            message: message
        }
        return successObj;
    }

}