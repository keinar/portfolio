export default function AnimatedGradient() {
  return (
    <div className="fixed inset-0 -z-10 bg-background overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[128px] opacity-40 animate-pulse-slow" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-[128px] opacity-40 animate-pulse-slow delay-1000" />
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-accent/10 rounded-full mix-blend-screen filter blur-[128px] opacity-30 animate-pulse-slow delay-2000" />

      {/* Noise texture overlay for texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
    </div>
  );
}
