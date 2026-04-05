<script lang="ts">
  // Definiujemy propsy dla ContactCard
  let { 
    icon: Icon, 
    name, 
    color, 
    href 
  } = $props<{
    icon: any;
    name: string;
    color: string;
    href: string;
  }>();
</script>

<a 
  {href}
  target="_blank"
  rel="noopener noreferrer"
  class="group flex items-center gap-4 p-4 w-full md:w-80 border-2 border-base-300 rounded-xl transition-all duration-300 hover:-translate-y-1"
  style="
    --hover-color: {color};
    --hover-bg: {color}15;
  "
>
  <div 
    class="w-12 h-12 flex items-center justify-center rounded-lg border border-base-300 transition-colors group-hover:border-(--hover-color) group-hover:text-(--hover-color)"
  >
    <Icon size={28} stroke={1.5} />
  </div>
  
  <div class="flex flex-col">
    <span class="font-mono text-sm font-bold tracking-tight group-hover:text-(--hover-color) transition-colors">
      {name}
    </span>
    <span class="text-xs opacity-50 font-['Lilex']">Click to open</span>
  </div>
</a>

<style>
  /* Specyficzny hover dla karty kontaktu */
  a:hover {
    border-color: var(--hover-color);
    background-color: var(--hover-bg);
    box-shadow: 0 10px 30px -10px var(--hover-bg);
  }
</style>