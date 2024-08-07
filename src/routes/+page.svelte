<script lang="ts">
  import CodeMirror from "../components/CodeMirror.svelte";
  import Button from "../components/Button.svelte";
  export let data;
</script>

  <ul>
    {#each data.countries as country}
      <li>{country.name}</li>
    {/each}
  </ul>

<div class="p-4">
  <Button>Click me</Button>
  <CodeMirror></CodeMirror>
</div>
