<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { CodeBracketSquare } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/CodeBracketSquare" icon="heroicons:code-bracket-square">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="CodeBracketSquare" icon="heroicons:code-bracket-square">
		<CodeBracketSquare class={className} />
	</Hst.Variant>
</Hst.Story>
