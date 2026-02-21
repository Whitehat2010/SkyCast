import { useState } from "react";
import ExtraNav from "../components/ExtraNav";

import { Link } from "react-router-dom";

const About = () => {
  const [openbar, setopenbar] = useState(false);
  function openSidebar() {
    if (openbar === true) setopenbar(false);
    else setopenbar(true);
  }
  return (
    <>
      <ExtraNav a={openSidebar} />
      <div
        className={`${openbar ? "min-h-[20vh] w-full bg-[#303237] translate-y-0 transition-all absolute z-10 left-0 right-0 " : "translate-y-[-200%] transition-all fixed z-10 left-0 right-0"}`}
      >
        <ul className="text-white leading-[3] text-2xl font-bold text-center">
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Services">Services</Link>
          </li>
        </ul>
      </div>
      <div className="min-h-[75vh] w-[80%] bg-[#adadad6e] m-auto rounded-2xl p-10 mt-7">
        <h1 className="text-6xl text-center mt-10 font-semibold">About Us</h1>
        <p className="leading-[1.3] text-xl md:text-2xl font-medium mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
          voluptates. Pariatur officia atque iusto rerum enim alias sed ea illum
          aperiam. Numquam libero quae incidunt iusto doloribus illo, quam
          explicabo! Minus sequi accusantium expedita ipsum minima, architecto
          eveniet, porro molestiae deserunt quo magnam, sed unde autem nisi
          atque qui velit eos? Libero animi consequuntur delectus quasi quos
          sapiente tempore blanditiis? Obcaecati, expedita. Quidem in officia
          assumenda maiores voluptas itaque, ratione quaerat deleniti sit magni
          corporis nobis corrupti commodi inventore quo adipisci minus esse
          velit facilis ad, eaque autem nulla aliquid! Ea ad nam, natus dolores
          voluptatibus accusantium inventore doloremque cumque hic! Iusto,
          accusantium debitis blanditiis quos ex ipsum corrupti eos ab! Dicta,
          iure. Consequuntur reiciendis aperiam nesciunt nihil. Impedit,
          voluptatum. Ipsam amet, nulla, ea modi laudantium non mollitia earum,
          unde itaque maiores assumenda aspernatur cupiditate nobis cumque esse?
          Possimus aliquam beatae pariatur consequatur earum vero animi,
          reprehenderit aut necessitatibus corrupti. Nobis harum, ullam minus
          fugit voluptatem incidunt expedita ipsum ex hic ducimus eum autem
          porro possimus repudiandae sunt, rem laborum necessitatibus temporibus
          nihil sapiente voluptate cupiditate, optio asperiores facilis! Esse?
          Fugiat, expedita! Eligendi neque dolorem maiores exercitationem cumque
          maxime dignissimos, saepe quos possimus rem. Sequi quam nulla alias
          provident quidem itaque aliquid. Ipsum doloremque fugiat, explicabo ea
          animi ad rerum. Sapiente inventore facilis molestiae nulla repellat
          dolores itaque error tempora maxime. Ab alias cupiditate dignissimos
          atque eius dolore, temporibus nam nulla. Iusto alias corrupti sapiente
          accusantium officiis minima atque quos. Quod pariatur aut debitis
          itaque, molestiae accusamus dicta voluptatum odit, eum ab ut. Nesciunt
          sapiente blanditiis corporis numquam pariatur similique non, hic
          molestiae fugiat quaerat eveniet dolorum dicta et assumenda! Quae
          facilis a cupiditate, soluta velit ratione corporis natus dolorum
          voluptates ut nisi voluptatibus quod repellat pariatur asperiores.
          Ipsa fuga quo pariatur accusantium corrupti vel praesentium delectus
          eveniet nisi excepturi. Architecto nisi quisquam atque mollitia.
          Officiis, aliquid culpa aperiam ea fuga, ratione nihil rerum
          necessitatibus ab magni expedita. Et amet nihil enim! Quia doloribus
          perspiciatis ab qui numquam laborum hic? Omnis perferendis animi rerum
          beatae temporibus consequatur corrupti, ratione reprehenderit quos
          aliquid dolorum autem. Voluptatem, facilis? Pariatur iure nostrum
          quisquam molestiae impedit hic, nam corrupti quae quis amet corporis!
          Illum. Eveniet ipsam molestias, placeat quo doloribus rerum illo.
          Omnis excepturi at sed velit ratione exercitationem! Aliquam nostrum
          quaerat veniam maxime rerum officiis amet repellendus rem nam?
          Distinctio doloremque itaque perspiciatis. Aut eos libero facere rem
          dolorem reprehenderit omnis dignissimos minima harum quisquam voluptas
          iste odit est beatae iusto placeat delectus quod sint ratione illo
          soluta, ducimus eligendi. Facilis, optio dolor! Mollitia cupiditate
          eaque doloremque ipsa accusantium cumque, non odit officiis quia
          dolorem ad dolor consectetur laboriosam debitis. Quaerat odio,
          voluptas ratione magni natus, corporis, libero mollitia quod quidem
          consectetur obcaecati.
        </p>
      </div>
    </>
  );
};

export default About;
