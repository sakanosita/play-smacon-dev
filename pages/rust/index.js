import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

function Rust() {
  return (
    <Layout>
      <Head>
        <title>Rust</title>
      </Head>
      <h1 className="text-5xl">Rust</h1>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </Layout>
  )
}
  
export default Rust