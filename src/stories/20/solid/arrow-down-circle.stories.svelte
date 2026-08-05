<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowDownCircleSvelte from '../../../lib/20/solid/arrow-down-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowDownCircleSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowDownCircle" />
