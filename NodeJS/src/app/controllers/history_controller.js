class history_controller{
    
    index(req,res,next){
        res.render('history/history', {
            title : 'history',
            style : 'history.css',
            users: req.user,
        });
    }

}

module.exports= new history_controller;