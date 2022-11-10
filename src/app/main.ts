import { z } from "zod";

export const UserSchema = z.object({
  name: z.string(),
  age: z.number(),
});

export function doGet(e: GoogleAppsScript.Events.DoGet): GoogleAppsScript.Content.TextOutput {
  const user = UserSchema.parse(e.parameter);
  Logger.log(user);
  return ContentService.createTextOutput(`${user.name} is ${user.age}`);
}
