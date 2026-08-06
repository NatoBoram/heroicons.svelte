<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import WindowSvelte from '../../../lib/20/solid/window.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: WindowSvelte,
		args: { class: '' },
	})
</script>

<Story name="Window" />
