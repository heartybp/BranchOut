// // Upload.jsx
// import React, { useState } from "react";

// export default function Upload({ show, onClose }) {
//   if (!show) return null;

//   const DOC_TYPES = ["pdf", "jpeg", "png", "docx", "pptx", "txt"];
//   const [docType, setDocType] = useState(DOC_TYPES[0]);

//   // maps each docType to the proper accept string
//   const ACCEPT_MAP = {
//     pdf: ".pdf",
//     jpeg: ".jpeg,.jpg", // accepts both!
//     png: ".png",
//     docx: ".docx",
//     pptx: ".pptx",
//     txt: ".txt",
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg w-full max-w-xl p-8 space-y-6">
//         <h1 className="text-3xl font-bold">File Upload</h1>

//         {/* Document File (now restricted to the selected type) */}
//         <div className="space-y-1">
//           <label htmlFor="file" className="block font-medium">
//             Document File
//           </label>
//           <input
//             id="file"
//             type="file"
//             accept={ACCEPT_MAP[docType]}
//             className="hidden"
//             onChange={e => {
//               const file = e.target.files?.[0];
//               if (file) {
//                 const ext = file.name.split(".").pop().toLowerCase();
//                 if (!DOC_TYPES.includes(ext)) {
//                   alert(`Only .${docType} files allowed!`);
//                   e.target.value = "";
//                 } else {
//                   // sync dropdown to picked file
//                   setDocType(ext);
//                 }
//               }
//             }}
//           />
//           <label
//             htmlFor="file"
//             className="block w-full border border-gray-300 rounded-md bg-white hover:bg-gray-50 text-center py-3 cursor-pointer"
//           >
//             {`Choose File${docType ? ` (${docType.toUpperCase()})` : ""}`}
//           </label>
//         </div>

//         {/* Name */}
//         <div className="space-y-1">
//           <label htmlFor="name" className="block font-medium">
//             Name
//           </label>
//           <input
//             id="name"
//             type="text"
//             className="block w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-green-200"
//             placeholder="Enter document name"
//           />
//         </div>

//         {/* Dynamic Document Type */}
//         <div className="space-y-1">
//           <label htmlFor="type" className="block font-medium">
//             Document Type
//           </label>
//           <select
//             id="type"
//             value={docType}
//             onChange={e => setDocType(e.target.value)}
//             className="block w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-green-200 appearance-none bg-white"
//           >
//             {DOC_TYPES.map(ext => (
//               <option key={ext} value={ext}>
//                 {ext.toUpperCase()}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Visibility */}
//         <div className="space-y-1">
//           <span className="block font-medium">Visibility</span>
//           <label className="inline-flex items-center border border-gray-300 rounded-md px-4 py-2 cursor-pointer">
//             <span>Private</span>
//             <input
//               type="checkbox"
//               className="ml-3 form-checkbox h-5 w-5 text-green-600"
//             />
//           </label>
//         </div>

//         {/* Description */}
//         <div className="space-y-1">
//           <label htmlFor="desc" className="block font-medium">
//             Description
//           </label>
//           <textarea
//             id="desc"
//             rows={4}
//             className="block w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-green-200"
//             placeholder="Add a brief description…"
//           />
//         </div>

//         {/* Buttons */}
//         <div className="flex justify-end space-x-4 pt-4 border-t">
//           <button
//             onClick={onClose}
//             className="px-6 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
//           >
//             Cancel
//           </button>
//           <button className="px-6 py-2 bg-green-700 text-white rounded-md hover:bg-green-800">
//             Save
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// Upload.jsx
import React, { useState } from "react";

export default function Upload({ show, onClose, onSave }) {
  if (!show) return null;

  const DOC_TYPES = ["pdf", "jpeg", "png", "docx", "pptx", "txt"];
  const [docType, setDocType] = useState(DOC_TYPES[0]);
  const [documentName, setDocumentName] = useState(""); // Add state for document name

  // maps each docType to the proper accept string
  const ACCEPT_MAP = {
    pdf: ".pdf",
    jpeg: ".jpeg,.jpg", // accepts both!
    png: ".png",
    docx: ".docx",
    pptx: ".pptx",
    txt: ".txt",
  };

  // handle save button click
  const handleSave = () => {
    // pass document details to parent
    if (onSave) {
      onSave({
        name: documentName || `Untitled ${docType.toUpperCase()}`,
        type: docType,
      });
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-xl p-8 space-y-6">
        <h1 className="text-3xl font-bold">File Upload</h1>

        {/* doc file */}
        <div className="space-y-1">
          <label htmlFor="file" className="block font-medium">
            Document File
          </label>
          <input
            id="file"
            type="file"
            accept={ACCEPT_MAP[docType]}
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                const ext = file.name.split(".").pop().toLowerCase();
                if (!DOC_TYPES.includes(ext)) {
                  alert(`Only .${docType} files allowed!`);
                  e.target.value = "";
                } else {
                  // sync dropdown to picked file
                  setDocType(ext);
                  // use file name w/o extension as default document name
                  const fileName = file.name.split(".").slice(0, -1).join(".");
                  setDocumentName(fileName);
                }
              }
            }}
          />
          <label
            htmlFor="file"
            className="block w-full border border-gray-300 rounded-md bg-white hover:bg-gray-50 text-center py-3 cursor-pointer"
          >
            {`Choose File${docType ? ` (${docType.toUpperCase()})` : ""}`}
          </label>
        </div>

        {/* Name */}
        <div className="space-y-1">
          <label htmlFor="name" className="block font-medium">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={documentName}
            onChange={(e) => setDocumentName(e.target.value)}
            className="block w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-green-200"
            placeholder="Enter document name"
          />
        </div>

        {/* Dynamic Document Type */}
        <div className="space-y-1">
          <label htmlFor="type" className="block font-medium">
            Document Type
          </label>
          <select
            id="type"
            value={docType}
            onChange={(e) => setDocType(e.target.value)}
            className="block w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-green-200 appearance-none bg-white"
          >
            {DOC_TYPES.map((ext) => (
              <option key={ext} value={ext}>
                {ext.toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        {/* Visibility */}
        <div className="space-y-1">
          <span className="block font-medium">Visibility</span>
          <label className="inline-flex items-center border border-gray-300 rounded-md px-4 py-2 cursor-pointer">
            <span>Private</span>
            <input
              type="checkbox"
              className="ml-3 form-checkbox h-5 w-5 text-green-600"
            />
          </label>
        </div>

        {/* Description */}
        <div className="space-y-1">
          <label htmlFor="desc" className="block font-medium">
            Description
          </label>
          <textarea
            id="desc"
            rows={4}
            className="block w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-green-200"
            placeholder="Add a brief description…"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4 pt-4 border-t">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-green-700 text-white rounded-md hover:bg-green-800"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
