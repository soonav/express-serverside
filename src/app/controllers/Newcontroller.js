class Newcontroller {
    // "GET" news
    index(req,res){
        res.render('news')
    }
    child(req,res){
        res.send('new detail')
    }
}

module.exports = new Newcontroller