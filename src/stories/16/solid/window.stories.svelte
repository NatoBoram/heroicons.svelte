<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import WindowSvelte from '../../../lib/16/solid/window.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: WindowSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Window" />
