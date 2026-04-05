<script lang="ts">
  import SkillCard from '$lib/components/skillscard.svelte';
  import ContactCard from '$lib/components/contactcard.svelte';
  import { onMount } from 'svelte';
  import { 
    IconBrandPython, 
    IconBrandSvelte, 
    IconBrandTypescript, 
    IconBrandTailwind,
    IconBrandCSharp,
    IconBrandKotlin,
    IconBrandReactNative,
    IconBrandFlutter,
    IconBrandGithub, 
    IconBrandX, 
    IconMail
  } from '@tabler/icons-svelte';
  const greetings = ["Hi!", "Cześć!", "Bonjour!", "Hola!", "Hallo!", "Ciao!", "こんにちは", "안녕", "你好"];
  let index = $state(0);

  // Custom Typewriter Transition
  function typewriter(node: HTMLElement, { speed = 1 }: { speed?: number }) {
  const text = node.textContent ?? "";
  const duration = text.length / (speed * 0.01);

  return {
    duration,
    tick: (t: number) => {
      const i = Math.trunc(text.length * t);
      node.textContent = text.slice(0, i);
    }
  };
}

  onMount(() => {
    const interval = setInterval(() => {
      index = (index + 1) % greetings.length;
    }, 1200);
    return () => clearInterval(interval);
  });

</script>
<!-- Home -->
<section id="home" class="relative h-screen w-full flex items-center justify-center bg-base-200 overflow-hidden">
    <div class="w-96 -translate-x-30 md:-translate-x-55 -translate-y-10">
        {#key index}
  <h1 
    in:typewriter={{ speed: 2.5 }} 
    class="w-fit inline-block whitespace-nowrap text-6xl font-bold font-['JetBrains_Mono'] border-r-4 border-secondary pr-2 animate-pulse"
  >
    {greetings[index]}
  </h1>
{/key}

<style>
  h1 {
    display: inline-block;
    width: fit-content;
  }
</style>
        <p class="text-2xl mt-4 text-base-content font-['Lilex'] opacity-80 leading-relaxed">
            I'm Szymon.<br>
            CS Student & Language Enthusiast.<br>Also a gym rat 🇵🇱
        </p>
    </div>

    <div class="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-60 animate-bounce text-secondary">
    <p class="font-mono text-xs mb-2 text-center uppercase tracking-tighter">Scroll</p>
    <svg class="w-6 h-6 mx-auto stroke-current" fill="none" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
    </svg>
</div>
</section>
<!-- About me -->
<section id="about" class="relative z-10 min-h-screen bg-base-100 flex items-center justify-center border-t border-base-300 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
    <div class="max-w-5xl px-8 w-full">
        <h2 class="text-4xl font-bold font-['JetBrains_Mono'] mb-12">
            <span class="text-secondary opacity-50 font-light">01.</span> About Me
        </h2>
        
        <div class="space-y-8 text-2xl font-['Lilex'] opacity-90 leading-relaxed max-w-4xl">
            <p>Student developer focused on frontend development, UI design, and building efficient, minimalist solutions, with strong interests in fitness and <span class="inline-grid grid-cols-1 grid-rows-1 place-items-center align-bottom">
                    <span class="invisible col-start-1 row-start-1 px-1" aria-hidden="true">こんにちは</span>
                    {#key index}
                        <span in:typewriter={{ speed: 4 }} class="col-start-1 row-start-1 text-secondary font-bold whitespace-nowrap">
                            {greetings[index]}
                        </span>
                    {/key}
                </span>  learning.</p>
        </div>
    </div>
</section>
<!-- Skills -->
<section id="skills" class="relative z-10 min-h-screen bg-base-100 flex items-center justify-center border-t border-base-300 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
    <div class="max-w-5xl px-8 w-full">
        <h2 class="text-4xl font-bold font-['JetBrains_Mono'] mb-16">
            <span class="text-secondary opacity-50 font-light">02.</span> Skills
        </h2>
        
        <div class="flex flex-col gap-12">
            <div>
                <h3 class="text-2xl font-bold font-['Lilex'] mb-8 opacity-70 tracking-tight">
                    <span class="text-secondary font-bold">/</span> Core technologies
                </h3>
                <div class="flex flex-wrap items-center gap-8">
                  <SkillCard icon={IconBrandPython} name="Python" color="#3776AB" />
                  <SkillCard icon={IconBrandSvelte} name="Svelte" color="#FF3E00" />
                  <SkillCard icon={IconBrandTypescript} name="TypeScript" color="#3178C6" />
                  <SkillCard icon={IconBrandTailwind} name="Tailwind" color="#06B6D4" />
                </div>
            </div>

            <div class="flex flex-col md:flex-row items-start md:items-center gap-12 mt-4">
                
                <div>
                    <h3 class="text-xl font-bold font-['Lilex'] mb-6 opacity-50">
                        <span class="text-secondary font-bold">/</span> Also worked with
                    </h3>
                    <div class="flex flex-wrap gap-6">
                        <SkillCard icon={IconBrandCSharp} name="C#" color="#512BD4" size="small" />
                        <SkillCard icon={IconBrandKotlin} name="Kotlin" color="#7F52FF" size="small" />
                        <SkillCard icon={IconBrandReactNative} name="React_Native" color="#61DAFB" size="small" />
                        <SkillCard icon={IconBrandFlutter} name="Flutter" color="#02569B" size="small" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Projects -->
 <section id="projects" class="relative z-10 min-h-screen bg-base-100 flex items-center justify-center border-t border-base-300 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
    <div class="max-w-5xl px-8 w-full">
        <h2 class="text-4xl font-bold font-['JetBrains_Mono'] mb-16">
            <span class="text-secondary opacity-50 font-light">03.</span> Projects
        </h2>
        <div class="flex flex-col gap-12">
          <h1 class="text-2xl font-bold font-['Lilex'] mb-8 opacity-50 tracking-tight">Work In Progress</h1>
        </div>
    </div>
</section>
<!-- Contact -->
<section id="contact" class="relative z-10 min-h-screen bg-base-100 flex flex-col items-center justify-center border-t border-base-300 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
    
    <div class="max-w-5xl px-8 w-full grow flex flex-col justify-center">
        <h2 class="text-4xl font-bold font-['JetBrains_Mono'] mb-16">
            <span class="text-secondary opacity-50 font-light">04.</span> Contact
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            <div class="flex flex-col gap-6">
                <ContactCard 
                    icon={IconBrandGithub} 
                    name="GitHub" 
                    color="#FFFFFF" 
                    href="https://github.com/twoj-nick" 
                />
                <ContactCard 
                    icon={IconBrandX} 
                    name="X / Twitter" 
                    color="#E7E9EA" 
                    href="https://x.com/twoj-nick" 
                />
            </div>

            <div class="flex justify-center md:justify-end">
                <ContactCard 
                    icon={IconMail} 
                    name="Email" 
                    color="#FFB86C" 
                    href="mailto:szymon@twoja-domena.pl" 
                />
            </div>
            
        </div>
    </div>

    <div class="absolute bottom-8 w-full text-center">
        <p class="font-['JetBrains_Mono'] text-xs opacity-40 tracking-widest uppercase">
            © 2026 Szymon / Built with Svelte 5
        </p>
    </div>

</section>