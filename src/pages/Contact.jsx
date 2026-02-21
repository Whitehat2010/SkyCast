import { useState,useRef} from "react";
import { Link } from "react-router-dom";
import ExtraNav from "../components/ExtraNav";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [openbar, setopenbar] = useState(false);
  function openSidebar() {
    if (openbar === true) setopenbar(false);
    else setopenbar(true);
  }
   const form = useRef();
   const [Emailvalue, setEmailvalue] = useState("");
   const [Messagevalue, setMessagevalue] = useState("");
   const [Namevalue, setNamevalue] = useState("");
   const [Subjectvalue, setSubjectvalue] = useState("");
   const sendEmail = (e) => {
     e.preventDefault();
     if (
       Emailvalue === " " ||
       Namevalue === " " ||
       Subjectvalue === " " ||
       Messagevalue === " " ||
       Emailvalue === "" ||
       Namevalue === "" ||
       Subjectvalue === "" ||
       Messagevalue === ""
     ) {
       if (Emailvalue == "") confirm("Enter Email");
       else if (Namevalue == "") confirm("Enter Name");
       else if (Subjectvalue == "") confirm("Enter Subject");
       else confirm("Enter Message");
     } else {
       emailjs
         .sendForm("service_p091xmp", "template_6xa5g3m", form.current, {
           publicKey: "HZuHY2w83JKddFRM-",
         })
         .then(
           () => {
             confirm("SUCCESS!");
           },
           () => {
             confirm("FAILED... Try Again");
           },
         );
     }
   };
  return (
    <div>
      <ExtraNav a={openSidebar} b={openbar} />
      <div
        className={`${openbar ? "min-h-[20vh] w-full bg-[#303237] translate-y-0 transition-all absolute z-10 left-0 right-0" : "translate-y-[-200%] transition-all fixed z-10 left-0 right-0"}`}
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
      <div className=" flex flex-col gap-10 pt-10" id="Contact">
        <div className="text-center text-3xl font-medium">
          <h2 className="text-white">Contact Us</h2>
        </div>
        <div className=" w-full sm:w-[65%] m-auto flex min-h-125 p-2 border-2 border-white rounded-2xl bg-[#adadad6e]">
          <div className="bg-[linear-gradient(90deg, rgba(26, 25, 25, 1) 0%,rgba(0, 0, 0, 1) 100%)] w-full h-full rounded-r-2xl ">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="h-full w-[95%] m-auto"
            >
              <div className="block sm:flex justify-between  pt-7 w-full ">
                <div className="w-full">
                  <label className="text-[13px] font-light">Name:</label>
                  <br />
                  <input
                    type="text"
                    name="name"
                    className="border-amber-50 border-2  w-full sm:min-w-[18vw] focus:border-[#09c8b6] ease-in-out outline-none duration-200  pb-3 pt-1"
                    placeholder="Enter Your Name"
                    value={Namevalue}
                    onChange={(e) => {
                      setNamevalue(e.target.value);
                    }}
                  />
                </div>
                <div className="w-full sm:ml-3">
                  <label className="text-[13px] font-light">Subject:</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Subject??"
                    className="border-amber-50 border-2 w-full focus:border-[#09c8b6] ease-in-out outline-none duration-200 pb-3 pt-1"
                    value={Subjectvalue}
                    onChange={(e) => {
                      setSubjectvalue(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  className="border-amber-50 border-2 w-full pt-0.5 pb-4 focus:border-[#09c8b6] ease-in-out outline-none duration-200"
                  placeholder="Enter Your Email Address"
                  value={Emailvalue}
                  onChange={(e) => {
                    setEmailvalue(e.target.value);
                  }}
                />
              </div>
              <div>
                <label>Message:</label>
                <textarea
                  name="message"
                  className="border-amber-50 border-2 resize-none w-full min-h-[20vh] focus:border-[#09c8b6] ease-in-out outline-none duration-200"
                  placeholder="Enter You Message"
                  value={Messagevalue}
                  onChange={(e) => {
                    setMessagevalue(e.target.value);
                  }}
                />
              </div>

              <input
                type="submit"
                value="Send"
                className="p-2.5 bg-amber-500 text-white rounded-md w-full"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
