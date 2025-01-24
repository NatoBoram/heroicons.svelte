<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowDownTraySvelte from '../../../lib/24/solid/arrow-down-tray.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ArrowDownTraySvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowDownTray" />
