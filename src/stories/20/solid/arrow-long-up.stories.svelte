<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowLongUpSvelte from '../../../lib/20/solid/arrow-long-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowLongUpSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ArrowLongUp" />
