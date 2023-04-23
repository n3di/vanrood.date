import type { NextApiRequest, NextApiResponse } from "next";

export default function oEmbed(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).send({
    author_name: "Michał Szwindowski",
    author_url: "http://www.nedi.me",
    provider_name: "Nedi",
    provider_url: "http://www.nedi.me",
  });
}
