import { Link } from '@mui/material';
import { SERVER_URL } from '../data/metadata.ts';

export const compilerSentence = (i: string) => {
  i.replace('SERVER_URL', SERVER_URL);
  return i.split('#').map((j, index) => {
    if (j.startsWith(':b')) return <b key={index}>{j.slice(2)}</b>
    else if (j.startsWith(':i')) return <i key={index}>{j.slice(2)}</i>
    else if (j.startsWith(':a')) {
      j = j.replaceAll('SERVER_URL', SERVER_URL);
      return <Link
        key={index}
      href={j.slice(2).split('[')[1].split(']')[0]}
      target="_blank"
        >
        {j.slice(2).split('[')[0]}
        </Link>
    }
    else return (<span key={index}>{j}</span>)
  })
}