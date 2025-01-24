<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowRightCircleSvelte from '../../../lib/20/solid/arrow-right-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowRightCircleSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ArrowRightCircle" />
