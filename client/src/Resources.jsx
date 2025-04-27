import React, { useState } from "react";
import Upload from "./components/Upload";

const Resources = () => {
  const [viewMode, setViewMode] = useState("list"); // 'list' or 'grid'
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [showUpload, setShowUpload] = useState(false);

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
    <div className="flex flex-col bg-white min-h-screen">
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
          <button className="px-5 py-3 bg-green-800 text-white rounded" onClick={() => setShowUpload(true)}  // <--- Add this line!
            >
              Upload New
          </button>
        </div>
      </div>

      <div className="p-4">
  {/* --- LIST VIEW FOR BOTH SECTIONS --- */}
  {viewMode === "list" && (
    <>
      {/* My Documents List */}
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
          {/* ...pagination code here... */}
        </div>
      </div>

      {/* Shared with me List */}
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
    </>
  )}

  {/* --- GRID VIEW FOR BOTH SECTIONS --- */}
  {viewMode === "grid" && (
    <>
      {/* My Documents Grid */}
      <div className="bg-white border rounded-md overflow-hidden mb-8">
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {displayedDocuments.map((doc, index) => (
            <div key={index} className="rounded-xl bg-[#f7f2ea] p-4 shadow flex flex-col justify-between min-h-[200px]">
              <div className="font-bold mb-2">{doc.name}</div>
              <div className="flex-1 flex items-center justify-center">
                <img src="/file-icon.png" alt={doc.type} className="w-full h-24 object-contain mb-2" />
              </div>
              <div className="text-xs text-gray-600 mb-1">Type: {doc.type}</div>
              <div className="text-xs text-gray-600 mb-1">Category: {doc.category}</div>
              <div className="text-xs text-gray-600 mb-1">Visibility: {doc.visibility}</div>
              <div className="text-xs text-gray-500">Uploaded: {doc.uploadDate}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Shared with me Grid */}
      <h1 className="text-2xl font-semibold mb-4">Shared with me</h1>
      <div className="bg-white border rounded-md overflow-hidden">
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {sharedWithMe.map((doc, index) => (
            <div key={index} className="rounded-xl bg-[#f7f2ea] p-4 shadow flex flex-col justify-between min-h-[200px]">
              <div className="font-bold mb-2">{doc.name}</div>
              <div className="flex-1 flex items-center justify-center">
                <img src="/file-icon.png" alt={doc.type} className="w-full h-24 object-contain mb-2" />
              </div>
              <div className="text-xs text-gray-600 mb-1">Type: {doc.type}</div>
              <div className="text-xs text-gray-600 mb-1">Category: {doc.category}</div>
              <div className="text-xs text-gray-600 mb-1">Visibility: {doc.visibility}</div>
              <div className="text-xs text-gray-500">Uploaded: {doc.uploadDate}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )}
</div>
      <Upload show={showUpload} onClose={() => setShowUpload(false)} />
    </div>
  );
};

export default Resources;
