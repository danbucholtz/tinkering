
export function skipTwoFrames(readFrame: Function): Promise<void> {
  return new Promise((resolve) => {
    
    readFrame(() => {
      setTimeout(() => {
        readFrame(() => {
          setTimeout(() => {
            resolve();
          }, 5);
        });
      }, 5)
    })
  });
}