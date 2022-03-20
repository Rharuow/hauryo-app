/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Home: NextPage = () => {
  const [show, setShow] = useState(true);

  const { handleSubmit, register } = useForm<{ secret: string }>();

  const router = useRouter();

  const onSubmit = (data: { secret: string }) => {
    console.log(data.secret);
    if (data.secret === "Depois de amanhã e pelo resto de nossas vidas!") {
      router.push("./wellcome");
    } else
      Swal.fire({
        title: "Ihhhh!",
        text: "Você digitou o código errado!",
        iconHtml: '<img src="./stichwrong.png" width="120px" />',
        confirmButtonText: "Tente de novo",
      });
  };

  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title>Olá Haruyo chan!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Se você ta aqui, sabe o que deve digitar!</p>
        <div className="d-flex justify-content-center">
          <img src="stich1.png" alt="" width={100} />
        </div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Você vai falar comigo amanha?"
              {...register("secret")}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Seguir
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Home;
