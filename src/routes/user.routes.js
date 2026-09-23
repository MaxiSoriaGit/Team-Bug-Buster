import { Router } from "express";

export const ProfileRouter = Router();

ProfileRouter.get("profile");
ProfileRouter.get("profile/:id");
ProfileRouter.post("profile/:");
ProfileRouter.put("profile/:");
ProfileRouter.delete("profile/:");
