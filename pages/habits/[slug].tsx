import { GetServerSideProps, GetStaticProps } from 'next'
import PortableText from 'react-portable-text'
import { sanityClient } from 'sanity'
import { Habit } from 'typings'

interface Props {
	habit: Habit
}

const Habit = ({ habit }: Props) => {
	console.log('habit from [slug] ->', habit)
	return (
		<>
			<h2 className="headline2">{habit.title}</h2>
			<div className="text-container">
				<p className="body1">
					Short Description: <br />
					{habit.description}
				</p>

				{/* can be replaced by https://www.sanity.io/plugins/portabletext-react */}
				<PortableText
					dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
					projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
					// Pass in block content straight from Sanity.io
					content={habit.body}
					// Optionally override marks, decorators, blocks, etc. in a flat
					// structure without doing any gymnastics
					// serializers={{
					// 	h1: (props) => <h1 style={{ color: "red" }} {...props} />,
					// 	li: ({ children }) => <li className="special-list-item">{children}</li>,
					// 	someCustomType: YourComponent,
					// }}
					// serializers={{
					// 	h1: (props: any) => (
					// 	  <h1 className="my-5 text-2xl font-bold" {...props}></h1>
					// 	),
					// 	h2: (props: any) => (
					// 	  <h1 className="my-5 text-xl font-bold" {...props}></h1>
					// 	),
					// 	li: ({ children }: any) => (
					// 	  <li className="ml-4 list-disc">{children}</li>
					// 	),
					// 	link: ({ children, href }: any) => (
					// 	  <a href={href} className="text-blue-500 hover:underline">
					// 		{children}
					// 	  </a>
					// 	),
				/>
			</div>
		</>
	)
}

export default Habit

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export const getStaticProps: GetStaticProps = async ({ params }) => {
	// If this request throws an uncaught error, Next.js will
	// not invalidate the currently shown page and
	// retry getStaticProps on the next request.
	console.log('check params ->', params?.slug)

	const query = `*[_type == "habit" && slug.current == $slug][0] {
		_id,
		_createdAt,
		title,
		slug,
		description,
		icon,
		categories,
		body
	  }`
	// Call Sanity API endpoint to get the habits.
	const habit = await sanityClient.fetch(query, {
		slug: params?.slug,
	})

	if (!habit) {
		return {
			notFound: true,
		}
	}

	// By returning { props: { habit } }, the Habit page
	// will receive `habits` as a prop at build time
	return {
		props: {
			habit,
		},
		// Next.js will attempt to re-generate the page:
		// - When a request comes in
		// - At most once every 10 seconds
		revalidate: 60,
	}
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export const getStaticPaths = async () => {
	// query all habit types
	const query = `*[_type == "habit"] {
		_id,
		slug {
			current
		}
	}`
	const habits: Habit[] = await sanityClient.fetch(query)

	// Get the paths we want to pre-render based on habits
	const paths = habits.map((habit: Habit) => ({
		params: {
			slug: habit.slug.current,
		},
	}))

	// We'll pre-render only these paths at build time.
	// { fallback: blocking } will server-render pages
	// on-demand if the path doesn't exist.
	return {
		paths,
		fallback: 'blocking',
	}
}
