module.exports = {
	/*THIS PROVIDES THE CONTENT FOR THE INDEX PAGE*/
    index: function(req, res){
        res.render('user/index');
    },

    sendEmail: function(req, res){
        console.log("do nothing");
    }
}