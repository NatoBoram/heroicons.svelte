<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowUpTraySvelte from '../../../lib/20/solid/arrow-up-tray.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowUpTraySvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowUpTray" />
