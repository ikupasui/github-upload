
//GET 
exports.hello_get=function(req,res,next){
//res.send('hello get');
res.render('hello',{title:'hello',content:'いらっしゃいません'});
};

exports.hello_post=function(req,res,next){
    //res.send('未実装');

    let name = req.body['userName'];
    let data = {
      title: 'hello',
      content: name + 'さん　いらっしゃいません'
    }
    res.render('hello', data);

}
