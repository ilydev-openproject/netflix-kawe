import Image from "next/image";
import Link from "next/link";
import { Container } from "react-bootstrap";

const Custom404 = () => {
  return (
    <main>
      <Container>
        <div className="error">
          <div className="errorgroup">
            <div className="images text-center w-100">
              <Image src="/logo/logo.webp" width={500} height={500} alt="logo" style={{ width: "207px", height: "55.616px" }} />
            </div>
            <span className="poppins-regular" style={{ fontSize: "28px", textAlign: "center" }}>
              Opsss, anda tersesat
            </span>
            <div className="buttongroup">
              <Link href="/" className="btn poppins-regular">
                Back Home
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Custom404;
