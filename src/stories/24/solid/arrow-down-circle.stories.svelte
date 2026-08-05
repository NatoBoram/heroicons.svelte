<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowDownCircleSvelte from '../../../lib/24/solid/arrow-down-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ArrowDownCircleSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowDownCircle" />
