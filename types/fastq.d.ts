declare module 'fastq' {
  interface QueueOptions {
    concurrency?: number;
    taskTimeout?: number;
    autostart?: boolean;
    afterProcessed?: (err: Error | null, result: any) => void;
  }

  interface Queue<T> {
    push(task: T, cb?: (err: Error | null, result: any) => void): void;
    unshift(task: T, cb?: (err: Error | null, result: any) => void): void;
    pause(): void;
    resume(): void;
    idle(): boolean;
    length(): number;
    getQueue(): T[];
    kill(): void;
    killAndDrain(): void;
  }

  function fastq<T>(
    worker: (task: T, cb: (err: Error | null, result: any) => void) => void,
    concurrency: number
  ): Queue<T>;

  function fastq<T>(
    worker: (task: T, cb: (err: Error | null, result: any) => void) => void,
    options: QueueOptions
  ): Queue<T>;

  namespace fastq {
    function promise<T, R>(
      worker: (task: T) => Promise<R>,
      concurrency: number
    ): Queue<T>;

    function promise<T, R>(
      worker: (task: T) => Promise<R>,
      options: QueueOptions
    ): Queue<T>;
  }

  export = fastq;
}