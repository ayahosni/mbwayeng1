import 'scrollmagic';
import { Tween, Timeline } from 'gsap';

declare module 'scrollmagic' {
  interface Scene {
    setTween(tween: Tween | Timeline | string, duration?: number, params?: any): Scene;
  }
}