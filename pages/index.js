import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Oi, meu nome é Lucas Porto. Sou desenvolvedor de software especilizado
          em Java Script, principalmente ReactJs e NodeJs.<br></br>
          <br></br>
          Quer conversar? Me chama no{" "}
          <a
            href="https://www.linkedin.com/in/lucasporto21/"
            alt="Meu Linkedin"
          >
            LinkedIn
          </a>
          .
        </p>
        <p>
          (Bem-vindo ao meu blog. Aqui eu falo sobre Front-end, Back-end e dou
          algumas dicas também. Quer me seguir?{" "}
          <a href="https://www.instagram.com/lucasfeed/">
            Esse é o meu Instagram
          </a>
          .)
        </p>
      </section>
      <section className={utilStyles.headingMd}>…</section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
