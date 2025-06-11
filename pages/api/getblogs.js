// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/getblogs?slug=how-to-learn-js
import * as fs from 'fs'

export default function handler(req, res) {
  fs.readFile(`blogdata/${req.query.slug}.json`, 'utf-8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'No Such Blog Found' })
    }
    console.log(req.query.slug)
    res.status(200).json(JSON.parse(data))
  })
}
