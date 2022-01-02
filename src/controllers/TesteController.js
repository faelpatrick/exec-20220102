class TesteController {
    async index(req, res) {
        return res.send('<h1>Hello World!</h1><br><p>Its just a test!</p>');
    }
}
export default new TesteController();