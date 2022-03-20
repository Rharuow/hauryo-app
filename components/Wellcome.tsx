/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import TypeAnimation from "react-type-animation";

const Wellcome = () => {
  const [paragraph, setParagraph] = useState<number>(0);
  const [buttonText, setButtonText] = useState("Próxima");
  const content = {
    title: "Bem vinda senhorita Haruyo!",
    body: [
      "Estou muito feliz que vc esteja aqui.",
      "Espero que sua viagem esteja ótima!",
      "Fiz esse pequeno site para que eu possa mostrar o quanto gosto de você!",
      "Ontem você não gostou quando usei a palavra 'nostálgica' quando me referi ao seu cheiro, mas era a palavra certa a se usar!",
      "O seu cheiro me trás boas lembranças.",
      "As novas que estou construindo com você são muito especiais e eu guardo com muito carinho nas minhas memórias!",
      "Eu me apaixono por você a cada dia que se passa e descubro coisas novas sobre você.",
      "Então se você viu essa mensagem até aqui, me responda no whatsapp da seguinte pergunta...",
      "Você acredita verdadeiramente em tudo o que eu digo a você sobre o que eu sinto?",
      "Bem, é isso minha flor de Cerejeira. Te espero amanhã, depois de amanhã e pelo resto de nossas vidas!",
    ],
  };

  const handleText = () => {
    setParagraph((prev) => ++prev);
    if (paragraph + 1 === content.body.length - 1) setButtonText("Acabou! :(");
  };

  const backText = () => {
    setParagraph((prev) => --prev);
  };

  return (
    <div className="h-100vh bg-dark text-light p-3">
      <h1 className="text-center">
        <TypeAnimation cursor={false} sequence={[content.title, 1000]} />
      </h1>
      <div className="d-flex w-100 justify-content-center">
        <img
          src={`./stichhappy${
            paragraph <= 5 ? paragraph : Math.floor(Math.random() * 6)
          }.png`}
          width={150}
          alt="stitch happy"
        />
      </div>
      <p className="fs-4">
        {paragraph === 0 && (
          <TypeAnimation
            cursor={true}
            sequence={[1, content.body[paragraph]]}
          />
        )}
        {paragraph === 1 && (
          <TypeAnimation
            cursor={true}
            sequence={[1, content.body[paragraph]]}
          />
        )}
        {paragraph === 2 && (
          <TypeAnimation
            cursor={true}
            sequence={[1, content.body[paragraph]]}
          />
        )}
        {paragraph === 3 && (
          <TypeAnimation
            cursor={true}
            sequence={[1, content.body[paragraph]]}
          />
        )}
        {paragraph === 4 && (
          <TypeAnimation
            cursor={true}
            sequence={[1, content.body[paragraph]]}
          />
        )}
        {paragraph === 5 && (
          <TypeAnimation
            cursor={true}
            sequence={[1, content.body[paragraph]]}
          />
        )}
        {paragraph === 6 && (
          <TypeAnimation
            cursor={true}
            sequence={[1, content.body[paragraph]]}
          />
        )}
        {paragraph === 7 && (
          <TypeAnimation
            cursor={true}
            sequence={[1, content.body[paragraph]]}
          />
        )}
        {paragraph === 8 && (
          <TypeAnimation
            cursor={true}
            sequence={[1, content.body[paragraph]]}
          />
        )}
        {paragraph === 9 && (
          <TypeAnimation
            cursor={true}
            sequence={[1, content.body[paragraph]]}
          />
        )}
      </p>
      <div className="d-flex justify-content-between">
        <Button
          onClick={() => handleText()}
          disabled={paragraph === content.body.length - 1}
        >
          {buttonText}
        </Button>
        <Button
          variant="warning"
          onClick={() => backText()}
          disabled={paragraph === 0}
        >
          Anterior
        </Button>
      </div>
    </div>
  );
};

export default Wellcome;
