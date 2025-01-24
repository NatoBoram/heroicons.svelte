<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowUpTraySvelte from '../../../lib/16/solid/arrow-up-tray.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowUpTraySvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ArrowUpTray" />
