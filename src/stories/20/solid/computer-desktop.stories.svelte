<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ComputerDesktopSvelte from '../../../lib/20/solid/computer-desktop.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ComputerDesktopSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ComputerDesktop" />
