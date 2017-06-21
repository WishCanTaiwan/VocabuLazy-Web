interface NodeModule {
  hot: {
    accept(dependency: string, callback: () => void): void
  };
}