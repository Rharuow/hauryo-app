/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import TypeAnimation from "react-type-animation";
import Emoji from 'a11y-react-emoji'

const Wellcome = () => {
  const [paragraph, setParagraph] = useState<number>(0);
  const [buttonText, setButtonText] = useState("Próxima");
  const content = {
    title: "Assim como a primavera, vc voltou!",
    body: [
      "O que será que o seu amante preparou pra você agora?",
      "Tenho certeza que é algo incrível!",
      "Vc ta do lado dele? Olha pra ele antes de ir pra próxima mensagem...",
      "Certeza que esse beijo foi doce, não foi?",
      "Bem, ele tem algo pra lhe falar...",
      "Mas tem medo do que vc vai responder, acredita?",
      "Bem, ele me pediu pra vim aqui e te falar que pela primeira vez ele tem algo a dizer a vc, olhe pra ele de novo!",
      "Por fim, ele quer saber se vc quer...",
    ],
  };

  const handleText = () => {
    setParagraph((prev) => ++prev);
    if (paragraph + 1 === content.body.length - 1) setButtonText("Ansiosa?");
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
          src={`./stichhappy${paragraph <= 5 ? paragraph : paragraph === content.body.length - 1 ? 5 : Math.floor(Math.random() * 6)
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
          {buttonText} {paragraph === content.body.length - 1 && <Emoji symbol="💕" label="love" />}
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
