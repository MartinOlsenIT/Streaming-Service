export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#141414] text-white">
      <h1 className="text-6xl font-bold text-[#E50914] tracking-tighter">MARTINFLIX</h1>
      <p className="mt-4 text-gray-400 text-lg">Your self-hosted library, powered by Jellyfin.</p>
      
      {/* This is a placeholder for where our movie rows will go */}
      <div className="mt-10 h-40 w-64 border-2 border-dashed border-gray-600 flex items-center justify-center rounded-md">
        <span className="text-gray-500 italic">Movie Rows Coming Soon</span>
      </div>
    </main>
  );
}