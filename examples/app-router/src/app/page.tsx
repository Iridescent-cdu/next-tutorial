import LinkComponent from "@/components/link";
import styles from "./page.module.css";
import { logout } from "@/lib/auth";

export default function Home() {
  return (
    <main className={styles.main}>
      <form>
        <button formAction={logout}>Login Out</button>
      </form>
    </main >
  );
}
