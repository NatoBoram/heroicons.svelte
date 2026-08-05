<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowDownCircleSvelte from '../../../lib/24/outline/arrow-down-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowDownCircleSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowDownCircle" />
