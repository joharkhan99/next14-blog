import { Suspense } from "react";
import styles from "./admin.module.css";
import AdminPosts from "@/components/adminPosts/adminPosts";
import { auth } from "@/lib/auth";
import AdminPostForm from "@/components/adminPostForm/adminPostForm";

async function AdminPage() {
  const session = await auth();

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>

        <div className={styles.col}>
          <AdminPostForm userId={session.user.id} />
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
