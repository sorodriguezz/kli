import { Request, Response } from "express";

export class UserController {
  constructor() {}

  getUsers = (req: Request, res: Response) => {
    res.json({
      user: req.body.user,
    });
  };
}
