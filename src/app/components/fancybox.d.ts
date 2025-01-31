// fancybox.d.ts
declare module '@fancyapps/ui' {
    interface Fancybox {
      bind: (selector: string, options: any) => void;
      open: (selector: string, options?: any) => void;
    }
  }
  