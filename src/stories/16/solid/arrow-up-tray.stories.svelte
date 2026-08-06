<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowUpTraySvelte from '../../../lib/16/solid/arrow-up-tray.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowUpTraySvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowUpTray" />
