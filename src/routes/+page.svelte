<script lang="ts">
  let click: number = 0;
  
</script>

<h1 class="text-xl pt-4">
  You tapped the button {click} times
</h1>

<button
  on:click={() => {
    click += 1;
    console.log("hello");
  }}
>Click me biatch</button>
