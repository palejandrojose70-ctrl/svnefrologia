import { FaEnvelope, FaFacebook, FaHandshake, FaHome, FaInstagram, FaPhone, FaTwitter } from "react-icons/fa"
import DropdownMenu from "./DropdownMenu"
import LoginForm from "./LoginForm"

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white">

        {/* Barra superior: Se centra usando max-w-7xl mx-auto en lugar de ml-40/mr-45 */}
        <div className="w-full border-y border-gray-200">
          <div className="max-w-270 m-auto p-2 text-[12px] sm:p-1.5">

            <div className="flex flex-col items-center gap-2 px-2 sm:flex-row sm:justify-between sm:px-4">

              <div className="flex flex-wrap items-center gap-1.5 text-[#4348A4]">
                <div className="flex items-center gap-0.5">
                  <FaEnvelope/>
                  <p>svnefro@gmail.com</p>
                </div>
                <p>|</p>
                <div className="flex items-center gap-0.5">
                  <FaPhone className="-scale-x-100"/>
                  <p>+ 58 212 7540654</p>
                </div>
              </div>

              <button className="cursor-pointer text-[#289DCC] hover:text-gray-500">Iniciar Sesión</button>
            </div>

          </div>
        </div>

        {/* Logo de la página y patrocinador */}
        <div className="w-full">
          <div className="max-w-5xl m-auto flex flex-col items-center gap-6 px-4 py-5 sm:flex-row sm:flex-wrap sm:justify-between sm:px-6 lg:px-0">
            <img 
              src="src/assets/SVV_logo.png"
              alt="Logo SVV"
              className="h-auto w-auto shrink-0"
            />  

            <div className="flex flex-col">
              <p className="text-gray-500 text-[13px]">Sitio web patrocinado por:</p>
              <img 
                src="src/assets/axionet-logo.png" 
                alt="Axionet Logo"
                className="w-45 max-w-full"
              />  
              <div className="flex w-full max-w-full mt-1">
                <input className="min-w-0 flex-1 border border-gray-300 rounded-l focus:outline-none px-2 py-0.5" />
                <button className="px-4 py-0.5 bg-gray-50 border border-gray-300 rounded-r">Buscar</button>
              </div>
            </div>
          </div>
        </div>

        {/* Barra con opciones de navegación */}
        <div className="border-b border-b-gray-100 px-3 py-3">
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-3 text-gray-500 text-[12px] sm:gap-x-8 sm:text-[13px]">
            <FaHome className="hover:text-blue-700 cursor-pointer size-3 text-gray-600"/>
            <DropdownMenu
              buttonName="INSTITUCION"
              options={[
                { label: "MI PERFIL", href: "#perfil" },
                { label: "CONFIGURACIÓN", href: "#configuracion" },
                { label: "CERRAR SESIÓN", href: "#salir" },
              ]}
            />
            <DropdownMenu
              buttonName="DIRECTORIOS"
              options={[
                { label: "NUESTRA INSTITUCION", href: "#perfil" },
                { label: "ESTATUTOS", href: "#configuracion" },
                { label: "JUNTA DIRECTIVA", href: "#salir" },
                { label: "CAPITULOS", href: "#salir" }
              ]}
            />
            <DropdownMenu
              buttonName="EVENTOS"
              options={[
                { label: "UNIDADES DE HEMODIALISIS", href: "#perfil" },
                { label: "SERVICIOS DE NEFROLOGIA", href: "#configuracion" },              
              ]}
            />
            <DropdownMenu
              buttonName="INSCRIPCION"
              options={[
                { label: "INTERNACIONALES", href: "#perfil" },
                { label: "NACIONALES", href: "#configuracion" },              
              ]}
            />
            <DropdownMenu
              buttonName="LIBRERIA Y DOCUMENTACION"
              options={[
                { label: "MIEMBRO ASOCIADO", href: "#perfil" },
                { label: "MIEMBRO TITULAR", href: "#configuracion" },              
              ]}
            />
            <DropdownMenu
              buttonName="CONTACTO"
              options={[
                { label: "REVISTA DE NEFROLOGIA DE VENEZUELA", href: "#perfil" },
                { label: "ARTICULOS CIENTIFICOS EN ESPAÑOL", href: "#configuracion" },
                { label: "ARTICULOS CIENTIFICOS EN INGLES", href: "#salir" },
                { label: "GACETA OFICIAL DE HEMODIALISIS", href: "#salir" },
                { label: "MANUAL CONSENSO CAREM", href: "#salir" },
                { label: "DIA MUNDIAL DEL RIÑON", href: "#salir" },
                { label: "NOTICIAS", href: "#salir" }
              ]}
            />
            <div>
              <button>M</button>
              <button>M</button>
              <button>M</button>
              <button>M</button>
            </div>
          </div>
        </div>
      </header>

      {/* Reemplazamos <body> por <main>. Usamos flex-1 en el contenido principal para empujar la barra lateral */}
      <main className="max-w-7xl mx-auto flex flex-col gap-6 p-3 sm:p-4 lg:flex-row">
        {/* flex-1 hace que este div ocupe todo el espacio disponible sobrante */}
        <div className="min-w-0 flex-1 p-0 sm:p-4">
          <LoginForm></LoginForm>
        </div>

        {/* Barra lateral de patrocinadores con ancho fijo */}
        <aside className="w-full bg-white border border-gray-200 rounded h-fit lg:w-64 lg:shrink-0">
          <div className="flex justify-center items-center gap-2 border-b border-b-gray-200 mt-4 mb-3 text-blue-900">
            <FaHandshake className="size-8"/>
            <p className="text-[18px]">Patrocinadores</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <img 
                src="src\assets\roemmers.png" 
                alt="Axionet Logo"
                className="w-45 max-w-full"
              /> 
            <img 
                src="src/assets/axionet-logo.png" 
                alt="Axionet Logo"
                className="w-45 max-w-full py-10"
              /> 
          </div>
        </aside>
      </main>

      <footer className="bg-blue-500">
        <div className="flex justify-center gap-8">
          <div className="flex flex-col w-70">
            <p className="text-white border-b border-b-white p-2">Sociedad Venezolana de Nefrologia</p>
            <p className="text-[14px] mt-2 text-blue-200">Somos una comunidad en línea que agrupa a los médicos nefrólogos y afines a la especialidad, con el propósito de promover e impulsar el estudio pedagógico científico, facilitando el acceso a la información y la comunicación entre nuestros miembros y académicos a nivel nacional.</p>
          </div>
          <div className="flex flex-col w-70">
            <p className="text-white border-b border-b-white p-2">Menu</p>
            <p className="text-[14px] mt-2 text-blue-200 hover:text-white">Inicio</p>
            <p className="text-[14px] mt-2 text-blue-200 hover:text-white">Institucion</p>
            <p className="text-[14px] mt-2 text-blue-200 hover:text-white">Eventos</p>
            <p className="text-[14px] mt-2 text-blue-200 hover:text-white">Libreria y Documentacion</p>
            <p className="text-[14px] mt-2 text-blue-200 hover:text-white">Contacto</p>
            
          </div>
          <div className="flex flex-col w-70">
            <p className="text-white border-b border-b-white p-2">Síguenos en nuestras redes sociales</p>
            <div className="flex gap-1 text-blue-950 mt-2">
              <FaInstagram/>
              <FaTwitter/>
              <FaFacebook/>
            </div>
          </div>
        </div>
        <div className="bg-blue-700 text-blue-300 mt-4">
          <p className="text-[13px]">Copyright © 2026, Sociedad Venezolana de Nefrología - RIF: J-30370247-3.</p>
        </div>
        
      </footer>
    </div>
  )
}

export default App