<script lang="ts">
  import CodeMirror from "svelte-codemirror-editor";
  import { javascript } from "@codemirror/lang-javascript";
  import { EditorView } from "./CodeMirrorConfig";
  import { oneDark } from "@codemirror/theme-one-dark";
  import { basicSetup } from "./CodeMirrorConfig";

  let view: EditorView;
  let value: string = "";
</script>

<div>
  <CodeMirror 
    on:ready={(e) => view = e.detail}
    on:change={() => {
      console.log(value)
    }}
    styles={{
      "&": {
        width: "800px",
        maxwidth: "100%"
      }
    }}
    basic={ false }
    extensions={[ basicSetup ]}
    theme={oneDark}
    bind:value lang={javascript()}
  />
</div>
