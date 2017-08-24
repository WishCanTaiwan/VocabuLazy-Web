interface NodeModule {
  hot: {
    accept(dependency: string, callback: () => void): void
  };
}

declare module '*package.json' {
  const info: {
    version: string;
  }
  export default info;
}