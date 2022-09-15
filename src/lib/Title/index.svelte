<script>
  export let title = "QuoaEsCe";
</script>

<h1 class="w-full h-[5rem] text-center py-5 overflow-hidden">
  <p class="text-dark font-bold text-3xl animation">{title}</p>
</h1>

<style>
  .animation {
    animation: bouncing 4s ease infinite;
  }

  @keyframes bouncing {
    0% {
      transform: scale(1.5) rotate(8deg);
    }
    25% {
      transform: scale(0.9) rotate(12deg);
    }
    50% {
      transform: scale(0.9) rotate(-12deg);
    }
    100% {
      transform: scale(1.5) rotate(8deg);
    }
  }
</style>
