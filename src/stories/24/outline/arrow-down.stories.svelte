<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowDownSvelte from '../../../lib/24/outline/arrow-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowDownSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowDown" />
