import { IoSend } from "react-icons/io5";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillYoutube } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <div className="w-full bg-eft-blue">
        <div className="m-auto max-w-[1920px] flex text-xl xl:justify-center items-start gap-14 p-10 pt-14 pb-9 max-xl:pb-28">
          <div className="grid gap-1 font-bold max-xl:font-normal h-fit w-[467px]">
            <img src="/images/logo_small.png" alt="" />
            <p>Site desenvolvido por: DWB Digital.</p>
            <p>Design adaptado por: Thuanne Ramos.</p>
            <div className="flex gap-1 max-xl:hidden">
              <FaFacebookSquare className="size-6" />
              <AiFillYoutube className="size-6" />
              <IoLogoWhatsapp className="size-6" />
              <AiFillInstagram className="size-6" />
              <BsTwitter className="size-6" />
            </div>
          </div>

          <div className="grid gap-7 h-fit max-xl:hidden">
            <p className="font-bold">Navegação</p>
            <ul className="grid gap-5">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#sobre">Sobre</a>
              </li>
              <li>
                <a href="#compre">Compre</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#problema">Problema?</a>
              </li>
            </ul>
          </div>

          <div className="grid gap-7 h-fit max-xl:hidden">
            <p className="font-bold">Contato</p>
            <p>contato@naovamosfalardeamor.com.br</p>
          </div>

          <div className="grid gap-7 h-fit max-xl:hidden">
            <p className="font-bold">Inscreva-se no meu mailing</p>
            <div className="h-fit w-fit flex has-focus-within:scale-105 has-active:scale-100 has-focus-within:shadow-xl rounded-2xl transition-all">
              <input
                type="email"
                name="email-input"
                id="email-input"
                className="bg-white text-black placeholder:text-black text-base rounded-l-2xl w-64 pl-4 outline-hidden"
                placeholder="Endereço Email"
              />
              <button className="bg-eft-yellow rounded-r-2xl h-14 w-11 flex justify-center items-center active:bg-eft-yellow-hover transition-all">
                <IoSend />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
