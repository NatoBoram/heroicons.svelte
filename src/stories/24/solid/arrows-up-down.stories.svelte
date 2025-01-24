<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowsUpDownSvelte from '../../../lib/24/solid/arrows-up-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ArrowsUpDownSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowsUpDown" />
