import { Container } from "@mui/material";
import { Header } from "@/components/Header";
import Head from "next/head";
interface Props {
  children: React.ReactNode;
  title:string;
  description:string;
}

export const Layout = ({ children, title, description }: Props) => {
  return (
    <div>
        <Head>
        <title>{title}</title>
        <meta name="title" content="dynamic" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
      </Head>
      <Header />
      <Container maxWidth="xl">
        <div>{children}</div>
      </Container>
    </div>
  );
};
