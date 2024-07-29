"use client";
import { useRouter } from "next/navigation";

export default function InterceptedProjectPost() {
  const router = useRouter();
  return (
    <div className="overlay" onClick={router.back}>
      <div className="modal project-modal">
        <h1>Project Modal</h1>
        <h2>Project One</h2>
        <p>
          Integer vitae elit nec urna posuere fringilla eget at lorem. Etiam id
          ligula eros. Integer bibendum erat eget velit aliquam porttitor. Donec
          augue lacus, tempus at porttitor a, dictum varius nunc. Pellentesque
          sit amet imperdiet nisi. Mauris tempus velit non massa tempor
          vestibulum. Nulla eget diam mollis, tempus dui nec, congue quam.
          Praesent molestie efficitur accumsan. Praesent rhoncus, arcu at
          consectetur placerat, elit erat dictum mi, vitae cursus nisl orci in
          quam.
        </p>
      </div>
    </div>
  );
}
