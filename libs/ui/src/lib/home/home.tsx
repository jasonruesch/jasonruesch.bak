export function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4">
      <h1 className="gradient-heading">
        <div className="flex items-center justify-center">
          I'm&nbsp;
          <span className="text-4xl !leading-cap sm:text-7xl lg:text-8xl">
            Jason Ruesch
          </span>
        </div>
        <div className="flex items-center justify-center">
          a&nbsp;
          <span className="text-4xl !leading-cap sm:text-7xl lg:text-8xl">
            Senior&nbsp;
          </span>
          Frontend
        </div>
        <div className="flex items-center justify-center">
          Software&nbsp;
          <span className="text-4xl !leading-cap sm:text-7xl lg:text-8xl">
            Engineer
          </span>
        </div>
      </h1>
      <p className="max-w-lg text-center text-base text-neutral-500 sm:max-w-screen-sm sm:text-xl lg:max-w-screen-lg lg:text-2xl dark:text-neutral-400">
        This is where I share my passion for creating exceptional user
        experiences through web development. Whether you're here for code,
        collaboration, or just to connect, I'm thrilled to have you.
      </p>
    </div>
  );
}

export default Home;
