import React from 'react'
import Navbar from './Navbar'
import WheatherApp from './WheatherApp'

const Tempbox = (c) => {
  let a = c.props;
  let j = c.op;
  return (
    <div className="min-w-100 sm:min-w-[60vw] bg-[#adadad32] m-auto rounded-2xl ">
      <Navbar props={a} io={j} />
      <WheatherApp />
     
    </div>
  );
}

export default Tempbox
