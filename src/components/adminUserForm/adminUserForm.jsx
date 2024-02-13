"use client";

import { addUser } from "@/lib/actions";
import styles from "./adminUserForm.module.css";
import { useFormState } from "react-dom";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);

  return (
    <form className={styles.container} action={formAction}>
      <h1>Add User</h1>
      <input type="text" name="username" placeholder="Username" />
      <input type="text" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="Password" />
      <input type="text" name="image" placeholder="image" />
      <select name="isAdmin">
        <option value="false">isAdmin?</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>

      <button className={styles.userButton}>Add User</button>

      {state?.error}
    </form>
  );
};

export default AdminUserForm;
