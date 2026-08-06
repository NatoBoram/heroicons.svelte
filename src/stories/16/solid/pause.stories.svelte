<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PauseSvelte from '../../../lib/16/solid/pause.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: PauseSvelte,
		args: { class: '' },
	})
</script>

<Story name="Pause" />
