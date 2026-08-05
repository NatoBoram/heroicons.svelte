<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import WindowSvelte from '../../../lib/24/outline/window.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: WindowSvelte,
		args: { class: '' },
	})
</script>

<Story name="Window" />
