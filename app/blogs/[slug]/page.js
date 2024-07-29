import Link from "next/link";

export const BLOGS = [
  {
    id: "blog1",
    slug: "blog-1",
    title: "Blog One",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et ex in lectus ornare consequat sit amet vel diam. Vivamus quis nibh a nisi rutrum lacinia molestie quis ligula. Suspendisse mollis velit tortor, non sagittis lorem lacinia nec. Praesent congue felis neque, quis fermentum sem dignissim ultricies. In a commodo nibh, non vestibulum sapien. Morbi luctus magna tortor, quis consequat nisl gravida ut. Nunc est leo, laoreet ut felis id, pretium blandit augue.",
  },
];

export default function BlogPost() {
  return (
    <div className="container">
      <h1>Blog One</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et ex in
        lectus ornare consequat sit amet vel diam. Vivamus quis nibh a nisi
        rutrum lacinia molestie quis ligula. Suspendisse mollis velit tortor,
        non sagittis lorem lacinia nec. Praesent congue felis neque, quis
        fermentum sem dignissim ultricies. In a commodo nibh, non vestibulum
        sapien. Morbi luctus magna tortor, quis consequat nisl gravida ut. Nunc
        est leo, laoreet ut felis id, pretium blandit augue.
      </p>
      <Link href="/">Return to homepage</Link>
    </div>
  );
}
