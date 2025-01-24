<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowDownTraySvelte from '../../../lib/16/solid/arrow-down-tray.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowDownTraySvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ArrowDownTray" />
