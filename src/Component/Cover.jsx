

const Cover = ({img,title,disc}) => {
    return (
        <div className="hero h-[50vh]" >
      <img className="w-full h-[50vh]" src={img} alt="" />
      <div className="hero-overlay bg-black bg-opacity-60 h-[50vh]"></div>
      <div className=" text-neutral-content">
        <div className="px-5 md:px-44 ">
          <h1 className="mb-5 text-5xl font-bold">{title}</h1>
          <p className="mb-5 mt-5">{disc}</p>
        </div>
      </div>
    </div>
    );
};

export default Cover;