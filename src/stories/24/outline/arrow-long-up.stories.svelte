<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowLongUpSvelte from '../../../lib/24/outline/arrow-long-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowLongUpSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowLongUp" />
