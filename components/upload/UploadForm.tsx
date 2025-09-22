'use client';

import { useState } from 'react';
import { Upload, File } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { uploads } from '@/lib/mockData';

export function UploadForm() {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const files = Array.from(e.dataTransfer.files);
    setSelectedFiles((prev) => [...prev, ...files]);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setSelectedFiles((prev) => [...prev, ...files]);
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('Thanks! Your tip is ready to inspire justice. #LabanSaKatiwalian');
    setSelectedFiles([]);
    setTitle('');
    setDescription('');
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Upload Evidence
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            These are sample submissions to show how evidence sharing works. Your real uploads will be anonymous and reviewed for safety. No data is stored—join the fight against 3.3T peso corruption!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-900 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Share Your Evidence</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  dragActive
                    ? 'border-corruption-yellow bg-corruption-yellow/10'
                    : 'border-gray-600 hover:border-corruption-yellow/50'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-300 mb-2">Drop your files here or click to browse</p>
                <p className="text-sm text-gray-500 mb-4">Maximum file size: 5MB per file</p>
                <input
                  type="file"
                  multiple
                  accept="image/*,video/*,.pdf,.doc,.docx"
                  onChange={handleFileSelect}
                  className="hidden"
                  id="file-upload"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => document.getElementById('file-upload')?.click()}
                  className="border-corruption-yellow text-corruption-yellow hover:bg-corruption-yellow hover:text-corruption-dark"
                >
                  Choose Files
                </Button>
              </div>

              {selectedFiles.length > 0 && (
                <div className="space-y-2">
                  <Label className="text-white">Selected Files:</Label>
                  {selectedFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <File className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-300">{file.name}</span>
                        <span className="text-xs text-gray-500">
                          ({(file.size / (1024 * 1024)).toFixed(2)} MB)
                        </span>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFile(index)}
                        className="text-red-400 hover:text-red-300 p-1"
                      >
                        ×
                      </Button>
                    </div>
                  ))}
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="title" className="text-white">
                  Title <span className="text-corruption-red">*</span>
                </Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Brief description of the evidence"
                  className="bg-gray-800 border-gray-600 text-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-white">
                  Description
                </Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Provide context about this evidence..."
                  className="bg-gray-800 border-gray-600 text-white min-h-20"
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                disabled={selectedFiles.length === 0 || !title}
                className="w-full bg-corruption-red hover:bg-red-700 text-white"
              >
                Upload Evidence
              </Button>

              {message && <p className="text-green-500 text-sm text-center">{message}</p>}

              <div className="text-xs text-gray-500 text-center">
                <p>⚠️ Disclaimer: All uploads are reviewed for safety.</p>
                <p>Your submissions are anonymous and no data is stored.</p>
              </div>
            </form>
          </div>

          <div className="bg-gray-900 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Recent Evidence</h2>
            <div className="space-y-4">
              {uploads.map((upload) => (
                <div key={upload.id} className="bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <File className="h-4 w-4 text-gray-400" />
                    <h3 className="font-medium text-white text-sm">{upload.title}</h3>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">{upload.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400 mt-2">
                    <span>{upload.size}</span>
                    <span>{upload.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button
                variant="outline"
                className="border-corruption-yellow text-corruption-yellow hover:bg-corruption-yellow hover:text-corruption-dark"
              >
                View All Evidence
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
