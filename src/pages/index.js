import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Button, Col, Container, Row } from "react-bootstrap";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <section>
          <Container>
            <div className="splash mx-auto">
              <div className="header d-flex justify-content-center align-items-center">
                <Image src="/logo/logo.webp" width={300} height={300} alt="logo" />
              </div>
              <div className="btngroup poppins-regular">
                <Link href="/home" className="btn" style={{ color: "#fff" }}>
                  Masuk
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
