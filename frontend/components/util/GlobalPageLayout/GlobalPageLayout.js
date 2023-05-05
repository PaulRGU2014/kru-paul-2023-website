import Head from "next/head";
import MetaTags from "../MetaTags/MetaTags";
import MegaMenu from "../../block/MegaMenu/MegaMenu";
import Footer from "../../block/Footer/Footer";
import styles from "./GlobalPageLayout.module.scss";
import ErrorPage from "../../page/ErrorPage/ErrorPage";

export default function GlobalPageLayout({
  meta = {},
  menu,
  statusCode,
  children,
}) {
  return (
    <>
      <Head>
        {statusCode === 200 ? (
          <MetaTags drupalRenderArray={meta} />
        ) : (
          <title>Chronos - Error {statusCode}</title>
        )}
      </Head>
      <div className={styles.content}>
        <MegaMenu content={menu.megaMenu} />
        <div className={styles.inner}>
          {(() => {
            if (statusCode !== 200) return <ErrorPage status={statusCode} />;
            else {
              return children;
            }
          })()}
        </div>
        <Footer content={menu} />
      </div>
    </>
  );
}
