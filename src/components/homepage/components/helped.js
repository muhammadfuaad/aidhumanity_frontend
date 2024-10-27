import Appeal_title from "./appeal_title";

function Helped({campaigns}) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between px-8 sm:px-48 pt-16 pb-20 sm:py-32  bg-f9">
      <div className="flex flex-col sm:w-[30%]">
        <p className="generic-heading mb-8 text-center sm:text-start">Who have<br></br> we helped?</p>
        <p className="generic-body text-center sm:text-start px-8 sm:px-0">We take pride in providing help to people around the world.</p>
      </div>
      <div className="w-full sm:w-[60%] flex gap-8 items-center flex-wrap">
          {campaigns.map((item)=> {
            const {name, image} =item
            return (
              <Appeal_title img={image} label={name} />
            )
          })}
          <p className="text-[1.6rem] font-medium tracking-[-0.24px] text-primary-dark">and much more…</p>
      </div>
    </div>
  );
}

export default Helped;