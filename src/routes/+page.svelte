<script lang="ts">
  import SkillCard from '$lib/components/skillscard.svelte';
  import ContactCard from '$lib/components/contactcard.svelte';
  import { onMount } from 'svelte';
  import { 
    IconBrandPython, IconBrandSvelte, IconBrandTypescript, IconBrandTailwind,
    IconBrandCSharp, IconBrandKotlin, IconBrandReactNative, IconBrandFlutter,
    IconBrandGithub, IconBrandX, IconMail
  } from '@tabler/icons-svelte';

  const greetings = ["Hi!", "Cześć!", "Bonjour!", "Hola!", "Hallo!", "Ciao!", "こんにちは", "안녕", "你好"];
  let index = $state(0);

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

<div class="fixed inset-0 -z-50 h-screen w-screen bg-base-100 transition-colors duration-700">
  
  <div class="absolute inset-0 transition-all duration-700
      /* LIGHT MODE: Ultra-intense Pinkish Gradient */
      bg-[radial-gradient(circle_at_75%_25%,_rgba(244,114,182,0.8)_0%,_transparent_70%),radial-gradient(circle_at_20%_80%,_rgba(244,114,182,0.3)_0%,_transparent_50%)] 
      
      /* DARK MODE: Deeper, saturated Indigo Gradients */
      dark:bg-[radial-gradient(circle_at_75%_25%,_rgba(79,70,229,0.4)_0%,_transparent_60%),radial-gradient(circle_at_20%_80%,_rgba(79,70,229,0.15)_0%,_transparent_50%)]">
  </div>
  
  <div class="absolute inset-0 backdrop-blur-[120px] pointer-events-none"></div>
</div>

<div class="relative w-full text-base-content selection:bg-pink-200 dark:selection:bg-indigo-500/30">

  <section id="home" class="h-screen w-full flex items-center justify-center bg-transparent">
    <div class="w-96 -translate-x-30 md:-translate-x-55 -translate-y-10">
      {#key index} 
        <h1 in:typewriter={{ speed: 2.5 }} 
            class="w-fit inline-block whitespace-nowrap text-6xl font-bold font-['JetBrains_Mono'] border-r-4 border-pink-500 dark:border-indigo-400 pr-2 animate-pulse">
          {greetings[index]}
        </h1>
      {/key}
      <p class="text-2xl mt-4 font-['Lilex'] opacity-80 leading-relaxed">
        I'm Szymon.<br>
        CS Student & Language Enthusiast.<br>Also a gym rat 🇵🇱
      </p>
    </div>
  </section>

  <section id="about" class="min-h-screen flex items-center justify-center border-t border-base-300/50 bg-transparent">
    <div class="max-w-5xl px-8 w-full">
      <h2 class="text-4xl font-bold font-['JetBrains_Mono'] mb-12">
        <span class="text-pink-500 dark:text-indigo-400 opacity-50 font-light">01.</span> About Me
      </h2>
      <div class="space-y-8 text-2xl font-['Lilex'] opacity-90 leading-relaxed max-w-4xl">
        <p>Student developer focused on frontend development, UI design, and building efficient, minimalist solutions, with strong interests in fitness and 
          <span class="inline-grid grid-cols-1 grid-rows-1 place-items-center align-bottom">
            <span class="invisible col-start-1 row-start-1 px-1" aria-hidden="true">こんにちは</span>
            {#key index} 
              <span in:typewriter={{ speed: 4 }} class="col-start-1 row-start-1 text-pink-500 dark:text-indigo-400 font-bold whitespace-nowrap">
                {greetings[index]}
              </span>
            {/key}
          </span> learning.
        </p>
      </div>
    </div>
  </section>

  <section id="skills" class="min-h-screen flex items-center justify-center border-t border-base-300/50 bg-transparent">
    <div class="max-w-5xl px-8 w-full">
      <h2 class="text-4xl font-bold font-['JetBrains_Mono'] mb-16">
        <span class="text-pink-500 dark:text-indigo-400 opacity-50 font-light">02.</span> Skills
      </h2>
      
      <div class="space-y-16">
        <div>
          <h3 class="text-xl font-['JetBrains_Mono'] mb-8 opacity-60">/ Core stack</h3>
          <div class="flex flex-wrap items-center gap-8">
            <SkillCard icon={IconBrandPython} name="Python" color="#3776AB" />
            <SkillCard icon={IconBrandSvelte} name="Svelte" color="#FF3E00" />
            <SkillCard icon={IconBrandTypescript} name="TypeScript" color="#3178C6" />
            <SkillCard icon={IconBrandTailwind} name="Tailwind" color="#06B6D4" />
          </div>
        </div>

        <div>
          <h3 class="text-xl font-['JetBrains_Mono'] mb-8 opacity-60">/ Also worked with</h3>
          <div class="flex flex-wrap items-center gap-6">
            <SkillCard icon={IconBrandCSharp} name="C#" color="#512BD4" size="small" />
            <SkillCard icon={IconBrandKotlin} name="Kotlin" color="#7F52FF" size="small" />
            <SkillCard icon={IconBrandReactNative} name="React Native" color="#61DAFB" size="small" />
            <SkillCard icon={IconBrandFlutter} name="Flutter" color="#02569B" size="small" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="projects" class="min-h-screen flex items-center justify-center border-t border-base-300/50 bg-transparent">
    <div class="max-w-5xl px-8 w-full">
      <h2 class="text-4xl font-bold font-['JetBrains_Mono'] mb-16">
        <span class="text-pink-500 dark:text-indigo-400 opacity-50 font-light">03.</span> Projects
      </h2>
      
      <div class="max-w-md">
        <div class="group relative p-10 rounded-3xl border border-base-300 bg-base-100/40 backdrop-blur-md hover:border-pink-500 dark:hover:border-indigo-500 transition-all duration-500">
          <div class="absolute -top-3 -left-3 px-3 py-1 bg-pink-500 dark:bg-indigo-500 text-white text-xs font-bold rounded-full animate-bounce">
            NEW
          </div>
          <h3 class="text-3xl font-bold mb-4">Coming Soon</h3>
          <p class="opacity-70 text-lg leading-relaxed">
            I'm currently building something cool with Svelte 5. Check back soon or follow my GitHub for updates!
          </p>
        </div>
      </div>
    </div>
  </section>

  <section id="contact" class="min-h-screen flex flex-col items-center justify-center border-t border-base-300/50 bg-transparent">
    <div class="max-w-5xl px-8 w-full grow flex flex-col justify-center">
      <h2 class="text-4xl font-bold font-['JetBrains_Mono'] mb-16">
        <span class="text-pink-500 dark:text-indigo-400 opacity-50 font-light">04.</span> Contact
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div class="flex flex-col gap-6">
          <ContactCard icon={IconBrandGithub} name="GitHub" color="currentColor" href="https://github.com/szyymii" />
          <ContactCard icon={IconBrandX} name="X / Twitter" color="currentColor" href="https://x.com/Hanakokunek" />
        </div>
        <div class="flex justify-center md:justify-end">
          <ContactCard icon={IconMail} name="Email" color="#FFB86C" href="mailto:szymondskag@gmail.com" />
        </div>
      </div>
    </div>
    <div class="pb-8 w-full text-center">
      <p class="font-['JetBrains_Mono'] text-xs opacity-40 tracking-widest uppercase">
        © 2026 Szymon / Built with Svelte 5
      </p>
    </div>
  </section>
</div>

<style>
  h1 {
    display: inline-block;
    width: fit-content;
  }
</style>