// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from 'sanity'
import { Tag } from 'typings'

const query = `*[_type == "tag"] {
    _id,
    ...
  } | order(name asc)`

type Data = {
	tags: Tag[]
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const tags: Tag[] = await sanityClient.fetch(query)

	res.status(200).json({ tags })
}
