<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowSmallDownSvelte from '../../../lib/20/solid/arrow-small-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowSmallDownSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowSmallDown" />
