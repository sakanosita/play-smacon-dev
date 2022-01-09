import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

function Motoko() {
  return (
    <Layout>
      <Head>
        <title>Motoko</title>
      </Head>
      <h1 className="text-5xl">Motoko</h1>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </Layout>
  )
}
  
export default Motoko