import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";

const Resources = () => {
  const [viewMode, setViewMode] = useState("list"); // 'list' or 'grid'
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const myDocuments = [
    {
      name: "My Resume 2025",
      type: "PDF",
      category: "Resume",
      visibility: "Public",
      uploadDate: "February 7, 2025",
      link: "#",
    },
    {
      name: "Summer Internship Cover Letter",
      type: "PDF",
      category: "Letter",
      visibility: "Private",
      uploadDate: "January 26, 2025",
      link: "#",
    },
    {
      name: "Unofficial Transcript",
      type: "JPEG",
      category: "Transcript",
      visibility: "Private",
      uploadDate: "January 8, 2025",
      link: "#",
    },
    {
      name: "CV for Spring Internship",
      type: "PDF",
      category: "Resume",
      visibility: "Private",
      uploadDate: "November 24, 2024",
      link: "#",
    },
    {
      name: "Project Case Study",
      type: "PPTX",
      category: "Presentation",
      visibility: "Public",
      uploadDate: "November 15, 2024",
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
      link: "#",
    },
    {
      name: "Cover Letter Guide",
      type: "PPTX",
      category: "Presentation",
      visibility: "Private",
      uploadDate: "January 26, 2025",
      link: "#",
    },
    {
      name: "List of Summer Internships",
      type: "DOCX",
      category: "Document",
      visibility: "Private",
      uploadDate: "January 8, 2025",
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
    <div className="flex max-h-screen">
      <Navbar />
      <div className="flex flex-col bg-white w-full overflow-y-scroll">
        {/* header with upload button */}
        <div className="flex justify-between items-center p-4 bg-white">
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

        <div className="p-4">
          {/* My Documents Table */}
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

            {/* Pagination */}
            <div className="flex justify-between items-center p-4 bg-white border-t">
              <div className="text-sm text-gray-600">
                {`${(currentPage - 1) * itemsPerPage + 1}-${Math.min(
                  currentPage * itemsPerPage,
                  myDocuments.length
                )} of ${myDocuments.length}`}
              </div>
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
        </div>
      </div>
    </div>
  );
};

export default Resources;
