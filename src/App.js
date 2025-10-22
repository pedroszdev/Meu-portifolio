import "./App.css";
import fotoMain from "./fotoMain.jpg";
import BlurText from "./BlurText";
import DarkVeil from "./DarkVeil";
import cssIcon from "./icons/css.png";
import djangoIcon from "./icons/django.png";
import gitIcon from "./icons/git.png";
import htmlIcon from "./icons/html.png";
import javaIcon from "./icons/java.png";
import jsIcon from "./icons/javaScript.png";
import mySqlIcon from "./icons/mySql.png";
import nodeJSIcon from "./icons/nodeJS.png";
import pythonIcon from "./icons/python.png";
import reactIcon from "./icons/react.png";
import { CgProfile } from "react-icons/cg";
import fotoPerfil from "./fotoPerfil.PNG";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import fotoProjetoEstoque from "./FotoProjetoEstoque.jpg";
import fotoListaTarefas from './fotoListaTarefas.jpg'
function App() {
  return (
    <>
      <div className="dark-veil-background">
        <DarkVeil
          speed={0.5}
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          // Adicione outras props de personalização aqui
        />
      </div>
      <div className="main">
        <div className="header">
          <div className="menu">
            <p className="logo">Pedro Souza</p>
            <ul className="hot-bar">
              <li>
                <a href="#inicio">Inicio</a>
              </li>
              <li>
                <a href="#sobre-mim">Sobre Mim</a>
              </li>
              <li>
                <a href="#projetos">Projetos</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="home" id="inicio">
          <div className="content-home">
            <div className="titulo">
              <h1>
                <BlurText
                  text="Pedro Souza"
                  delay={300}
                  animateBy="words"
                  direction="top"
                  className="text-2xl mb-8 "
                />
              </h1>
              <BlurText
                text="Desenvolvedor BackEnd"
                delay={70}
                animateBy="letters"
                direction="top"
                className="text-2xl mb-8 "
              />
            </div>
            <p>
              Cursando ciência da computação e focado em backend. Busco
              aprimorar minhas habilidades e criar soluções reais que unem
              desempenho e boa arquitetura.
            </p>
          </div>
          <div className="foto">
            <img src={fotoMain} alt="" />
          </div>
        </div>
        <section className="habilidade">
          <h2 className="titulo">Habilidades</h2>
          <div className="skils">
            <div className="icon">
              <img src={htmlIcon} alt="" />
            </div>
            <div className="icon">
              <img src={cssIcon} alt="" />
            </div>
            <div className="icon">
              <img src={jsIcon} alt="" />
            </div>
            <div className="icon">
              <img src={reactIcon} alt="" />
            </div>
            <div className="icon">
              <img src={nodeJSIcon} alt="" />
            </div>
            <div className="icon">
              <img src={pythonIcon} alt="" />
            </div>
            <div className="icon">
              <img src={djangoIcon} alt="" />
            </div>
            <div className="icon">
              <img src={javaIcon} alt="" />
            </div>
            <div className="icon">
              <img src={mySqlIcon} alt="" />
            </div>
            <div className="icon">
              <img src={gitIcon} alt="" />
            </div>
          </div>
        </section>
        <section>
          <div className="sobre-mim" id="sobre-mim">
            <h2 className="titulo">Sobre Mim</h2>
            <div className="content-sobre-mim">
              <div>
                <img src={fotoPerfil} alt="" className="foto-perfil" />
              </div>
              <div className="texto-sobre-mim">
                <div className="perfil">
                  <CgProfile /> <h3>Perfil</h3>
                </div>
                <p>
                  Olá, meu nome é Pedro Manoel de Souza, tenho 18 anos e sou
                  estudante de ciência da computação da faculdade unisul e
                  desenvolvedor backend em formação. Tenho grande interesse em
                  tecnologia e em como ela pode ser usada para resolver
                  problemas de forma criativa e eficiente. Nos últimos meses,
                  venho me dedicando ao estudo em Python, Django, JavaScript,
                  React, nodejs, java e bancos de dados SQL, buscando entender
                  tanto a parte técnica quanto a lógica por trás de cada
                  solução. <br /> <br />
                  Ainda não possuo experiência profissional na área, mas já
                  desenvolvi diversos projetos que me ajudaram a consolidar
                  conceitos de programação, banco de dados, APIs e integração
                  entre frontend e backend. Esses projetos também fortaleceram
                  minha capacidade de resolver problemas, escrever código limpo
                  e pensar de forma estruturada, sempre com atenção à
                  performance e à manutenibilidade. <br />
                  <br />
                  Sou uma pessoa curiosa, focada e com muita vontade de
                  aprender. Gosto de enfrentar desafios, pesquisar novas
                  tecnologias e aprimorar minhas habilidades constantemente. No
                  momento, estou em busca de uma oportunidade de estágio que me
                  permita aplicar o que aprendi, adquirir experiência prática e
                  crescer profissionalmente dentro da área de desenvolvimento.{" "}
                  <br />
                  <br />
                  Meu objetivo é iniciar minha carreira como desenvolvedor
                  backend, contribuir com projetos reais e continuar evoluindo
                  até me tornar um profissional completo, capaz de entregar
                  soluções que unam qualidade, eficiência e inovação.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="projetos" id="projetos">
            <h2 className="titulo">Projetos</h2>
            <div className="content-projeto">
              <div className="projeto">
                <img src={fotoProjetoEstoque} alt="" />
                <h3>Sistema de Estoque Django</h3>
                <p>
                  Desenvolvi um sistema de gerenciamento de estoque multiusuário
                  utilizando Python, Django e PostgreSQL. A aplicação permite o
                  controle completo de produtos, incluindo operações de CRUD
                  (Criar, Ler, Atualizar e Excluir), e oferece um inventário
                  detalhado com status e informações gerais dos itens. O sistema
                  conta com autenticação de usuários, onde cada um gerencia seu
                  próprio estoque de forma independente.
                </p>
                <div className="botoes">
                  <button className="botao-projeto">
                    <a href="https://github.com/pedroszdev/Sistema-de-Estoque-Django">
                      Codigo
                    </a>
                  </button>
                  <button className="botao-projeto">
                    <a href="https://sistema-estoque-qkq0.onrender.com">
                      Ver Mais
                    </a>
                  </button>
                </div>
              </div>
              <div className="projeto">
                <img src={fotoListaTarefas} alt="" />
                <h3>Lista de Tarefas JavaScript</h3>
                <p>
                  Um projeto simples para organizar tarefas diárias, permitindo
                  adicionar, marcar como concluídas e apagar itens. Foi
                  desenvolvido utilizando as tecnologias web essenciais: HTML,
                  CSS e JavaScript puro.
                </p>
                <div className="botoes">
                  <button className="botao-projeto">
                    <a href="/">Codigo</a>
                  </button>
                  <button className="botao-projeto">
                    <a href="/">Ver Mais</a>
                  </button>
                </div>
              </div>
              <div className="projeto">
                <img src={fotoMain} alt="" />
                <h3>Lorem ipsum dolor sit.</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolor ipsa sapiente numquam fugit quia. Distinctio laboriosam
                  voluptate eos alias sed?
                </p>
                <div className="botoes">
                  <button className="botao-projeto">
                    <a href="https://github.com/pedroszdev/Lista-Tarefas-JavaScript">Codigo</a>
                  </button>
                  <button className="botao-projeto">
                    <a href="/">Ver Mais</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="contato" id="contato">
            <h2 className="titulo">Contato</h2>
            <p>
              Estou sempre aberto a novas oportunidades. Entre em contato
              através de qualquer um dos canais abaixo:
            </p>
            <div className="content-contato">
              <div className="forms">
                <form action="#">
                  <div className="form-group">
                    <label htmlFor="nome">Nome</label>
                    <input
                      type="text"
                      name="nome"
                      id="nome"
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="msg">Mensagem</label>
                    <textarea
                      name="msg"
                      id="msg"
                      placeholder="Sua mensagem"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="botao-contato">
                    Enviar mensagem
                  </button>
                </form>
              </div>
              <div className="contato-externo">
                <a
                  href="https://api.whatsapp.com/send/?phone=5548988489595&text=Ol%C3%A1+Pedro%2C+vi+seu+portf%C3%B3lio+e+gostaria+de+conversar%21&type=phone_number&app_absent=0"
                  className="card-contato"
                >
                  <div className="icon-contato">
                    <FaWhatsapp />
                  </div>
                  <div className="contato-texto">
                    <h3>WhastsApp</h3>
                    <p>Disponivel para chat</p>
                  </div>
                </a>
                <a
                  href="https://github.com/pedroszdev"
                  className="card-contato"
                >
                  <div className="icon-contato">
                    <FaGithub />
                  </div>
                  <div className="contato-texto">
                    <h3>GitHub</h3>
                    <p>Veja meus projetos</p>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/pedrosouza7"
                  className="card-contato"
                >
                  <div className="icon-contato">
                    <FaLinkedinIn />
                  </div>
                  <div className="contato-texto">
                    <h3>Linkdln</h3>
                    <p>Conecte-se comigo</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <footer className="footer">
            <p>© 2025 - Desenvolvedor BackEnd. Todos os direitos reservados.</p>
          </footer>
        </section>
      </div>
    </>
  );
}

export default App;
