"use client";

import { useSearchParams } from "next/navigation";

import Image from "next/image";

import Link from "next/link";

export const blogData = {
  "race-condition": {
    title: "Race Conditions in Programming",
    date: "Nov 26, 2025",
    image: "/race-condition.png",
    link: "/blogs?blog=race-condition",
    level: "Advanced",
    readTime: "5 min",
    content: (
      <>
        <div className="text-white/80">
          <p className="mt-6">
            In software development, a race condition happens when multiple
            operations try to access or modify shared resources at the same
            time.
          </p>
          <p className="text-white mt-6 text-xl font-bold">
            Why Race Conditions Happen?
          </p>
          <p className="mt-2">Race conditions happen when:</p>

          <p className="mt-2">
            1. Two or more operations read and write shared data concurrently.
          </p>
          <p className="mt-2">
            2. There is no synchronization mechanism to control access.
          </p>
          <p className="mt-2">
            3. The final result depends on the timing of operations.
          </p>
          <p className="mt-2">
            Even in simple code, this can produce incorrect results.
          </p>

          <p className="text-white mt-6 text-xl font-bold">
            Example: Banking Withdrawal in JavaScript
          </p>
          <p className="mt-2">Imagine a bank account system:</p>
        </div>
        <pre className="bg-zinc-900 p-4 rounded my-4 overflow-auto text-sm md:text-base">
          <code>
            <span className="text-blue-400">let</span>{" "}
            <span className="text-green-400">balance</span> ={" "}
            <span className="text-yellow-300">100</span>; <br />
            <br />
            <span className="text-blue-400">function</span>{" "}
            <span className="text-green-400">withdraw</span>(
            <span className="text-blue-400">user</span>,{" "}
            <span className="text-blue-400">amount</span>) &#123; <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-blue-400">setTimeout</span>(() =&gt; &#123;{" "}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-green-400">balance</span> -={" "}
            <span className="text-yellow-300">amount</span>; <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-red-400">console.log</span>(
            <span className="text-red-400">user</span> +{" "}
            <span className="text-red-400">
              " completed withdrawal. Remaining balance: "
            </span>{" "}
            + <span className="text-green-400">balance</span>); <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-gray-400">
              // simulate network/database delay
            </span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;, Math.random() *{" "}
            <span className="text-yellow-300">1000</span>); <br />
            &#125;; <br /> <br />
            <span className="text-blue-400">withdraw</span>(
            <span className="text-red-400">"Alice"</span>,{" "}
            <span className="text-yellow-300">50</span>); <br />
            <span className="text-blue-400">withdraw</span>(
            <span className="text-red-400">"Bob"</span>,{" "}
            <span className="text-yellow-300">50</span>); <br />
            <span className="text-blue-400">withdraw</span>(
            <span className="text-red-400">"Charlie"</span>,{" "}
            <span className="text-yellow-300">50</span>);
          </code>
        </pre>
        <p className="mt-2 text-white/80">
          Problem: Both withdrawals check the balance before either updates it.
          This allows the account to go negative, a classic race condition.
        </p>
        <p className="text-white mt-6 text-xl font-bold">
          Solving Race Conditions in MongoDB
        </p>
        <p className="mt-2 text-white/80">
          When using a database like MongoDB, race conditions can be avoided
          using atomic updates.
        </p>
        <pre className="bg-zinc-900 p-4 rounded my-4 overflow-auto text-sm md:text-base">
          <code>
            <span className="text-blue-400">const</span>{" "}
            <span className="text-green-400">withdraw</span> ={" "}
            <span className="text-blue-400">async</span> (
            <span className="text-blue-400">userId</span>,{" "}
            <span className="text-blue-400">amount</span>) =&gt; &#123; <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-blue-400">const</span>{" "}
            <span className="text-green-400">result</span> ={" "}
            <span className="text-blue-400">await</span>{" "}
            <span className="text-green-400">userAccount</span>
            .findOneAndUpdate(
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;{" "}
            <span className="text-gray-400">// check sufficient balance</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_id:{" "}
            <span className="text-blue-400">userId</span>, balance: &#123; $gte:{" "}
            <span className="text-blue-400">amount</span> &#125; <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;, <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; $inc: &#123; balance: -
            <span className="text-blue-400">amount</span> &#125; &#125;,{" "}
            <span className="text-gray-400">// subtract amount atomically</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;,{" "}
            <span className="text-blue-400">
              &#123; returnDocument: "after" &#125;
            </span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;);
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">if</span> (
            <span className="text-green-400">result.value</span>) &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-red-400">console.log</span>(
            <span className="text-yellow-300">
              "Withdrawal successful, new balance:"
            </span>
            ,<span className="text-green-400">result.value.balance</span>);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;{" "}
            <span className="text-blue-400">else</span> &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-red-400">console.log</span>(
            <span className="text-yellow-300">
              "Insufficient funds or race condition prevented!"
            </span>
            );
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;
            <br />
            &#125;;
          </code>
        </pre>
        <p className="text-white mt-6 text-xl font-bold">
          Key Points About Atomic Updates in MongoDB
        </p>
        <p className="mt-2">
          1. <code className="text-primary">$inc</code> ensures atomic
          modification — the balance is updated safely.
        </p>
        <p className="mt-2">
          2. The query ensures the withdrawal only happens if enough balance
          exists.
        </p>
        <p className="mt-2">
          3. Multiple simultaneous requests cannot overdraw the account.
        </p>
        <p className="text-white mt-6 text-xl font-bold">Conclusion</p>{" "}
        <p className="mt-2 text-white/80">
          Race conditions can silently break your application if not handled
          properly. By understanding when and where shared data is accessed,
          using atomic operations, transactions, and proper synchronization, you
          can ensure your systems behave reliably even under concurrent
          operations.
        </p>
      </>
    ),
  },
};

