import { Card, CardBody, CardText, Col, Container, Row } from "react-bootstrap";
import Headers from "./components/Header";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <section id="home">
          <Container>
            <div className="header mx-auto">
              <Link href="/">
                <Image src="/logo/logo.webp" width={200} height={200} alt="logo" style={{ width: "138px", height: "auto" }} />
              </Link>
              <div className="edit me-auto">
                <Link href="/">
                  <Image src="/icon/bx_bxs-pencil.svg" width={100} height={100} alt="pencil icon" style={{ width: "24px", height: "24px" }} />
                </Link>
              </div>
            </div>
            <div className="body">
              <div className="profile">
                <Row className="d-flex justify-content-center align-items-center">
                  <Col xs="8">
                    <Row className="g-4">
                      <Col xs="6">
                        <Link href="/">
                          <Card className="m-0 p-0 bg-transparent">
                            <CardBody className="m-0 p-0">
                              <Image src="/account/acnt1.webp" width={500} height={500} style={{ width: "100%", height: "auto" }} />
                              <CardText className="text-center py-2">
                                <span>Account1</span>
                              </CardText>
                            </CardBody>
                          </Card>
                        </Link>
                      </Col>
                      <Col xs="6">
                        <Link href="/">
                          <Card className="m-0 p-0 bg-transparent">
                            <CardBody className="m-0 p-0">
                              <Image src="/account/acnt2.webp" width={500} height={500} style={{ width: "100%", height: "auto" }} />
                              <CardText className="text-center py-2">
                                <span>Account1</span>
                              </CardText>
                            </CardBody>
                          </Card>
                        </Link>
                      </Col>
                      <Col xs="6">
                        <Link href="/">
                          <Card className="m-0 p-0 bg-transparent">
                            <CardBody className="m-0 p-0">
                              <Image src="/account/acnt3.webp" width={500} height={500} style={{ width: "100%", height: "auto" }} />
                              <CardText className="text-center py-2">
                                <span>Account1</span>
                              </CardText>
                            </CardBody>
                          </Card>
                        </Link>
                      </Col>
                      <Col xs="6">
                        <Link href="/">
                          <Card className="m-0 p-0 bg-transparent">
                            <CardBody className="m-0 p-0">
                              <Image src="/account/acnt4.webp" width={500} height={500} style={{ width: "100%", height: "auto" }} />
                              <CardText className="text-center py-2">
                                <span>Account1</span>
                              </CardText>
                            </CardBody>
                          </Card>
                        </Link>
                      </Col>
                      <Col xs="6">
                        <Link href="/">
                          <Card className="m-0 p-0 bg-transparent">
                            <CardBody className="m-0 p-0 text-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                <circle cx="25" cy="25" r="25" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M28.4615 9.61536H21.3942V21.3942H9.61536L9.61536 28.4615H21.3942V41.0256H28.4615V28.4615H41.0256V21.3942H28.4615V9.61536Z" fill="black" />
                              </svg>
                              <CardText className="text-center py-2">
                                <span>Add Profile</span>
                              </CardText>
                            </CardBody>
                          </Card>
                        </Link>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
