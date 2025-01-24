<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowsPointingOutSvelte from '../../../lib/16/solid/arrows-pointing-out.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowsPointingOutSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ArrowsPointingOut" />
