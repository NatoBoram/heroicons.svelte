<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowUturnUpSvelte from '../../../lib/24/outline/arrow-uturn-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowUturnUpSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowUturnUp" />
