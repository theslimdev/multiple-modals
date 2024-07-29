"use client";
import { useRouter } from "next/navigation";

export default function InterceptedBlogPost() {
  const router = useRouter();
  return (
    <div className="overlay" onClick={router.back}>
      <div className="modal blog-modal">
        <h1>Blog Modal</h1>
        <h2>Blog One</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et ex in
          lectus ornare consequat sit amet vel diam. Vivamus quis nibh a nisi
          rutrum lacinia molestie quis ligula. Suspendisse mollis velit tortor,
          non sagittis lorem lacinia nec. Praesent congue felis neque, quis
          fermentum sem dignissim ultricies. In a commodo nibh, non vestibulum
          sapien. Morbi luctus magna tortor, quis consequat nisl gravida ut.
          Nunc est leo, laoreet ut felis id, pretium blandit augue.
        </p>
      </div>
    </div>
  );
}
