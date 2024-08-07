<script lang="ts">
  import { onMount } from 'svelte';
  import { EditorState } from '@codemirror/state';
  import { EditorView } from 'codemirror';
  import { javascript } from '@codemirror/lang-javascript';
  import { basicSetup } from './CodeMirrorConfig';

  let state: EditorState = EditorState.create({
    doc: '',
    extensions: [
      javascript(),
      basicSetup
    ],
  });

  let editor: EditorView;
  let dom: HTMLElement;

  onMount(() => {
    editor = new EditorView({
      state,
      parent: dom,
    });
  });

</script>

<div bind:this={dom} class="editor"/>
