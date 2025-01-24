<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ComputerDesktopSvelte from '../../../lib/16/solid/computer-desktop.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ComputerDesktopSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ComputerDesktop" />
