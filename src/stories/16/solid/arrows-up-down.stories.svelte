<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowsUpDownSvelte from '../../../lib/16/solid/arrows-up-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowsUpDownSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowsUpDown" />
