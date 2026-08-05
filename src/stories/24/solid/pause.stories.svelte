<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PauseSvelte from '../../../lib/24/solid/pause.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: PauseSvelte,
		args: { class: '' },
	})
</script>

<Story name="Pause" />
