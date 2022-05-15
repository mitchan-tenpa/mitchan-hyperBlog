import { client } from "./../../libs/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { Blog } from "src/pages";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await client.getList<Blog>({
    endpoint: "blog",
    queries: { q: req.body.q },
  });

  res.status(200).json(data);
};

export default handler;
