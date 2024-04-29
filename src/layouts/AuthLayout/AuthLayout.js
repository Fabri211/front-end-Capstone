import { Icon, Image } from "semantic-ui-react";
import Link from "next/link";
import styles from "./AuthLayout.module.scss";

export function AuthLayout(props) {
  const { children } = props;

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <Link href="/">
          <Image src="/images/logo.png" alt="Hamburguer" />
        </Link>

        <Link href="/">
          <Icon name="close" />
        </Link>
      </div>

      <div className={styles.blockLeft}>{children}</div>

      <div className={styles.blockRight} />
    </div>
  );
}
