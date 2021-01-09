import Head from 'next/head'
import BlogSection from "../components/templates/blog"
import Layout from "../components/organisms/layout"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Daily</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.2/tailwind.min.css" />
      </Head>
       <Layout>
         <BlogSection></BlogSection>
       </Layout>
    </div>
  )
}
