import Posts from "./components/Posts";

export default function Home() {
	return (
		<main className="px-6 mx-auto max-w-2xl">
			<p className="prose prose-xl mt-12 text-3xl text-center dark:text-white">
				Hello welcome &nbsp;
				<span className="whitespace-nowrap">
					to <span className="font-bold">Vegan Monkey</span> blog.
				</span>
			</p>
			<Posts />
		</main>
	)
}
