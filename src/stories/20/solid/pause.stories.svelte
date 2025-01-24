<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PauseSvelte from '../../../lib/20/solid/pause.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: PauseSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Pause" />
