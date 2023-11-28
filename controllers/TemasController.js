const TemasModel = require('../models/temas');

class TemasController {
    static async indexGet(req, res){
        let data = await TemasModel.consultar();
        res.send(data);
    }

    static async itemGet(req, res){
        let id = req.params.id;
        let data = await TemasModel.consultarPorId(id);
        res.send(data);
    }

}

module.exports = TemasController; 