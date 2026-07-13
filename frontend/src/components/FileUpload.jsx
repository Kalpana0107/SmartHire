// FileUpload.jsx — Drag-and-drop resume uploader.
// Uses React state to track: drag state, selected file, upload status.

import React, { useState } from 'react';
import api from '../api/config';
import './FileUpload.css';

function FileUpload({ onUploadSuccess }) {
  // isDragging: true when user hovers a file over the drop zone
  const [isDragging, setIsDragging] = useState(false);

  // The chosen file
  const [file, setFile] = useState(null);

  // 'uploading', 'done', 'error'
  const [status, setStatus] = useState('');

  // Feedback for the user
  const [message, setMessage] = useState('');

  // Called when user drags a file over the zone.
  // Prevents browser's default behavior (opening the file).
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  // Called when user drops the file onto the zone
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const dropped = e.dataTransfer.files[0];

    // Only allow PDF files
    if (dropped && dropped.type === 'application/pdf') {
      setFile(dropped);
      setMessage(`Selected: ${dropped.name}`);
    } else {
      setMessage('Please upload a PDF file only.');
    }
  };

  // Called when user clicks the upload button
  const handleUpload = async () => {
    if (!file) {
      setMessage('No file selected!');
      return;
    }

    setStatus('uploading');

    // FormData is used for sending files.
    // 'resume' must match the Multer field name on the backend.
    const formData = new FormData();
    formData.append('resume', file);

    try {
      const response = await api.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setStatus('done');
      setMessage('Resume uploaded successfully!');

      // Notify parent component with backend response
      onUploadSuccess(response.data);
    } catch (err) {
      setStatus('error');
      setMessage('Upload failed. Is the backend running?');
    }
  };

  return (
    <div
      className={`drop-zone ${isDragging ? 'dragging' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <p>Drag &amp; Drop your resume PDF here</p>
      <p>— or —</p>

      {/* Fallback: regular file input */}
      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button
        onClick={handleUpload}
        disabled={status === 'uploading'}
      >
        {status === 'uploading' ? 'Uploading...' : 'Upload Resume'}
      </button>

      {message && (
        <p className={`msg ${status}`}>
          {message}
        </p>
      )}
    </div>
  );
}

export default FileUpload;