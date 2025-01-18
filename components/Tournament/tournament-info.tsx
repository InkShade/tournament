"use client";

export function TournamentInfo() {
  return (
    <div className="relative mx-auto px-4 sm:px-6 max-w-none lg:max-w-full">
      <div className="relative overflow-hidden sm:h-[200px] md:h-[300px] lg:h-[300px] w-full rounded-md">
        <img
          src="/hero.jpg?height=800&width=1600"
          alt="Tennis Tournament"
          className="object-cover object-center w-full rounded-md"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-5 sm:p-6 flex items-end rounded-md">
          <div className="flex items-center space-x-4 max-w-screen-lg mx-auto">
            <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-white p-2">
              <img
                src="/logo.svg?height=100&width=100"
                alt="Tournament Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="text-white flex-1">
              <h1 className="text-xs sm:text-xl font-bold">
                GRAND TENNIS CHAMPIONSHIP 2024
              </h1>
              <div className="text-xs sm:text-l flex items-center space-x-4">
                <span>20.07 - 28.07.2024</span>
                <span>Professional Series</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
