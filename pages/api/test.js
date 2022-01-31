import axios from 'axios'
let apiv1 = "https://UrlShot-backend.kardespro.repl.co"
export default function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
    axios.post(`https://UrlShot-backend.kardespro.repl.co/api/v1/short/add`,{link:req.body.link,customname:req.body.custom}).then(n => {
      res.json({message: n.data.message})
    })
  } else {
    // Handle any other HTTP method
    res.json({err: "Allowed Post Method In Server"})
  }
}