const BlogPage = () => {
  const searchParams = useSearchParams();
  const blogKey = searchParams.get("blog") ?? "";

  const blog = blogData[blogKey as keyof typeof blogData];

  return (
    <div className="max-w-7xl mx-auto lg:gap-12 lg:py-12 px-6 flex flex-col-reverse lg:flex-row">
      <aside className="lg:sticky lg:top-0 lg:flex lg:flex-col lg:h-screen w-full lg:w-2/6 pb-12 lg:pb-0">
        <div className="pointer-events-none sticky top-0 z-20 -ml-6 -mr-6 h-24 bg-linear-to-b from-zinc-950 to-transparent lg:-ml-12 lg:-mr-24"></div>

        <Link
          className="hidden lg:inline-flex items-center gap-2 text-zinc-400 hover:text-primary transition-colors mb-8 group"
          href="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-left w-4 h-4 transition-transform group-hover:-translate-x-1"
            aria-hidden="true"
          >
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path>
          </svg>
          Back to Home
        </Link>
        <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4">
          All Blogs
        </h2>

        <ul>
          {Object.keys(blogData).map((key) => (
            <li className="mb-12" key={key}>
              <div className="group relative grid md:grid-cols-[120px_1fr] gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <Image
                  src={blogData[key as keyof typeof blogData].image}
                  height={100}
                  width={100}
                  alt={key}
                  className="z-10"
                />
                <div className="z-10">
                  <p className="-mt-1 text-sm text-zinc-400 font-semibold leading-6">
                    {blogData[key as keyof typeof blogData].date}
                  </p>
                  <h3 className="-mt-1">
                    <Link
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-primary focus-visible:text-primary  group/link text-base"
                      href="/blogs?blog=race-condition"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="5 Common Accessibility Pitfalls and How to Avoid Them (opens in a new tab)"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        {blogData[key as keyof typeof blogData].title}
                        <span className="inline-block">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </Link>
                  </h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </aside>

      {/* Blog Content */}
      <main className="flex-1  lg:sticky lg:top-0">
        <div className="pointer-events-none sticky top-0 z-20 -ml-6 -mr-6 h-24 bg-linear-to-b from-zinc-950 to-transparent lg:-ml-12 lg:-mr-24"></div>
        <Link
          className="inline-flex lg:hidden items-center gap-2 text-zinc-400 hover:text-primary transition-colors mb-8 group"
          href="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-left w-4 h-4 transition-transform group-hover:-translate-x-1"
            aria-hidden="true"
          >
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path>
          </svg>
          Back to Home
        </Link>
        {!blog ? (
          <p className="p-8">Select a blog from the list.</p>
        ) : (
          <>
            <h1 className="text-4xl text-white font-bold mb-4">{blog.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400 mb-6">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-calendar w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
                <time>November 26, 2025</time>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-clock w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M12 6v6l4 2"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
                <span>{blog?.readTime}</span>
              </div>
            </div>
            <Image
              src={"/race-condition.png"}
              height={1000}
              width={1000}
              alt="race-condition"
              className="w-full h-auto"
            />
            <div>{blog.content}</div>
          </>
        )}
      </main>
    </div>
  );
};

export default BlogPage;
