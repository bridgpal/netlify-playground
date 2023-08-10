import Image from 'next/image'
import { Inter } from 'next/font/google'

{/* <main className="flex flex-col items-center justify-between p-24"> */}

export default function Home({ posts }) {
  return (
    <main className="flex flex-col pt-24 items-center">
      <div className="fixed top-0 w-full bg-black py-4 shadow">
        <nav className="flex justify-between px-8">
          <div className="text-white font-bold">🆎 Netlify Playground</div>
          <div className="space-x-4">
            <a href="/api/hello" className="text-white">Link 1</a>
            <a href="#" className="text-white">Link 2</a>
          </div>
        </nav>
      </div>



      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-2/3 justify-center">


        {posts.map((p, index) => {
          return (
            <div className="rounded-lg p-4 bg-slate-100 shadow hover:shadow-md" key={index}>
              <h2 className="font-bold text-base">{p.node.title}</h2>
              <div className="text-white bg-red-400 rounded-full p-2 inline-block text-xs font-bold mt-3 outline-cyan-50 text-right">{p.node.publishedDate}</div>
            </div>
          );
        })}

      </div>
    </main>
  )
}
export async function getStaticProps() {
console.log("preparing netlify connect");
const APIURL = 'https://netlify-playg-jp5cnp-prod.api.netlify-connect.com/';
const AUTH_TOKEN = "Bearer " + process.env.CONNECT_TOKEN;

  const QUERY = `
    query MyQuery {
      allContentfulPageBlogPost(filter: {node_locale: {eq: "en-US"}}) {
        edges {
          node {
            title
            featuredImage {
              url
            }
            node_locale
            publishedDate
          }
        }
      }
    }
  `

  const RESPONSE = await fetch(APIURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': AUTH_TOKEN
    },
    body: JSON.stringify({
      query: QUERY,
    }),
  });

  const { data } = await RESPONSE.json();
  console.log("API", data);

  return {
    props: {
      posts: data.allContentfulPageBlogPost.edges
    },
  };
}
