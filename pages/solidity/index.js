import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

function Solidity() {
  return (
    <Layout>
      <Head>
        <title>Solidity</title>
      </Head>
      <h1 className="text-5xl">Solidity</h1>

      <Link href="/">
        <a>Back to home</a>
      </Link>
      <div>
        <div class="card card-bordered">
          <div class="card-body">
            <h2 class="card-title">First Application
            </h2> 
            <div class="justify-end card-actions">
              <button class="btn btn-secondary">Go</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
  
export default Solidity