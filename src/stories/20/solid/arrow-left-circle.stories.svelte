<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowLeftCircleSvelte from '../../../lib/20/solid/arrow-left-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowLeftCircleSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ArrowLeftCircle" />
