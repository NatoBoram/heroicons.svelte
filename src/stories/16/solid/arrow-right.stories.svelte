<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowRightSvelte from '../../../lib/16/solid/arrow-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowRightSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowRight" />
