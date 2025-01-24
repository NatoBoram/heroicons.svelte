<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowDownTraySvelte from '../../../lib/20/solid/arrow-down-tray.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowDownTraySvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ArrowDownTray" />
