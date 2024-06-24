import Link from "next/link";

export default function LinkComponent() {
  return (
    <>
      <a href="/about" >to about us</a>
      <Link href="/about" >to about us</Link>
    </ >
  );
}
