<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowLongUpSvelte from '../../../lib/16/solid/arrow-long-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowLongUpSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowLongUp" />
