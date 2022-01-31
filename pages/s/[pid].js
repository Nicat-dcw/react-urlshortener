import { useRouter } from 'next/router'
import axios from 'axios'
import swr from '../../lib/swr.js';
const Post = () => {

  const router = useRouter()
  const { pid } = router.query
    let { data: negoshort } = swr(`https://UrlShot-backend.kardespro.repl.co/api/v1/short/fetch?customname=${pid}`);
let ssh = negoshort ? negoshort.message : [];

  if(!pid) return(<p class="text-center text-red-600">Unknown</p>)
   if(negoshort.st === "unknown") return(<p>31</p>)
        return(
          <>
       nego
          </>
        )
    
 
}

export default Post 