<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowLeftCircleSvelte from '../../../lib/24/solid/arrow-left-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ArrowLeftCircleSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowLeftCircle" />
