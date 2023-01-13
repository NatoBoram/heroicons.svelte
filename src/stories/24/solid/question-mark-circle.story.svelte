<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { QuestionMarkCircle } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/QuestionMarkCircle" icon="heroicons:question-mark-circle">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="QuestionMarkCircle" icon="heroicons:question-mark-circle">
		<QuestionMarkCircle class={className} />
	</Hst.Variant>
</Hst.Story>
