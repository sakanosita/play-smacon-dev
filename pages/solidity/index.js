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

      <div>
        <div class="card card-bordered">
          <div class="card-body">
            <h2 class="card-title">Top image
              <div class="badge mx-2 badge-secondary">NEW</div>
            </h2> 
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
            <div class="justify-end card-actions">
              <button class="btn btn-secondary">More info</button>
            </div>
          </div>
        </div> 

        <div class ="card card-bordered">
          <div class="card-body">
            <h2 class="card-title">Top image
              <div class="badge mx-2 badge-secondary">NEW</div>
            </h2> 
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
            <div class="justify-end card-actions">
              <button class="btn btn-secondary">More info</button>
            </div>
          </div>
        </div> 
      </div>
      <footer class="p-10 footer bg-base-300 text-base-content">
        <div>
          <span class="footer-title">Link</span> 

          <Link href="https://www.smacon.dev/">
          <a class="link link-hover">www.smacon.dev</a>
          </Link>
        </div> 
      </footer>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </Layout>
  )
}
  
export default Solidity