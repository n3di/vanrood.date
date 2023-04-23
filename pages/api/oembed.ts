import type { NextApiRequest, NextApiResponse } from "next";

export default function oEmbed(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).send({
    provider_name: "nedi.me",
    provider_url: "https://www.nedi.me",
  });
}
