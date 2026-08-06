<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowLeftCircleSvelte from '../../../lib/20/solid/arrow-left-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowLeftCircleSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowLeftCircle" />
