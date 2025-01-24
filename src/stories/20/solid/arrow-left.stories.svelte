<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowLeftSvelte from '../../../lib/20/solid/arrow-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowLeftSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ArrowLeft" />
