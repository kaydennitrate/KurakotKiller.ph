'use client';

import { useState } from 'react';
import { Upload, File, Image, Video, CheckCircle, Clock, XCircle, ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { uploads } from '@/lib/mockData';
import type { Upload as UploadType } from '@/lib/mockData';

export function UploadForm() {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [votes, setVotes] = useState<Record<string, { upvotes: number; downvotes: number; userVote?: 'up' | 'down' }>>({});

  const handleVote = (uploadId: string, voteType: 'up' | 'down') => {
    setVotes(prev => {
      const current = prev[uploadId] || { upvotes: 0, downvotes: 0 };
      const currentUserVote = current.userVote;

      let newUpvotes = current.upvotes;
      let newDownvotes = current.downvotes;

      if (currentUserVote === 'up') {
        newUpvotes -= 1;
      } else if (currentUserVote === 'down') {
        newDownvotes -= 1;
      }

      let newUserVote: 'up' | 'down' | undefined;
      if (voteType !== currentUserVote) {
        if (voteType === 'up') {
          newUpvotes += 1;
        } else {
          newDownvotes += 1;
        }
        newUserVote = voteType;
      }

      return {
        ...prev,
        [uploadId]: {
          upvotes: newUpvotes,
          downvotes: newDownvotes,
          userVote: newUserVote,
        },
      };
    });
  };

  const getVoteCounts = (upload: UploadType) => {
    const uploadVotes = votes[upload.id];
    return {
      upvotes: upload.upvotes + (uploadVotes?.upvotes || 0),
      downvotes: upload.downvotes + (uploadVotes?.downvotes || 0),
      userVote: uploadVotes?.userVote,
    };
  };

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
    setSelectedFiles(prev => [...prev, ...files]);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setSelectedFiles(prev => [...prev, ...files]);
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    alert('Evidence submitted successfully! Our team will review it for authenticity.');
    setSelectedFiles([]);
    setTitle('');
    setDescription('');
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'photo':
        return <Image className="h-4 w-4" />;
      case 'video':
        return <Video className="h-4 w-4" />;
      case 'document':
        return <File className="h-4 w-4" />;
      default:
        return <File className="h-4 w-4" />;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'rejected':
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d ago`;
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Upload Evidence
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Help expose corruption by sharing documents, photos, or videos. 
            All uploads are reviewed for authenticity before publication.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Form */}
          <div className="bg-gray-900 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Share Your Evidence</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* File Upload Area */}
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
                <p className="text-gray-300 mb-2">
                  Drop your files here or click to browse
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  Maximum file size: 5MB per file
                </p>
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

              {/* Selected Files */}
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

              {/* Title */}
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

              {/* Description */}
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

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={selectedFiles.length === 0 || !title}
                className="w-full bg-corruption-red hover:bg-red-700 text-white"
              >
                Upload Evidence
              </Button>

              <div className="text-xs text-gray-500 text-center">
                <p>⚠️ Disclaimer: All uploads are reviewed for authenticity.</p>
                <p>False evidence may result in account suspension.</p>
              </div>
            </form>
          </div>

          {/* Recent Uploads */}
          <div className="bg-gray-900 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Recent Evidence</h2>
            
            <div className="space-y-4">
              {uploads.map((upload) => {
                const { upvotes, downvotes, userVote } = getVoteCounts(upload);
                
                return (
                  <div key={upload.id} className="bg-gray-800 rounded-lg p-4">
                    <div className="flex space-x-3">
                      {/* Voting Section */}
                      <div className="flex flex-col items-center space-y-1 flex-shrink-0">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleVote(upload.id, 'up')}
                          className={`p-1 h-auto ${
                            userVote === 'up' 
                              ? 'text-green-500 hover:text-green-400' 
                              : 'text-gray-400 hover:text-green-500'
                          }`}
                        >
                          <ChevronUp className="h-4 w-4" />
                        </Button>
                        
                        <div className="text-center">
                          <div className={`text-xs font-semibold ${
                            upvotes > downvotes ? 'text-green-500' : 
                            downvotes > upvotes ? 'text-red-500' : 'text-gray-300'
                          }`}>
                            {upvotes - downvotes}
                          </div>
                        </div>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleVote(upload.id, 'down')}
                          className={`p-1 h-auto ${
                            userVote === 'down' 
                              ? 'text-red-500 hover:text-red-400' 
                              : 'text-gray-400 hover:text-red-500'
                          }`}
                        >
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Upload Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            {getFileIcon(upload.type)}
                            <h3 className="font-medium text-white text-sm">
                              {upload.title}
                            </h3>
                          </div>
                          <div className="flex items-center space-x-1">
                            {getStatusIcon(upload.status)}
                            <span className={`text-xs capitalize ${
                              upload.status === 'verified' ? 'text-green-500' :
                              upload.status === 'pending' ? 'text-yellow-500' :
                              'text-red-500'
                            }`}>
                              {upload.status}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between text-xs text-gray-400">
                          <span>{upload.size}</span>
                          <span>{formatTimeAgo(upload.timestamp)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
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
