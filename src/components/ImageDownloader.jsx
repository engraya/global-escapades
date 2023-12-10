import React from 'react'
import { RiDownloadCloud2Fill } from "react-icons/ri";

function ImageDownloader({ imageUrl, filename }) {
    const handleDownloadFunc = () => {
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = filename || 'downloaded-image';
        link.click();
    }

  return (
    <div>
    <button onClick={handleDownloadFunc}><RiDownloadCloud2Fill /></button>
    </div>
  )
}

export default ImageDownloader
