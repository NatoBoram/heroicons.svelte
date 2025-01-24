<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowsUpDownSvelte from '../../../lib/20/solid/arrows-up-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowsUpDownSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ArrowsUpDown" />
