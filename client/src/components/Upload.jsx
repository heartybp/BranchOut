// src/components/UploadModal.js
import React from "react";

export default function UploadModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white p-10 rounded-xl w-[60vw] shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl font-bold"
        >
          ×
        </button>
        <h1 className="text-3xl font-semibold mb-6">File Upload</h1>
        {/* upload form below */}
        {/* example fields: */}
        <form>
          <div className="mb-4">
            <label className="block mb-1">Document File</label>
            <input type="file" className="w-full border p-2 rounded" />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Name</label>
            <input type="text" className="w-full border p-2 rounded" />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Document Type</label>
            <select className="w-full border p-2 rounded">
              <option>Resume</option>
              <option>Letter</option>
              <option>Transcript</option>
              <option>Presentation</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-1">Visibility</label>
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Private</span>
            </label>
          </div>
          <div className="mb-4">
            <label className="block mb-1">Description</label>
            <textarea className="w-full border p-2 rounded" rows={4}></textarea>
          </div>
          <div className="flex justify-end gap-4">
            <button type="button" onClick={onClose} className="px-6 py-2 border rounded">
              Cancel
            </button>
            <button type="submit" className="px-6 py-2 bg-green-800 text-white rounded">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
