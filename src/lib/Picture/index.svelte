<script>
  export let data = {};
  let selected = false;
</script>

<div
  class="w-48 h-64 mx-auto {selected
    ? 'brightness-50'
    : ' brightness-100'} bg-taupe cursor-pointer shadow-lg"
  on:click={() => {
    selected = !selected;
  }}
>
  <h2
    class="flex w-full h-[3rem] m-auto overflow-hidden text-ellipsis whitespace-nowrap"
  >
    <p class="m-auto font-bold">{data.name}</p>
  </h2>

  <img
    draggable="false"
    class="w-full h-[13rem] object-cover object-top"
    src={data.src}
    alt={data.name}
  />
</div>
