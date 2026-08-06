<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowUpSvelte from '../../../lib/24/outline/arrow-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowUpSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowUp" />
