const Resources = () => {
  return (
    <>
      <div className="flex flex-col">
        <button className="px-5 py-3 bg-brandGreen text-md text-white">
          Upload New
        </button>

        <h1>My Documents</h1>
        <div>
          <ul className="">
            <li className="bg-amber-50">Name</li>
            <li>My Resume 2025</li>
            <li>Summer Internship Cover Letter</li>
            <li>Unofficial Transcript</li>
            <li>CV for Spring Internship</li>
            <li>Project Case Study</li>
          </ul>
        </div>

        <h1>Shared With Me</h1>
      </div>
    </>
  );
};

export default Resources;
