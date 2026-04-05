<script lang="ts">
  // Definiujemy propsy
  let { 
    icon: Icon, 
    name, 
    color, 
    size = "large" 
  } = $props<{
    icon: any;
    name: string;
    color: string;
    size?: "large" | "small";
  }>();

  // Używamy $derived, aby wartości aktualizowały się wraz ze zmianą propsów
  let containerClass = $derived(size === "large" ? "w-24 h-24 rounded-xl" : "w-16 h-16 rounded-lg");
  let iconSize = $derived(size === "large" ? 48 : 32);
  let textSize = $derived(size === "large" ? "text-sm" : "text-xs");
</script>

<div class="group flex flex-col items-center gap-2">
  <div 
    class="{containerClass} border-2 border-base-300 flex items-center justify-center transition-all duration-300"
    style="
      --hover-color: {color};
      --hover-bg: {color}0D;
    "
  >
    <Icon size={iconSize} stroke={1.5} class="transition-colors group-hover:text-(--hover-color)" />
  </div>
  
  <span class="font-mono {textSize} opacity-0 group-hover:opacity-100 transition-opacity text-center">
    {name}
  </span>
</div>

<style>
  div.border-2:hover {
    border-color: var(--hover-color);
    background-color: var(--hover-bg);
  }
</style>