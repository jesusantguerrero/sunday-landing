import Head from 'next/head'
import Landing from "../components/templates/landing"
import Layout from "../components/organisms/layout"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Daily</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.2/tailwind.min.css" />
      </Head>
       <Layout showHero={true}>
         <Landing></Landing>
       </Layout>
    </div>
  )
}
