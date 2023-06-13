import Image from 'next/image'
import { Inter } from 'next/font/google'


export default function Home({posts}) {
  return (
    <main className={`flex flex-col items-center justify-between p-24`}>
      <div className="fixed top-0 left-0 w-full bg-black py-4">
        <nav className="flex justify-between items-center mx-auto px-8 ">
          <div className="text-white">🛝 Netlify Playground</div>
          <div className="space-x-4">
            {/* <a href="#" className="text-white">Link 1</a>
            <a href="#" className="text-white">Link 2</a> */}
          </div>
        </nav>
      </div>
      
     

      <div className="grid grid-cols-3 gap-4 mt-8 w-2/3">
      
    
      {posts.map((p, index) => {
            return (
                <div className="bg-white rounded-lg shadow-lg p-4" key={index}>
                <img src=""></img>
                <h2 className="text-lg font-bold mt-4">{p.node.title}</h2>
                <p className="text-gray-600">Description</p>
              </div>
            );
      })}

      </div>
    </main>
  )
}
export async function getStaticProps() {
  const apiUrl = 'https://contentful-6ljs2t-prod.valhalla-api.io/';

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
   
    },
    body: JSON.stringify({
      query: `
      query MyQuery {
        allContentfulPageBlogPost(filter: {node_locale: {eq: "en-US"}}) {
          edges {
            node {
              title
              featuredImage {
                url
              }
              node_locale
            }
          }
        }
      }
      `,
    }),
  });

  const { data } = await response.json();
  console.log("API", data);

  return {
    props: {
      posts: data.allContentfulPageBlogPost.edges
    },
  };
}