import React, { memo } from 'react';
import './css/mainpf.css';

const InfoRow = ({ label, children }) => (
  <div className='bg-slate-800/50 rounded-lg p-4 border border-purple-500/30 hover:border-cyan-400/50 transition-all duration-300'>
    <p className='text-purple-300 text-sm font-semibold uppercase tracking-wide'>{label}</p>
    <p className='text-white text-lg font-bold mt-1'>{children}</p>
  </div>
);

const ProfileCard = memo(function ProfileCard() {
  return (
    <div className="profile-box w-1/4 bg-gradient-to-br from-purple-900/40 via-slate-900/60 to-slate-950 rounded-2xl shadow-2xl border border-purple-500/40 backdrop-blur-xl p-8 overflow-y-auto max-h-screen">
      <div className="profile-header mb-8">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400" id='hello'>
          Welcome to your <br /><span className='text-cyan-400 mt-2'>Profile</span> NIGGA
        </h2>
      </div>

      <div className="profile-content">
        <div className='text-center mb-8'>
          <div className="relative w-40 h-40 mx-auto mb-6">
            <img
              src="https://images.unsplash.com/photo-1535713566543-0c17193e5798?w=200&q=80"
              alt="Profile"
              className='rounded-full border-4 border-cyan-400/50 w-full h-full object-cover shadow-lg shadow-cyan-400/30'
            />
            <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 rounded-full border-4 border-slate-950" />
          </div>
        </div>

        <div className='space-y-4 mb-8'>
          <InfoRow label="Name">John Doe</InfoRow>
          <InfoRow label="User ID"><span className='text-cyan-400 font-mono'>AXSAK3829HG0</span></InfoRow>
          <InfoRow label="Email"><span className='text-white text-sm break-all'>john.doe@example.com</span></InfoRow>
          <InfoRow label="Status"><span className='text-green-400 text-sm font-semibold'>🟢 Online</span></InfoRow>
        </div>

        <div className='space-y-3'>
          <button className='w-full py-2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300'>
            Edit Profile
          </button>
          <button className='w-full py-2 bg-slate-700/60 border border-purple-500/40 text-purple-300 font-semibold rounded-lg hover:bg-slate-600 hover:border-cyan-400/60 transition-all duration-300'>
            Settings
          </button>
          <button className='w-full py-2 bg-slate-700/60 border border-red-500/40 text-red-300 font-semibold rounded-lg hover:bg-slate-600 hover:border-red-400/60 transition-all duration-300'>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
});

const ChatHeader = () => (
  <div className="chat-header bg-gradient-to-r from-purple-900/40 via-slate-900/60 to-slate-950 rounded-2xl shadow-xl border border-purple-500/40 backdrop-blur-xl p-6">
    <div className='flex items-center justify-between'>
      <div>
        <h2 className="text-3xl font-bold text-white">Yolo Chat</h2>
        <p className="text-purple-300 text-sm mt-1">👥 5 members online</p>
      </div>
      <div className='flex gap-3'>
        <button className='px-4 py-2 bg-purple-600/60 hover:bg-purple-500 text-white rounded-lg transition-all duration-300'>📞 Call</button>
        <button className='px-4 py-2 bg-slate-700/60 hover:bg-slate-600 text-white rounded-lg transition-all duration-300'>⚙️ Info</button>
      </div>
    </div>
  </div>
);

const MessageItem = ({ author, text, variant = 'other' }) => {
  if (variant === 'me') {
    return (
      <div className='flex gap-3 justify-end'>
        <div>
          <p className='text-cyan-400 text-sm font-semibold text-right'>You</p>
          <div className='bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg px-4 py-2 mt-1'>
            <p className='text-white'>{text}</p>
          </div>
        </div>
        <div className='w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold flex-shrink-0'>JD</div>
      </div>
    );
  }
  return (
    <div className='flex gap-3'>
      <div className='w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold flex-shrink-0'>
        {author?.[0] ?? 'U'}
      </div>
      <div>
        <p className='text-purple-300 text-sm font-semibold'>{author}</p>
        <div className='bg-slate-800/60 rounded-lg px-4 py-2 mt-1 border border-purple-500/30'>
          <p className='text-white'>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default function MainProfile() {
  return (
    <div className="main-container flex min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 gap-6 p-6">
      {/* Profile Box - Left Sidebar */}
      <ProfileCard />

      {/* Chat Room - Right Side */}
      <div className="chat-container w-3/4 flex flex-col gap-6">
        <ChatHeader />

        <div className="chat-messages flex-1 bg-gradient-to-br from-purple-900/20 via-slate-900/60 to-slate-950 rounded-2xl shadow-xl border border-purple-500/40 backdrop-blur-xl p-6 overflow-y-auto">
          <div className='space-y-4'>
            <MessageItem author="Alice" text="Hey everyone! How's it going?" />
            <MessageItem author="You" text="Doing great! Ready to chat 🚀" variant="me" />
            <MessageItem author="Bob" text="Let's get this started!" />
          </div>
        </div>

        <div className="chat-input bg-gradient-to-r from-purple-900/40 via-slate-900/60 to-slate-950 rounded-2xl shadow-xl border border-purple-500/40 backdrop-blur-xl p-4">
          <div className='flex gap-3'>
            <input
              type="text"
              placeholder="Type your message..."
              className='flex-1 px-4 py-3 bg-slate-800/60 border border-purple-500/40 rounded-lg text-white placeholder-purple-400/60 focus:outline-none focus:border-cyan-400/80 focus:ring-2 focus:ring-cyan-400/30 transition-all duration-200'
            />
            <button className='px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300'>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}