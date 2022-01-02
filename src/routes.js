import { Router } from "express";
import HelloController from "./controllers/HelloController";
import TesteController from "./controllers/TesteController";

const routes = new Router();

routes.get('/hello', HelloController.index);
routes.get('/teste', TesteController.index);

export default routes;