<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import WindowSvelte from '../../../lib/24/solid/window.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: WindowSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Window" />
