<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowLongUpSvelte from '../../../lib/24/solid/arrow-long-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ArrowLongUpSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowLongUp" />
