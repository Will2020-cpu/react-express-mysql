const { Router } = require("express")
const router  = Router()
const pool = require('../database')


router.get('/',(req,res)=>{
    res.json({"Nombre":"Willian","numero":"3135787605"})
})

router.get('/contactos',async(req,res)=>{
    const resultado = await pool.query('SELECT * FROM contact ')
    const data = [];
    resultado.forEach(element => {
        data.push(element)
    });
    res.json({
        data:data
    })
})

router.post('/add',async(req,res)=>{
    const {nombre,numero} = req.body;
    const newContacto = {
        nombre,
        numero
    }
    await pool.query('INSERT INTO contact set ?',[newContacto]);
    res.redirect('/')
})

router.put('/edit/:id',async(req,res)=>{
    const {id} = req.params;
    const {nombre,numero} = req.body;
    const updateContacto = {
        nombre,
        numero
    }
    await pool.query('UPDATE contact SET ? WHERE id = ?',[updateContacto,id])
    res.redirect('/')
})

router.delete('/delete/:id',async(req,res)=>{
    const {id} = req.params;
    await pool.query('DELETE FROM contact WHERE id = ?',[id])
    res.send('Borrado')
})

module.exports = router;