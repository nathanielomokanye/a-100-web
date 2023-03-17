import React from "react";

export default function Connect() {
  return (
    <div className='px-6 py-32  w-full'>
      <div
        style={{ backgroundImage: "url(/assets/connect.png)" }}
        className='bg-cover bg-no-repeat w-full px-6 py-10'
      >
        <div>
          <h1 className='font-bold text-2xl'>Let's Connect</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            quia consequatur saepe ratione facere tenetur nostrum dolores enim
            non optio perferendis, voluptates iste dicta a cum fuga pariatur
            reiciendis rerum?
          </p>
        </div>
        <div>
          <input type='text' name='send' placeholder='Enter Email Address' />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}
