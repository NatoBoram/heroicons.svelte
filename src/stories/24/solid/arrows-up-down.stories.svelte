<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowsUpDownSvelte from '../../../lib/24/solid/arrows-up-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ArrowsUpDownSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowsUpDown" />
