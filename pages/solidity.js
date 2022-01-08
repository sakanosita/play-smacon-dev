import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
function Solidity() {
  return (
    <Layout>
      <Head>
        <title>Solidity</title>
      </Head>
      <h1 className="text-5xl">Solidity</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}
  
export default Solidity