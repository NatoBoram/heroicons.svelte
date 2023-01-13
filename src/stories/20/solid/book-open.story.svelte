<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { BookOpen } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/BookOpen" icon="heroicons:book-open">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="BookOpen" icon="heroicons:book-open">
		<BookOpen class={className} />
	</Hst.Variant>
</Hst.Story>
