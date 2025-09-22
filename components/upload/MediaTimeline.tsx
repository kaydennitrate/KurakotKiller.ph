'use client';

import { ExternalLink, Heart, MessageCircle, Repeat2, Eye } from 'lucide-react';
import { mediaTimeline } from '@/lib/mockData';

export function MediaTimeline() {
  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'x':
        return (
          <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">𝕏</span>
          </div>
        );
      case 'tiktok':
        return (
          <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">TT</span>
          </div>
        );
      default:
        return (
          <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">?</span>
          </div>
        );
    }
  };

  const formatEngagement = (platform: string, engagement: string) => {
    if (platform === 'TikTok') {
      return (
        <div className="flex items-center space-x-4 text-xs text-gray-400">
          <div className="flex items-center space-x-1">
            <Eye className="h-3 w-3" />
            <span>15.2K</span>
          </div>
          <div className="flex items-center space-x-1">
            <Repeat2 className="h-3 w-3" />
            <span>892</span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex items-center space-x-4 text-xs text-gray-400">
          <div className="flex items-center space-x-1">
            <Repeat2 className="h-3 w-3" />
            <span>{engagement.split(',')[0].replace('retweets', '').trim()}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Heart className="h-3 w-3" />
            <span>{engagement.split(',')[1].replace('likes', '').trim()}</span>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <div className="p-4 border-b border-gray-700">
        <h3 className="text-xl font-bold text-white">Media Timeline</h3>
        <p className="text-gray-400 text-sm mt-1">
          Latest posts and updates about the corruption scandal
        </p>
      </div>
      
      <div className="divide-y divide-gray-700">
        {mediaTimeline.map((post) => (
          <div key={post.id} className="p-4 hover:bg-gray-800/50 transition-colors">
            <div className="flex space-x-3">
              {/* Platform Icon */}
              <div className="flex-shrink-0 mt-1">
                {getPlatformIcon(post.platform)}
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-corruption-yellow font-semibold text-sm">
                    {post.username}
                  </span>
                  <span className="text-gray-500 text-xs">•</span>
                  <span className="text-gray-400 text-xs">
                    {post.timestamp}
                  </span>
                  <ExternalLink className="h-3 w-3 text-gray-400 hover:text-corruption-yellow cursor-pointer" />
                </div>
                
                <p className="text-gray-200 text-sm leading-relaxed mb-3">
                  {post.content}
                </p>
                
                {/* Engagement Stats */}
                {formatEngagement(post.platform, post.engagement)}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* View More */}
      <div className="p-4 bg-gray-800 border-t border-gray-700">
        <button className="w-full text-center text-corruption-yellow hover:text-yellow-300 transition-colors text-sm font-medium">
          View More Posts →
        </button>
      </div>
    </div>
  );
}