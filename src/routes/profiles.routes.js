import { Router } from "express";

export const UserRouter = Router();

UserRouter.get("user");
UserRouter.get("user/:id");
UserRouter.post("user/:");
UserRouter.put("user/:");
UserRouter.delete("user/:");
