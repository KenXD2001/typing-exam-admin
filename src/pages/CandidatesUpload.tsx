import { useState } from 'react';

const CandidateDataUpload = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]); // Set the file
    }
  };

  const handleSingleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle single candidate upload logic here
    console.log('Single candidate upload');
  };

  const handleBulkUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle bulk upload logic here
    console.log('Bulk candidate upload', file);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-8">Candidate Data Upload</h1>
      <div className="space-y-8">
        {/* Single Candidate Upload Card */}
        <div className="bg-white shadow-lg rounded-lg w-full border border-gray-300">
          <div className="bg-blue-600 text-white px-4 py-2 rounded-t-lg">
            <h2 className="text-xl font-semibold">Upload Single Candidate</h2>
          </div>
          <div className="p-4">
            <form onSubmit={handleSingleUploadSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Enter candidate name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Enter candidate email"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-4 mt-4">
                <button
                  type="reset"
                  className="bg-gray-300 text-gray-800 font-medium px-4 py-2 rounded-lg hover:bg-gray-400 focus:outline-none"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none"
                >
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bulk Upload CSV Card */}
        <div className="bg-white shadow-lg rounded-lg w-full border border-gray-300">
          <div className="bg-green-600 text-white px-4 py-2 rounded-t-lg">
            <h2 className="text-xl font-semibold">Bulk Upload Candidates (CSV)</h2>
          </div>
          <div className="p-4">
            <form onSubmit={handleBulkUploadSubmit}>
              <div className="mb-4">
                <label htmlFor="csv" className="block text-sm font-medium text-gray-700">CSV File</label>
                <input
                  type="file"
                  id="csv"
                  accept=".csv"
                  className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  onChange={handleFileChange}
                  required
                />
              </div>
              <div className="flex justify-end space-x-4 mt-4">
                <button
                  type="reset"
                  className="bg-gray-300 text-gray-800 font-medium px-4 py-2 rounded-lg hover:bg-gray-400 focus:outline-none"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="bg-green-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-green-700 focus:outline-none"
                >
                  Upload CSV
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateDataUpload;
