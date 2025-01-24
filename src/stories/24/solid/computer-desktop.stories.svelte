<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ComputerDesktopSvelte from '../../../lib/24/solid/computer-desktop.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ComputerDesktopSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ComputerDesktop" />
