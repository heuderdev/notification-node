class GerenciamentoControler { 
    static async view(req,res) {
        return res.render("pages/gerenciamento.html")
    }
}


module.exports = { GerenciamentoControler }