<script>
  import Title from "$lib/Title/index.svelte";
  import Picture from "$lib/Picture/index.svelte";
  import { picturesData } from "$lib/data/picturesData.js";

  console.log(picturesData);
</script>

<div class="main w-full min-h-screen bg-blanc">
  <Title />
  <div class="pictures h-[calc(100%-5rem)] flex flex-wrap p-2 gap-5">
    {#each picturesData as pict}
      <Picture data={pict} />
    {/each}
  </div>
</div>
