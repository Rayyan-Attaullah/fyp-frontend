"use client"

import { useState } from "react"
import { ChevronRight, Upload } from "lucide-react"

export default function Component() {
  const [page, setPage] = useState(1)
  const [cancerType, setCancerType] = useState("")
  const [image, setImage] = useState(null)

  const handleNextPage = () => {
    if (cancerType) {
      setPage(2)
    }
  }

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  const handleSubmit = () => {
    if (image) {
      console.log("Submitting image for", cancerType)
      // Here you would typically send the image to your server
      alert(`Image for ${cancerType} submitted successfully!`)
    }
  }

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">Cancer Image Analysis</h1>
        {page === 1 ? (
          <div className="space-y-4">
            <label htmlFor="cancer-type" className="block text-sm font-medium text-gray-700">
              Select Cancer Type
            </label>
            <select
              id="cancer-type"
              value={cancerType}
              onChange={(e) => setCancerType(e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            >
              <option value="">Select a type</option>
              <option value="skin">Skin Cancer</option>
              <option value="breast">Breast Cancer</option>
              <option value="lung">Lung Cancer</option>
            </select>
            <button
              onClick={handleNextPage}
              disabled={!cancerType}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Upload {cancerType} Cancer Image</h2>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-10 h-10 mb-3 text-gray-400" />
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" onChange={handleImageUpload} accept="image/*" />
              </label>
            </div>
            {image && <p className="text-sm text-gray-500">File selected: {image.name}</p>}
            <button
              onClick={handleSubmit}
              disabled={!image}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit
            </button>
            <button
              onClick={() => setPage(1)}
              className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Back
            </button>
          </div>
        )}
      </div>
    </div>
  )
}