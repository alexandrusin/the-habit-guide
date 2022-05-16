// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from 'sanity'
import { Category } from 'typings'

const query = `*[_type == "category"] {
    _id,
    ...
  } | order(name asc)`

type Data = {
	categories: Category[]
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const categories: Category[] = await sanityClient.fetch(query)

	res.status(200).json({ categories })
}
