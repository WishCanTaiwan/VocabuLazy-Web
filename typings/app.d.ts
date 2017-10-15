interface NodeModule {
  hot: {
    accept(): void
    accept(dependency: string, callback: () => void): void
  };
}

declare module '*package.json' {
  const info: {
    version: string;
  }
  export default info;
}

// declare module 'styles' {
//   type theme = typeof Object;
//   export default theme;
// }
