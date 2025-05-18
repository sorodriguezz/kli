import { Router } from "express";
import { UserController } from "./user.controller";

export class UserRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new UserController();

    router.post("/", controller.getUsers);

    return router;
  }
}
