import Link from "next/link";

export const PROJECTS = [
  {
    id: "proj1",
    slug: "project-1",
    title: "Project One",
    content:
      "Integer vitae elit nec urna posuere fringilla eget at lorem. Etiam id ligula eros. Integer bibendum erat eget velit aliquam porttitor. Donec augue lacus, tempus at porttitor a, dictum varius nunc. Pellentesque sit amet imperdiet nisi. Mauris tempus velit non massa tempor vestibulum. Nulla eget diam mollis, tempus dui nec, congue quam. Praesent molestie efficitur accumsan. Praesent rhoncus, arcu at consectetur placerat, elit erat dictum mi, vitae cursus nisl orci in quam.",
  },
];

export default function ProjectPost() {
  return (
    <div className="container">
      <h1>Project One</h1>
      <p>
        Integer vitae elit nec urna posuere fringilla eget at lorem. Etiam id
        ligula eros. Integer bibendum erat eget velit aliquam porttitor. Donec
        augue lacus, tempus at porttitor a, dictum varius nunc. Pellentesque sit
        amet imperdiet nisi. Mauris tempus velit non massa tempor vestibulum.
        Nulla eget diam mollis, tempus dui nec, congue quam. Praesent molestie
        efficitur accumsan. Praesent rhoncus, arcu at consectetur placerat, elit
        erat dictum mi, vitae cursus nisl orci in quam.
      </p>
      <Link href="/">Return to homepage</Link>
    </div>
  );
}
