<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowSmallRightSvelte from '../../../lib/16/solid/arrow-small-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowSmallRightSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowSmallRight" />
