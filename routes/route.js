var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var route = express.Router();

const {check, validationResult} = require('express-validator');

const db = require('./../db.js');

route.use(expressLayouts);
//route 라우트
route.get('/', (req, res) => {
    res.render('./sub/sumoon_main')
    res.render('sumoon_main');
})
route.get('/login', (req, res) => {
    res.render('./sub/sumoon_login');
})
route.get('/join', (req, res) => {
    res.render('./sub/sumoon_mem1');
})
route.get('/intro', (req, res) => {
    res.render('./sub/sumoon');
})
route.get('/food', (req, res) => {
    res.render('./sub/sumoon_food');
})
route.get('/seespot', (req, res) => {
    res.render('./sub/sumoon_seespot');
})
route.get('/notice', (req, res) => {
    db.getAllMemos((rows) => {
        res.render('./sub/sumoongongzi',{rows : rows})
    }
)
})
route.get('/notice_page', (req, res) => {
    let id = req.query.id;
    db.getMemoById(id,(row)=>{
        if(typeof id == 'undefined' || row.length <= 0){
            res.status(404).json({error:'undefined memo'})

        }else{
            res.render('./sub/sumoon_gongzi_sub',{row:row[0]})
        }
    })
})
route.get('/artschool', (req, res) => {
    res.render('./sub/sumoon_artschool');
})
route.get('/join1', (req, res) => {
    res.render('./sub/sumoon_mem2');
})
route.get('/newM',(req,res) => {
    res.render('./sub/sumoon_notice_write')
})




route.post('/store', check('content').isByteLength({min : 1, max : 65535}),check('title').isByteLength({min : 1, max : 300}),
    function(req,res, next){
        let errs = validationResult(req);
        console.log(errs)
        if(errs['errors'].length>0){
            res.render('/notice',{errs:errs['errors']});
        }else{
            let param = JSON.parse(JSON.stringify(req.body));
            db.insertMemo(param['content'],param['title'],param['writer'], ()=>{
                res.redirect('/notice');
            })
        }
    });

route.get('/updateMemo',(req,res) => {
    let id = req.query.id;

    db.getMemoById(id,(row)=>{
        if(typeof id == 'undefined' || row.length <= 0){
            res.status(404).json({error:'undefind memo'})

        }else{
            res.render('./sub/updateMemo',{row:row[0]})
        }
    })
})

route.post('/updateMemo',[check('content').isByteLength({min : 1, max : 65535})],
(req,res)=>{
    let errs = validationResult(req);
    let param = JSON.parse(JSON.stringify(req.body));
    let id = param['id'];
    let content = param['content'];
    let title = param['title'];
    let writer = param['writer'];
    if(errs['errors'].length>0){
        db.getMemoById(id,(row)=>{
            res.render('updateMemo',{row:row[0],errs:errs['errors']})
        })
    }else{
        db.updateMemoById(id, content,title,writer,()=>{
            res.redirect('notice');
        })
    }
})

route.get('/deleteMemo',(req,res)=>{
    let id = req.query.id;
    db.deleteMemoById(id,()=>{
        res.redirect('notice');
    });
});



module.exports = route;