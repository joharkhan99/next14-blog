"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const NavigationTestPage = () => {
  const router = useRouter();

  // This will return the current pathname
  const pathname = usePathname();
  console.log(pathname);

  // This will return the current search params
  const query = useSearchParams();
  console.log(query.get("test"));

  const handleClick = () => {
    console.log("Write and Redirect clicked");

    // This will redirect to the home page and will be added to the history stack
    // router.push("/");

    // This will redirect to the home page and will not be added to the history stack
    // router.replace("/");

    // This will refresh the current page and will fetch the data again
    // router.refresh();

    // This will go back to the previous page in the history stack
    // router.back();

    // This will go forward to the next page in the history stack
    router.forward();
  };

  return (
    <div>
      <Link href="/" prefetch={false}>
        Home
      </Link>

      <button onClick={handleClick}>Write and Redirect</button>
    </div>
  );
};

export default NavigationTestPage;
