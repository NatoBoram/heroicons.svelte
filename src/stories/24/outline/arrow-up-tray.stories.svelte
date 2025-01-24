<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowUpTraySvelte from '../../../lib/24/outline/arrow-up-tray.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowUpTraySvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowUpTray" />
