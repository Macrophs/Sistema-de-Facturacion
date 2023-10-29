import { Connect } from "@/services/Connect";

export default async function NewItemDBHelper(newdata, type) {
  try {
    await Connect("employee", type, newdata);
    return true;
  } catch (error) {
    return false;
  }s
}
