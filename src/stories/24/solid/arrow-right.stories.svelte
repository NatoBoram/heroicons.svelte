<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowRightSvelte from '../../../lib/24/solid/arrow-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ArrowRightSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowRight" />
