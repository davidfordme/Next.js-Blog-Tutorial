import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout';

export default function FirstPost() {
    const pageTitle = 'My First Post';
    const seoTitle = pageTitle + ' | NextJs Tutorial';
  return (
    <Layout>
        <Head>
            <title>{ seoTitle }</title>
            <meta property="og:title" content="{ seoTitle }" key="title" />
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <h1>{ pageTitle }</h1>
        <p>This is a test post</p>
        <h2>
            <Link href="/">
                <a>Back to home</a>
            </Link>
        </h2>
    </Layout>
  )
}