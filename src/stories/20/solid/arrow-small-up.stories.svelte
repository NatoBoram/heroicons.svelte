<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowSmallUpSvelte from '../../../lib/20/solid/arrow-small-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowSmallUpSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowSmallUp" />
