<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { CodeBracket } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/CodeBracket" icon="heroicons:code-bracket">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="CodeBracket" icon="heroicons:code-bracket">
		<CodeBracket class={className} />
	</Hst.Variant>
</Hst.Story>
