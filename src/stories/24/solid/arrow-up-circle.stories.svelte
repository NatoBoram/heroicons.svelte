<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowUpCircleSvelte from '../../../lib/24/solid/arrow-up-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ArrowUpCircleSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowUpCircle" />
