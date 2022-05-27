import { Layout } from '@components/common';

const Profile: React.FC = () => {
    return (
        <Layout footer banner searchBar selected="profile">
            <div className="">this is profile page</div>;
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <main className="flex flex-col items-center justify-center flex-1 px-20 text-center ">
                    <h1 className="text-6xl font-bold">
                        Welcome to{" "}
                        <a className="text-blue-600" href="https://nextjs.org">
                            Next.js!
                        </a>
                    </h1>

                    <p className="mt-3 text-2xl">
                        Get started by editing{" "}
                        <code className="p-3 font-mono text-lg bg-green-100 rounded-md dark:text-purple-700 dark:bg-red-200">
                            pages/index.js
                        </code>
                    </p>

                    <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                        <a
                            href="https://nextjs.org/docs"
                            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                        >
                            <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
                            <p className="mt-4 text-xl">
                                Find in-depth information about Next.js features and API.
                            </p>
                        </a>

                        <a
                            href="https://nextjs.org/learn"
                            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                        >
                            <h3 className="text-2xl font-bold">Learn &rarr;</h3>
                            <p className="mt-4 text-xl">
                                Learn about Next.js in an interactive course with quizzes!
                            </p>
                        </a>

                        <a
                            href="https://github.com/vercel/next.js/tree/master/examples"
                            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                        >
                            <h3 className="text-2xl font-bold">Examples &rarr;</h3>
                            <p className="mt-4 text-xl">
                                Discover and deploy boilerplate example Next.js projects.
                            </p>
                        </a>

                        <a
                            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                        >
                            <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
                            <p className="mt-4 text-xl">
                                Instantly deploy your Next.js site to a public URL with Vercel.
                            </p>
                        </a>
                    </div>
                </main>

                <footer className="flex flex-wrap items-center justify-center w-full h-36 border-t">
                    <div className="mt-2 items-center justify-center">
                        {/* <p className="flex-wrap mb-2">The current theme is: {theme}.</p> */}

                        <div className="text-center mb-2">
                            {/* <button
                                aria-label="Toggle Dark Mode"
                                type="button"
                                className="w-10 h-10 p-3 bg-gray-200 rounded dark:bg-gray-800"
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            >
                                {mounted && (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        stroke="currentColor"
                                        className="w-4 h-4 text-gray-800 dark:text-gray-200"
                                    >
                                        {theme === "dark" ? (
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                            />
                                        ) : (
                                            <svg className="svg-icon" viewBox="0 0 20 20">
                                                <path
                                                    fill="none"
                                                    d="M10.544 8.717l1.166-.855 1.166.855-.467-1.399 1.012-.778h-1.244l-.467-1.243-.466 1.244H10l1.011.778-.467 1.398zm5.442.855l-.467 1.244h-1.244l1.011.777-.467 1.4 1.167-.855 1.165.855-.466-1.4 1.011-.777h-1.244l-.466-1.244zm-8.979-3.02c0-2.259.795-4.33 2.117-5.955A9.418 9.418 0 00.594 9.98c0 5.207 4.211 9.426 9.406 9.426 2.94 0 5.972-1.354 7.696-3.472-.289.026-.987.044-1.283.044-5.194.001-9.406-4.219-9.406-9.426M10 18.55c-4.715 0-8.551-3.845-8.551-8.57 0-3.783 2.407-6.999 5.842-8.131a10.32 10.32 0 00-1.139 4.703c0 5.368 4.125 9.788 9.365 10.245A9.733 9.733 0 0110 18.55m9.406-16.246h-1.71l-.642-1.71-.642 1.71h-1.71l1.39 1.069-.642 1.924 1.604-1.176 1.604 1.176-.642-1.924 1.39-1.069z"
                                                />
                                            </svg>
                                        )}
                                    </svg>
                                )}
                            </button> */}
                        </div>
                        <a
                            className="flex flex-wrap items-center justify-center"
                            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Powered by{" "}
                            <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
                        </a>
                    </div>
                </footer>
            </div>
        </Layout>
    );
};

export default Profile;
