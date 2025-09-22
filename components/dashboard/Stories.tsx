'use client';

import { useState } from 'react';
import { ChevronUp, ChevronDown, Clock, Hash } from 'lucide-react';
import { stories } from '@/lib/mockData';
import type { Story } from '@/lib/mockData';
import { Button } from '@/components/ui/button';

export function Stories() {
  const [votes, setVotes] = useState<Record<string, { upvotes: number; downvotes: number; userVote?: 'up' | 'down' }>>({});

  const handleVote = (storyId: string, voteType: 'up' | 'down') => {
    setVotes(prev => {
      const current = prev[storyId] || { upvotes: 0, downvotes: 0 };
      const currentUserVote = current.userVote;

      // Remove previous vote if exists
      let newUpvotes = current.upvotes;
      let newDownvotes = current.downvotes;

      if (currentUserVote === 'up') {
        newUpvotes -= 1;
      } else if (currentUserVote === 'down') {
        newDownvotes -= 1;
      }

      // Add new vote if different from current
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
        [storyId]: {
          upvotes: newUpvotes,
          downvotes: newDownvotes,
          userVote: newUserVote,
        },
      };
    });
  };

  const getVoteCounts = (story: Story) => {
    const storyVotes = votes[story.id];
    return {
      upvotes: story.upvotes + (storyVotes?.upvotes || 0),
      downvotes: story.downvotes + (storyVotes?.downvotes || 0),
      userVote: storyVotes?.userVote,
    };
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
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <div className="p-4 border-b border-gray-700">
        <h3 className="text-xl font-bold text-white">Stories from the Ground</h3>
        <p className="text-gray-400 text-sm mt-1">
          Real experiences from Filipinos affected by the corruption scandal
        </p>
      </div>
      
      <div className="divide-y divide-gray-700 max-h-96 overflow-y-auto">
        {stories.map((story) => {
          const { upvotes, downvotes, userVote } = getVoteCounts(story);
          
          return (
            <div key={story.id} className="p-4 hover:bg-gray-800/50 transition-colors">
              <div className="flex space-x-3">
                {/* Voting Section */}
                <div className="flex flex-col items-center space-y-2 flex-shrink-0">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleVote(story.id, 'up')}
                    className={`p-1 h-auto ${
                      userVote === 'up' 
                        ? 'text-green-500 hover:text-green-400' 
                        : 'text-gray-400 hover:text-green-500'
                    }`}
                  >
                    <ChevronUp className="h-4 w-4" />
                  </Button>
                  
                  <div className="text-center">
                    <div className={`text-sm font-semibold ${
                      upvotes > downvotes ? 'text-green-500' : 
                      downvotes > upvotes ? 'text-red-500' : 'text-gray-300'
                    }`}>
                      {upvotes - downvotes}
                    </div>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleVote(story.id, 'down')}
                    className={`p-1 h-auto ${
                      userVote === 'down' 
                        ? 'text-red-500 hover:text-red-400' 
                        : 'text-gray-400 hover:text-red-500'
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </div>
                
                {/* Story Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="text-white font-semibold text-sm">
                      {story.title}
                    </h4>
                    <div className="flex items-center text-gray-400 text-xs">
                      <Clock className="h-3 w-3 mr-1" />
                      {formatTimeAgo(story.timestamp)}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    {story.content}
                  </p>
                  
                  {/* Hashtags */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    {story.hashtags.map((hashtag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-corruption-yellow/20 text-corruption-yellow border border-corruption-yellow/30"
                      >
                        <Hash className="h-3 w-3 mr-1" />
                        {hashtag.replace('#', '')}
                      </span>
                    ))}
                  </div>
                  
                  {/* Engagement Stats */}
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span>{upvotes} upvotes</span>
                    <span>•</span>
                    <span>{downvotes} downvotes</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Share Story CTA */}
      <div className="p-4 bg-gray-800 border-t border-gray-700">
        <Button className="w-full bg-corruption-red hover:bg-red-700 text-white">
          Share Your Story
        </Button>
      </div>
    </div>
  );
}
