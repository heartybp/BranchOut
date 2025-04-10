import React, { useState } from "react";

const Resources = () => {
  const [viewMode, setViewMode] = useState("grid"); // 'list' or 'grid'
  const [expandedDropdown, setExpandedDropdown] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // replace placeholder later
  const resumeThumbnail = "/placeholder";

  const myDocuments = [
    {
      name: "My Resume 2025",
      type: "PDF",
      category: "Resume",
      visibility: "Public",
      uploadDate: "February 7, 2025",
      thumbnail: resumeThumbnail,
      link: "#",
    },
    {
      name: "Summer Internship Cover Letter",
      type: "PDF",
      category: "Letter",
      visibility: "Private",
      uploadDate: "January 26, 2025",
      thumbnail: resumeThumbnail,
      link: "#",
    },
    {
      name: "Unofficial Transcript",
      type: "JPEG",
      category: "Transcript",
      visibility: "Private",
      uploadDate: "January 8, 2025",
      thumbnail: resumeThumbnail,
      link: "#",
    },
    {
      name: "CV for Spring Internship",
      type: "PDF",
      category: "Resume",
      visibility: "Private",
      uploadDate: "November 24, 2024",
      thumbnail: resumeThumbnail,
      link: "#",
    },
    {
      name: "Project Case Study",
      type: "PPTX",
      category: "Presentation",
      visibility: "Public",
      uploadDate: "November 15, 2024",
      thumbnail: resumeThumbnail,
      link: "#",
    },
  ];

  const sharedWithMe = [
    {
      name: "Resources for Business Students",
      type: "PDF",
      category: "Document",
      visibility: "Public",
      uploadDate: "February 7, 2025",
      thumbnail: resumeThumbnail,
      link: "#",
    },
    {
      name: "Cover Letter Guide",
      type: "PPTX",
      category: "Presentation",
      visibility: "Private",
      uploadDate: "January 26, 2025",
      thumbnail: resumeThumbnail,
      link: "#",
    },
    {
      name: "List of Summer Internships",
      type: "DOCX",
      category: "Document",
      visibility: "Private",
      uploadDate: "January 8, 2025",
      thumbnail: resumeThumbnail,
      link: "#",
    },
  ];

  const totalPages = Math.ceil(myDocuments.length / itemsPerPage);
  const displayedDocuments = myDocuments.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col bg-gray-50 min-h-screen">
      {/* header with logo and search */}
      <div className="flex justify-between items-center p-4 bg-white border-b">
        <div className="flex items-center">
          {/* insert branch out brand image */}
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-80 py-2 px-4 border rounded-full bg-gray-100"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg
                className="h-5 w-5 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="text-gray-700">
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            <button className="text-gray-700">
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
            <button className="text-gray-700">
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* document header with view toggle and upload button */}
      <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-semibold">My Documents</h1>
        <div className="flex items-center gap-4">
          <div className="flex border rounded-full overflow-hidden">
            <button
              className={`p-2 ${
                viewMode === "list" ? "bg-gray-200" : "bg-white"
              }`}
              onClick={() => setViewMode("list")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button
              className={`p-2 ${
                viewMode === "grid" ? "bg-gray-200" : "bg-white"
              }`}
              onClick={() => setViewMode("grid")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
          </div>
          <button className="px-5 py-3 bg-green-800 text-white rounded">
            Upload New
          </button>
        </div>
      </div>

      {/* main content */}
      <div className="p-4">
        {viewMode === "list" ? (
          /* list View - My Documents Table */
          <div className="bg-white border rounded-md overflow-hidden mb-8">
            <table className="w-full">
              <thead>
                <tr className="bg-amber-50">
                  <th className="text-left p-4 font-semibold">Name</th>
                  <th className="text-left p-4 font-semibold">Type</th>
                  <th className="text-left p-4 font-semibold">Category</th>
                  <th className="text-left p-4 font-semibold">Visibility</th>
                  <th className="text-left p-4 font-semibold">Upload Date</th>
                </tr>
              </thead>
              <tbody>
                {displayedDocuments.map((doc, index) => (
                  <tr key={index} className="border-t">
                    <td className="p-4 text-blue-600">
                      <a href={doc.link}>{doc.name}</a>
                    </td>
                    <td className="p-4">{doc.type}</td>
                    <td className="p-4">{doc.category}</td>
                    <td className="p-4">{doc.visibility}</td>
                    <td className="p-4">{doc.uploadDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          /* grid View - My Documents Cards */
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {displayedDocuments.map((doc, index) => (
                <div
                  key={index}
                  className="bg-white border rounded-md overflow-hidden shadow-sm"
                >
                  <div className="relative group">
                    <img
                      src={doc.thumbnail}
                      alt={doc.name}
                      className="w-full h-64 object-cover border-b"
                    />
                    <button
                      className="absolute top-2 right-2 text-gray-700 bg-white rounded-full p-1 shadow-sm"
                      onClick={() =>
                        setExpandedDropdown(
                          expandedDropdown === index ? null : index
                        )
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {expandedDropdown === index && (
                      <div className="absolute top-10 right-2 bg-white shadow-md rounded-md z-10 w-40">
                        <ul className="py-1">
                          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            Download
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            Share
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            Rename
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600">
                            Delete
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium text-blue-600 truncate">
                      <a href={doc.link}>{doc.name}</a>
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Uploaded:{" "}
                      {doc.uploadDate.split(" ").slice(0, 2).join(" ")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* pagination */}
        <div className="flex justify-between gap-x-5 items-center p-4 rounded-md mb-8">
          <div className="text-sm text-gray-600">
            {`${(currentPage - 1) * itemsPerPage + 1}-${Math.min(
              currentPage * itemsPerPage,
              myDocuments.length
            )} of ${myDocuments.length}`}
          </div>

          <div className="flex gap-x-5">
            <div className="flex items-center space-x-1">
              <button
                className="px-2 py-1 border rounded"
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
              >
                &lt;&lt;
              </button>
              <button
                className="px-2 py-1 border rounded"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                &lt;
              </button>
              <div className="px-2 py-1">{currentPage}</div>
              <button
                className="px-2 py-1 border rounded"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                &gt;
              </button>
              <button
                className="px-2 py-1 border rounded"
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
              >
                &gt;&gt;
              </button>
            </div>
            <div className="flex items-center">
              <select
                className="border rounded p-1"
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
              >
                <option value={5}>5 per page</option>
                <option value={10}>10 per page</option>
                <option value={20}>20 per page</option>
              </select>
            </div>
          </div>
        </div>

        {/* Shared with me */}
        <h1 className="text-2xl font-semibold mb-4">Shared with me</h1>
        {viewMode === "list" ? (
          /* List View - Shared Documents Table */
          <div className="bg-white border rounded-md overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-amber-50">
                  <th className="text-left p-4 font-semibold">Name</th>
                  <th className="text-left p-4 font-semibold">Type</th>
                  <th className="text-left p-4 font-semibold">Category</th>
                  <th className="text-left p-4 font-semibold">Visibility</th>
                  <th className="text-left p-4 font-semibold">Upload Date</th>
                </tr>
              </thead>
              <tbody>
                {sharedWithMe.map((doc, index) => (
                  <tr key={index} className="border-t">
                    <td className="p-4 text-blue-600">
                      <a href={doc.link}>{doc.name}</a>
                    </td>
                    <td className="p-4">{doc.type}</td>
                    <td className="p-4">{doc.category}</td>
                    <td className="p-4">{doc.visibility}</td>
                    <td className="p-4">{doc.uploadDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          /* Grid View - Shared Documents Cards */
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {sharedWithMe.map((doc, index) => (
                <div
                  key={index}
                  className="bg-white border rounded-md overflow-hidden shadow-sm"
                >
                  <div className="relative group">
                    <img
                      src={doc.thumbnail}
                      alt={doc.name}
                      className="w-full h-64 object-cover border-b"
                    />
                    <button
                      className="absolute top-2 right-2 text-gray-700 bg-white rounded-full p-1 shadow-sm"
                      onClick={() =>
                        setExpandedDropdown(
                          expandedDropdown === `shared_${index}`
                            ? null
                            : `shared_${index}`
                        )
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {expandedDropdown === `shared_${index}` && (
                      <div className="absolute top-10 right-2 bg-white shadow-md rounded-md z-10 w-40">
                        <ul className="py-1">
                          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            Download
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            Share
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            Rename
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600">
                            Delete
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium text-blue-600 truncate">
                      <a href={doc.link}>{doc.name}</a>
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Uploaded:{" "}
                      {doc.uploadDate.split(" ").slice(0, 2).join(" ")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;
