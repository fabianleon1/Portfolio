import { CONTACT } from "../constants"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <h1 className="my-10 text-center text-4xl">Contact Me</h1>
        <div className="text-center tracking-tighter">

        <p className="my-4 ">{CONTACT.LinkedIn}</p>
        <p className="my-4"> {CONTACT.phoneNo}</p>
        <p className="my-4"> {CONTACT.address}</p>

        </div>
    </div>
  )
}

export default Contact
