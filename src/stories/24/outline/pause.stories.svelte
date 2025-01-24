<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PauseSvelte from '../../../lib/24/outline/pause.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: PauseSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Pause" />
