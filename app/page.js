import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Multiple Modals</h1>
        <div>
          <p>
            The purpose of this demo is to show that pages can have their own
            modals using Parallel and Intercepting Routes.
          </p>
          <p>
            Clicking either of the buttons below will open a modal that displays
            the content of the page it links to. Refreshing the page while the
            modal is open will redirect to the actual page of the content.
          </p>
        </div>
        <div>
          <Link href="/projects/project-1" className="project-btn">
            Project One
          </Link>
          <Link href="/blogs/blog-1" className="blog-btn">
            Blog One
          </Link>
        </div>
      </div>
    </main>
  );
}
