<script lang="ts">
  import CodeMirror from "svelte-codemirror-editor";
  import { javascript } from "@codemirror/lang-javascript";
  import { oneDark } from "@codemirror/theme-one-dark";
  
  let value: string = "";
</script>

<div>
  <CodeMirror 
    
    on:change={() => {
      console.log(value)
    }}
    styles={{
      "&": {
        width: "500px",
        maxwidth: "100%"
      }
    }}
    theme={oneDark}
    bind:value lang={javascript()}
  />
</div>
