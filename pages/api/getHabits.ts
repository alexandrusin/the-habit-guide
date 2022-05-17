// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from 'sanity'
import { Habit } from 'typings'

const query = `*[_type == "habit"] {
    _id,
    ...,
    "tags": tags[]->{title,slug { current }},
  }`

//   "cat": *[ _type == "category" ] {
//     title
// },

type Data = {
	habits: Habit[]
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const habits: Habit[] = await sanityClient.fetch(query)

	res.status(200).json({ habits })
}
