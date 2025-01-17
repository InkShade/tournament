"use client";

export function TournamentInfo() {
  return (
    <div className=" mx-auto relative mx">
      <div className="h-48 overflow-hidden">
        <img src="/placeholder.svg?height=400&width=1200" alt="Tennis Tournament" className="w-full object-cover" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 ">
        <div className="flex items-center space-x-4 max-w-[1400px] mx-auto">
          <div className="h-16 w-16 rounded-full bg-white p-2">
            <img
              src="/placeholder.svg?height=100&width=100"
              alt="Tournament Logo"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="text-white">
            <h1 className="text-2xl font-bold">GRAND TENNIS CHAMPIONSHIP 2024</h1>
            <div className="flex items-center space-x-4 text-sm">
              <span>20.07 - 28.07.2024</span>
              <span>Professional Series</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}